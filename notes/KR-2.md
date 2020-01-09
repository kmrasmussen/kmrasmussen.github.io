# KR 2: Application layer
Notes for Kurose & Ross 2017 by Kasper Rasmussen

## Principles of Network Applications
Computer programs can communicate over the network by using sockets and we then call them network applications. When we are building network applications we are not just dealing with a program but with an architecture because we can think of how multiple hosts running programs communicate with each other. It might be that one host is the **server** and another is the **client** where the client *requests* something from the server. We could also have peer-to-peer *P2P* networks where everyone plays roughly the same role. In the book the client is defined as the one who initiates contact, so that the client-server way of speaking is also valid in P2P.

Each host has its own **IP address** which can be used to send data to it. It is called IP address because it is the Internet Protocol at the network layer which performs the service of routing it to the correct place. A host also has multiple **ports** (fx port number 80) where data can get to it. This is used so that when the computer receives the data through a specific port it knows which running process should get the data through the socket. 

## HTTP
When computers speak to each other over the network they cannot just speak human language, they have to be very precise, so they use a protocol, a very strict language which specifies which kind of messages can be sent, what they mean and what to do when receiving these messages. HTTP is a major application-level protocol used for the world wide web. A web browser is a program which is a client so it sends requests (messages) to a web server.

There are both **non-persistent** and **persistent** connections that a client can have with the server. HTTP uses TCP from the layer below and TCP is based on connections. Non-persistent means that in the TCP connection there is only one HTTP request and one HTTP response and then the connection stops. The Google frontpage is a HTML document but it also has an image with the logo. Persistent is sometimes good, because then we can use "pipelining" where we send many requests at once instead of waiting for each one. In that case the server can send a new response each time it receives a request.

So what happens back and forth? First the client sends a TCP message to the server and the server acknowledges. Now the connection is ready for HTTP requests. The client sends a request for some webpage and the server responds. The **round-trip time** is one time back and forth for small packages like the one needed to begin it. Using all the delays we learned about previously, one can find the RTT between 2 hosts for a small package of maybe 64 bytes.

HTTP is a protocol so it specifies how messages should look. A HTTP request is normal ASCII text: First a request line, then some header lines, an empty line and then the real content. The **request line** is as follows: "\<method\> \<url\> \<HTTP version\>". Method is the type of message: GET, POST, PUT, DELETE. Url could be "/logo.jpg". The **header lines** have the format: "\<field name\>: \<field value\>", fx "Connction: close", "Date: Tue, 18 Aug ...". A response is roughly the same, but instead of a request line we have a **status line** with format "\<HTTP version\> \<status code\> \<phrase\>". The HTTP version is fx "HTTP/1.1", the status code and phrase belong together like "200 OK" or "404 Not Found".

#### Cookies
In the response a header line can be "*Set-Cookie: ...*" and a request can have "*Cookie: ...*" This allows a webserver to identify or track a user. The first time the client connects to the server it has no cookie header line but when the server responds it has a "Set-Cookie: $x$" line where $x$ is a random number. The *semantics* of Set-Cookie is that at the next requests the client should say "Cookie: $x$" also when the computer restarts the next day fx. The program running on the server can use a database or something to hold track of the different $x$'es in order to know which "person" is requesting which pages.

#### Web caching
Caching is an important part of computer systems which makes it possible to get the data faster. If I want to get a page from a Web server far away it might take a long time. Instead I could access a nearby Web cache which has saved some of the pages on that website instead. If it has the page it will respond and I will have saved time. If it doesn't, it will itself get the page from the faraway server and perhaps next time I need the page it will have it. It is common to have in companies or universities, since some pages are accessed by many users and so a lot of time and traffic can be saved.

## DNS
The Domain Name System connects IP adresses with domain names. Instead of having to write a number in the browser you can just write google.com called the **hostname**. The main *DNS service* is the translation from hostnames to IP adresses, since the IP adresses are the ones you actually need to send a package somewhere. Other services are host aliasing where complicated hostnames can get simpler hostnames which point to the complicated ones. It can also be used for load distribution so that when people access a site the IP they will not always be the same.

So the main problem is how have this large database relating hostnames to IP adresses. A single server for the whole world is not a good idea, instead it is based on a hierarchical system with maybe 400 root DNS servers at the top at different places in the world. The contents of these servers are replicated in other places also. These root servers are connected to the top-level domain servers each of which manage all the hostnames ending with fx .com, .dk or .org. Fx DKHostmaster manages .dk hostnames. These top-level domain servers are connected to **authoritative DNS servers** fx diku.dk has its own. Outside the hiearchy there are also local DNS servers used for caching, fx the university local DNS server.

So how does the client host who wants the IP of google.com actually get it? The host asks the local DNS server. The local DNS server can get the IP using two approaches. The **iterative query** approach is that it starts with the top of the hiearchy: It asks the root server, the root server tells it which TLD server to ask, the TLD server tells it which authoritative server to ask and it gets the answer. The **recursive querying** has the local ask the root server where it is the root server which itself asks the TLD and so on and then when we get to the authoritative it is going all the way back to the root server. So it is recursive in a simple sense. The DNS system also uses caching.

The whole DNS system is like a distributed database. The records in the database are called **resource records** (RR) 4-tuples $(name, value, type, TTL)$. For type A, name and value is hostname, IP. For type NS it is domain and authoritative DNS server hostname. For type CNAME it is alias and canonical hostname, for type MX it is canonical name and mail server.

## P2P
P2P systems are good if many $n$ hosts want the same file of $F$ bits. If it was just one server then the upload rate of the server would be probably be limiting, but if the file just starts on the server but all peers can share, then the total upload rate is much higher. 

BitTorrent is a P2P protocol for sharing files. A file has a *torrent* of all the peers getting or sending it. There is a **tracker** which knows about all the peers in the torrent. If you want the file you contact the tracker and get the addresses of some random peers in the torrent. You contact them and ask them which chunks of the file they have and ask for the ones you do not have. You go for the rarest chunks. They will also ask you for chunks and you give priority to the ones who send you a lot of data, called the **unchoked peers**, but sometimes randomly you select a lucky peer which gets some of your data even though he is not so good at sending. This guy is **optimistically chocked** and gets chance to get in.

## Email

Email has **user-agents** and **mail-servers**. The servers communicate using the **SMTP** protocol. A mail from Alice is on her mailserver on amail.com and is to Bob who uses bmail.com. The mail in the outqueue on amail.com and when gets to the head of the queue, the amail server will start at TCP connection to bmail.com and after setting up the things it transfers the whole email. Now Bob can access it. User-agents are the software which Alice and Bob uses to read and send the emails. This software helps Alice connect to the amail.com mailserver and Bob to bmail.com. This communication between Alice and amail is not based on SMTP which is only for transfer of mails between different mailservers. Here the protocols are POP3 or IMAP or just HTTP use webmail like on gmail.com.

## Video streaming and CDNs
A very big portion of the internet traffic is used by video streaming from sites like Netflix and YouTube. Of course these are websites so HTTP is involved, but the actual video can also be streamed with HTTP. HTTP-based streaming with **DASH** has the server split the video up into chunks of a few seconds. Each chunk has copies in different qualities and then the browser can manage when to request each by managing a buffer and if it is too slow it can request chunks of lower quality.

**Content distribution networks** are used to deliver the contents like these chunks fast and for Netflix to save money. Akamai has many servers in very many places and they distribute the files efficiently like a lot of coordinated Web proxies, so that users can access the data faster.