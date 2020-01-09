# KR 3: Transport layer
Notes for Kurose & Ross 2017 by Kasper Rasmussen

## Services and multiplexing
The transport layer provides **logical communication** where it feels like the communicating parts are directly connected even though a lot of things are going on underneath. The layer is *implemented in the end hosts by software*, everything in between is done by lower layers. TCP and UDP are two different transport-layer protocols with different uses. Packets are called **segments**.

The layers beneath offer only communication between devices, but an important service of transport is to enable *processes* on two different machines to communicating. So when the data comes to the host the transport layer should pass it on to the correct socket, this is **demultiplexing** - when data is coming in. Taking data going out from all the different sockets and sending them with the network-layer is called **multiplexing**. Port numbers are used for this. A socket is connected to a specific port, so if I want to communicate with a specific process on your machine which has a socket listening on port 700 then I need to specify 700 as the destination port number field, so that the demultiplexing can happen correctly. There are both source ports and destination ports. Port numbers 0-1023 are **well-known port numbers** for common protocols like HTTP or FTP. The port information are put in the header of the transport layer segment. 

## UDP
UDP is very simple since it is connectionless, you just go ahead and send the segment. It is used by DNS. It can be good if you want minimum sending rate, want to save time by not having to shake hands, do not want to manage connections or just want to have small packages. Some firewalls block UDP segments. TCP has limits the outgoing traffic for the greater good but UDP does not, so that can be unfair.

The header has 4 fields of 2 bytes each, so 64 bits: Source port, destination port, length and a checksum. The checksum is used to detect bit errors which might have occured. The checksum is found by splitting the segment into chunks and treating them as numbers which are added together, wrapping overflows around and taking the bitwise complement. The idea is that the checksum is the rest you need for all the chunks to add up to 1111...111, so the receiver can check if something has gone wrong. It is not a perfect method at all though.

## Reliable data transfer
TCP offers a service of reliable data transfer so that the segment is ensured to arrive, no bits are changed or lost and segments arrive in order. The layers below does not offer this, fx because of queing, so TCP has to make this happen just using the software at the end-points.

**Acknowledgements** (ACKS) are used: If the checksum does not match a negative acknowledgement ("please repeat that") is sent so that it can get retransmitted. Positive acknowledgements mean "I got the message" and if I do not hear "I got the message" from you after some amount of time I will send the message again. This causes problems if we do not add a **sequence number** in order to ensure that packets arrive in order and not mistake a retransmission for a new message. ACKs can also get corrupted or lost, so the system. A lot of problems arise when you want to have *pipelining* where many messages
are sent at once instead of sending one, getting ACK, senting one, getting ACK etc. Pipelining is needed since otherwise it is really slow. Two methods are presented in the book.

#### Go-Back-N
We are at the sender with a queue of messages outgoing. A lot of the messages to the left have been acknowledged already and there are some which have been sent but have not been acknowledged. We allow only N unacked segments. Suppose we ignore any acknowledgements of
messages which are not the absolutely leftmost unacked message. Then they are separate blocks: Acked, unacked, available. The leftmost unacked position is the **base** and the leftmost unsent is **nextseqnum**. Our **window** goes from base to base+N. When the unacked at the base gets acknowleded the window slides 1 to the right so there is space for a new segment in queue.

Actually we do not ignore acknowledgements, rather the receiver side will ignore any received segment which is not the next expected in the sequence. We **cumulative ACKs** where we receivers acks for all up to the currently received sequence number and ignores any. Go-Back-N comes from the fact that a timer is used where at timeout all the unacked messages are retransmitted. So if I send one packet then another but the first gets lost
both will be retransmitted. This makes it simple for the receiver.

#### Selective repeat
Selective repeat avoids the case in Go-Back-N where one lost package causes many to be retransmitted, so it is selective with what it repeats/retransmits. Now we do not have the same separated blocks, among the unacked there might be acked. So the ack is no cumulative and packets which are not the next expected will still be "buffered". Instead of one timer for the unacked at the base we have one timer for each unacked.

## TCP
TCP is more complex than UDP, it is based on having a connection between the two hosts. The connection goes both ways, we say that iti is **full-duplex**, and again we note that this layer and thus the connection-aspect is made only from software at the end-points. The connection is started with a handshake which is three-way with the client starting obviously.

When the client process uses the socket to send data it lands in the **send-buffer** like we saw above. There is a **maximum segment size** so some messages will be split into multiple ones, MSS is around 1500 bytes. Because of encapsualtion the TCP segment becomes encapsulated into an IP datagram and so on. The **header** of the *TCP* segment is of course more complex than the UDP header which was only 8 bytes. Here it is typically 20 bytes and beyond port numbers and checksum it also has a sequence number, acknowledgement number, receive window, header length, options field and flag field.

