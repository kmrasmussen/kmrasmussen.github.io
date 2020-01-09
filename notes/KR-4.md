# KR 4: The network layer -  Data plane
Notes for Kurose & Ross 2017 by Kasper Rasmussen

The network layer is divided into the control plane and the data plane, where the data plane is concerned with **forwarding** which is where a router should send an incoming datagram by looking up in its table, so it is local. The control plane is about the global network, finding what the different tables should actually be using routing algorithms.

The network layer is made using the Internet Protocol **IP** so as before we want to know which *services* it offers to the layer above, the transport-layer. The service it offers is called the **best-effort service** where it is not guaranteed that they arrive or that they arrive in order. TCP deals with this problem, since IP just does its best.

## Inside the router

A router 3 major hardware parts, an input and an output port and a switching fabric. The whole deal with routing is to get a packet from some input port to the correct output port and do it fast. In the **input port** there are 3 steps, first terminating the physical link, then getting the datagram from the link-layer and then using the **forwarding table** to see which output port the datagram should go to. Then in the **switching fabric** it gets transferred to the output port. In the **output port** stores these packets and send them when ready. There is also a routing processor the control plane.

In **destination-based forwarding** we only look at the destination IP address when deciding the output port. The forwarding table consists of *prefixes* and respective output ports and the router has to look for the *longest prefix which matches the destination IP* and send it to that output port/link interface. A lot of advanced hardware exists to make this lookup fast, fx SRAM stuff.

The problem that **switching fabrics** solve is the problem of how to get the input and output ports connected so that a packet coming from some input port can get to any of the output ports fast on average. There are different ways, one is to switch via *memory*, writing to some place, but that is slow since it is one at a time. Switching via a *bus* has the datagram going by bus through all of the output ports and jumping off at the right one by using some info added to the header, but it is still slow with only one datagram on the bus at once. An **interconnction network** is faster. If we have N inputs and N outputs we will have N busses going out from in and N busses going into out and they form a square grid: It is like Manhattan, a datagram starts on an input bus and transits to the correct output bus. There can still be blocking if two are going to the same output port.

There are queues both at the input and output ports. The switching has to be fast otherwise more packets will come than are being switched. When there is queing there can even be a problematic situation for a segment S which is not in front of the the queue and is waiting to go to port X. Again we have N and N in and out ports. If the segment in the front of S's queue is going to out Z and another in front is also going to Z then there will be blocking. Even if none of those in front go to X, S still have to wait. All of this is **head-of-line blocking**.

The first step in the **output ports** is the output queue where queing happen if it cannot get rid of them fast enough. When ready the datagram will get encapsulated so it is ready for the link-layer and sent off from the line termination.

## IP

An IPv4 datagram typically has a 20-byte header where an important field is the **time-to-live** TTL which starts at some number and each router decreases the number. If it gets to 0 before arriving the packet is deleted, this is so that we avoid having datagrams travelling forever in the network.

Some details about the link-layer gives the problem that datagrams can be too big. Then the router splits it into multiple **fragments**. It takes the actual contents and gives each their own header but there is a header fields called the identification, flag and fragmentation offset field which allows the end-host to collect the fragments into one piece.

An IPv4 address is 4 bytes or 32 bits and usually each byte is written as a decimal number with dots between them. An IP address is like a postal address where the leftmost represent larger areas like the country and the rightmost a very specific. So in a **subnet** of the large internet all the IP adresses start with the same bits. The **subnet mask** can be 223.1.1.0/24 meaning that all the addresses for this subnet has the 24 bit prefix. The one with just zeroes for the rest is the network address and the one with just ones is for broadcasting on the subnet, so only the ones inbetween can be used. An ISP has a subnet so it may have the block of adresses which start with the same 20 bits perhaps, so it has $(32-20)^2 - 2$ adresses where we subtract 2 because of the just ones and the just zeros are not available.

## DHCP

When a host joins a network it needs an IP and it can get it using the DHCP protocol which is client-server based. The host which does not have any IP but wants one sends a UDP message on 255.255.255.255:67 and it will get an offer message which is also broadcasted since there can be no destination IP yet. This is an offer of a temporary IP with a specific lease time. If the client accepts it it sends a request and hopefully gets and ACK from the server.

## NAT
Because there are almost not enough IP addresses for all the new devices NAT is a solution where only the router needs a public IP. All the hosts connecting to the router gets an IP from the 10.0.0.0/24 mask, which is reserved for private networks. When the host tries to communicate with someone outside the router will puts its own IP in the destination IP field instead and also replaces the destination port. When the router gets a response from the server outside it will put them back in. So the router has a **NAT translation table** where it can use the destination port of the incoming datagram to look up which of the hosts is the actual destination and which port it should be.

## IPv6
The IPv6 has 128-bit addresses and no fragmentation or checksum or options, so it is always a 40 bytes header. Transitioning to IPv6 is gradual because the internet is too large to make a "flag day". The transition is made using **tunneling**: If there is an IPv4 router between two IPv6 routers A and B then then A will encapsulate the whole IPv6 datagram inside an IPv4 datagram and when it arrives at B, the IPv4 header can be taken off.