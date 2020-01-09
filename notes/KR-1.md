# KR 1: Computer Networks and the internet

Notes for Kurose & Ross 2017 by Kasper Rasmussen

## What is the internet?

All the devices conncted to the internet which are not only there for it to function are called **hosts** or end systems. They include laptops, phones, tablets, servers etc. End systems are connected to each other by a system of routers and link-layer switches which communicate over links. An **ISP**, internet service provider, is a company which provides access to the internet by having a network with routers and everything, they are connected to each other so that every host on the globe can reach each other, almost. Nodes on the network have protocols which define how they should communicate, fx TCP or IP. They are defined in RFC documents by the organization IETF.

When computer programs to networking, they interact with a **socket** interface which is like a "door" to the outside world: They shove their messages out the door and someone else does the work of getting it to the right place, namely the internet infrastructure. Since software and hardware on the internet needs to communicate there needs to be some formats and rules for how the communication should be done. A big part of learning about computer networks is understanding different protocols. P. 37: *A **protocol** defines the format and the order of messages exchanged between two or more communicating entities, as well as actions taken on the transmission and/or receipt of a message or other event.*

### Packet-switching

When a hosts sends some data to another host, the data is split into **packets** of data and they a going through the network of routers until they hopefully end up at the receiving end. There are some important details to understand about routing.

A router receives packets over a link with some number of bits per second. So the packet takes some time to receive. The router needs to pass the packet onto another router and so on. **Store-and-forward transmission** means that the router will only start passing the packet when it has received the whole packet. Based on this one can do some math to calculate the time to transfer a packet of a given size over a link with a given transmission rate, that is the number of bits per second which can flow through the link: If we can send $R = 4$ bits in 1 second, then how many seconds do we need to send a packet of $L = 12$ bits? Surely it is $L/R = 12/4 = 3$ seconds. So remember that the **transmission  delay** is $L/R$. Now, when the packet goes through multiple routers, the packet will go completely to the first, then go to the next, until it is done, so if it jumps $N$ times it the **end-to-end delay** is $N \frac{L}{R}$

This delay is not the only one however. A router might receive many packets and it can only transmit them so fast, so some of them will have to wait in queue. It can take some time before reaching the head of the queue so there is a **queing delay**, and this delay can vary quite alot depending on how much traffic there is. If there is a lot of traffic it might even happen that too many packets come to the queue so that some of them will just be deleted or a packet already in the queue will be deleted. This is **packet loss**. The router might be able to send packets in different directions and it looks at some information in the packet and matches it with a forwarding table it has, in order to know which way the packet should be sent.

All of this is called **packet-switching**, where we have packets and they end up in queues and so on. It works quite well, but there is another way to make networks which uses **circuit-switching**. Instead of Alice just showing the packet out the door (socket) and seeing how it goes with the routing and the queing delays and so on, in these other networks, a circuit is first established where a session of communication is established between Alice and Bob where they can be sure to communicate with a specific rate (number of bits per second). They have their own dedicated connection reserved for them. There can be fx two such connections Alice-Bob and Camilla-Donald on the same link at the same time. The link communicates a signal which can hold different frequencies. Some band of frequencies could be dedicated to Alice-Bob and some other band to Camilla-Donald. This would be **frequency-division**. It could also be that Alice-Bob and Camilla-Donald take very short turns in communicating, this would be **time-division**. Packet switching is used on the internet because the volume of traffic changes a lot and people are active and inactive and in that case packet switching does well because it does not waste bandwidth which is not currently used by fx Camilla-Donald.

## Delays

Above, we talked about delays when a packet is routed through the network. The first thing with $L/R$ is called the transmission delay and the other was queuing delay. There is also a short processing delay, before that. The transmission delay is not really based on how fast the data flows through the link but how fast it can get pushed into the link. For the other thing we have the **propagation delay** which depends on how long it needs to go (distance $d$ in meters) and how fast it can go (speed $s$ in meters per second). If a bit has to travel through a link which 15 meters logn and the bit can travel 5 meters in 1 second, how long is the propagation delay? Surely it is $15/5 = d/s = 3$ seconds. The **total nodal delay** is the sum of these 4 delays.

The **traffic-intensity** at a router, quite intuitively compares how much comes in with how much can come out. Remember that what can come out is actually the transmission rate $R$, so if $I$ is the incoming bits per second it is $\frac{I}{R}$. If incoming is more that outcoming then it is not sustainable and the queue will grow and grow till it gets full and a lot of packet loss will occur.

Just like with water out of a bottle, the **bottleneck** limits how fast it goes. In the same way if some data takes a specific route through the network, then the link with the lowest transmission rate will be the limiting factor and so the throughput is the minimum transmission rate on the path.

### Protocols and layers
The internet consist of different **layers** from the very bottom with the physical links up to application protocols for websites and email. Each layer provides a service to the server above and uses the **services** of the layer below. Fx sending a mail happens on the high-layer and it uses a layer below which guarantees that contents are reliably transferred (TCP) and this layer uses the layer below for getting the data to the right place (IP) and this layer uses the service of the layer below (communication links). From top to bottom we have:

* Application
* Transport
* Network
* Link
* Physical

This layering is closely related to **encapsulation**. When the mail (application-layer) is sent there is some message, and in a way we are going down through the layers, so the layer below (transport-layer) encapsulates the message with some additional information and the result is a **segment** and then by the coming to the network layer we encapsulate again and get a **datagram**, then in the link-layer it becomes a **frame** and at the physical layer it is just bits.