The TCP connection is like an ordered stream of bytes so the **sequence number** is the byte number of the first byte in a segment. When B receives a segment from A it knows the length and the sequence number so it can find the next sequence number it should receive. This will be the acknowledgement number. It uses the cumulative ACK where the acknowledgement number will be the lowest byte we expect. It depends on the implementation whether B will discard out-of-order segments or buffer them.

Like above we use a timer to find out when we should retransmit, the timout intervals are based on a changing estimation of the round-trip time using an exponential weighted moving average of **sampled RTTs**. These samples are found by taking the time between sending and acknowledgement for some of the segments we send. When finding the average of the samples the newest samples count the most, exponentially more. Other than the mean we also find the variability of the round-trip time so how much it can be different from the mean by taking the distance between the sample RTT and moving average. These **samples of variability** are also used for an exponential weighted moving average. Then these two values are used for determining the timeout interval: $timeout = mean + 4 \cdot variability$ starting with 1 second.

TCP uses only one timer, when it times out it retransmits the unacked segment at the base. When receiveing the cumulative ACK the base is updated to the ACK number, since that is what the receiver wants next.

For each timeout the interval is **dobuling** and returns only to the previous way of finding the interval if there is an ACK or new data has been put into the socket. The timeout likely happened because the network was congested so if every host does slower retransmission when seeing it to be congested, then the network will get less congested.

There is a way to decrease the end-to-end delay even though the interval is quite high. If I send a lot of segments at once then if one of them is lost you will keep on sending ACK with the one which is lost. If I receive many of the same ACK that means that is probably what happened and not just a simple reordering. So if TCP received *3 duplicate ACKS* then it will do **fast-retransmit** where it sends that segment before the timeout.

### Flow control
When TCP receives correct it lands in the receive buffer so the relevant process can read, but this receive buffer is only so big so it can overflow. **Flow-control** matches the sending speed with the reading speed of the application.

Right now we image no packets lost or anything so we just get the packets in correct order. At the receiver, imagine the oldest to the left and newest on the right. Then the rightmost block starting with $LastByteRead$ has been already read, and the left block starting with $LastByteReceived$ has segments which not been read. The size of not read is $LastByteRead - LastByteReceived$ and it should be  less than the size of the buffer $RcvBuffer$.

The **receive window** is the available space in the buffer.
$$
rcwnd = RcvBuffer - (LastByteRead - LastByteReceived)
$$

The receiver will actually tell the sender how big the receive window is and the sender will have its own variables to figure out how much it should sent.

At the sender we also have a kind of queue of sent messages, first with the acked segments with the last one being $LastByteAcked$ and then the unacked with the last one being $LastByteSent$. The number of unacked is then $LastByteAcked - LastByteSent$. The $LastByteAcked$ might not be exactly the same as the last $LastReceived$ but it will not be greater, so if we just keep the number of unacked below $rcwd$ by not sending so many, then we should be good.

### Congestion control
As said above, timeouts happen because of congestion but the large-scale solution cannot be that everyone just retransmit their segments because then the network will just be more congested. We need congestion control, and it could be that the routers could send information about their queues and so on, but they already have a lot to do. TCP includes **end-to-end congestion control** where the end systems themselves determine congestion and acts accordingly.

We already have the receive window limiting how many unacked messages would be sent, but we also have the **congestion window** in the sender which starts from the same place; the oldest sent message but it stops
somewhere else. The unacked messages should fit into *both* windows. We can make this window small when there is congestion where packets are lost. The problem we have to solve is then to determine how to adjust the windows. The **TCP congestion-control algorithm** *probes* the bandwidth: How high can we go without causing problems?

First there is the **slow start** where the congestion window is 1, or really 1 maximum segment size MSS. The sending rate is 1 MSS / RTT since that is the time before we get the ACK and move the window. But it *doubles* for every ACK so it grows exponentially, so it is really a fast start. On a timeout it will reset the window to 1 and make slow start up to half of the previous maximum. So if you have a graph of showing the window size and it goes to zero that means it was a timeout. If it gets back to that half of previous max called the slow start threshold it assumes it will soon hit a wall again so it is in **congestion avoidance mode** where the growth is *linear* with 1 MSS (like 1 segment) increase for each ACK. There is also the case with fast retransmit because of 3 duplicate ACKS, here it will only *halve* the window and the threshold becomes the same as the halved window and is now in **fast-recovery** where it grows linear with 1 MSS for each of these duplicates and returns to congestion-avoidance when it gets the ACK for the missing segment. 