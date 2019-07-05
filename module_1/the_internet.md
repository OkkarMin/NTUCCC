---
prev: /module_1/
next: ./website_vs_webapp.md
---

# The Internet

> TLDR: Routers Moving Packets According To Various Protocols

## How does the Internet Work? :earth_asia:

Works through a packet routing network according to the *Internet Protocol (IP)*, *Transport Control Protocol(TCP)* and other protocols.

## Protocol? What is that? :page_with_curl:

A protocol is a set of rules specifying how computers should communicate with each other over a network. For example, the *Transport Control Protocol has a rule that if one computer sends data to another computer, the destination computer should let the source computer know if any data was missing so the source computer can re-send it.* Or the *Internet Protocol which specifies how computers should route information to other computers by attaching addresses onto the data it sends.*

## What about packets? :package:

Data sent across the Internet is called a message. Before a message is sent, it is first split in many fragments called packets. These packets are sent independently of each other. The typical maximum packet size is between 1000 and 3000 characters. The Internet Protocol specifies how messages should be packetized.

## Do packets always make it to their destination? :round_pushpin:

The *Internet Protocol* makes no guarantee that packets will always arrive at their destinations. When that happens, it’s called called a *packet loss*. This typically happens when a *router receives more packets it can process*. It has no option other than to drop some packets.

However, the *Transport Control Protocol handles packet loss by performing re-transmissions.* It does this by having the destination computer periodically send acknowledgement *packets* back to the source computer indicating how much of the message it has received and reconstructed. If the destination computer finds there are missing *packets*, it sends a request to the source computer asking it to resend the missing *packets*.

When two computers are *communicating* through the *Transport Control Protocol*, we say there is a *TCP connection between them.*

## What is the link between IP Address and Domain Name? :mag:

We call looking up the IP address of a human-readable domain name like `www.google.com` *resolving the IP address*. Computers resolve IP addresses through the Domain Name System (DNS), a decentralized database of mappings from domain names to IP addresses.

| Domain name      	| :arrow_right: 	| IP Address     	|
|:----------------:	|----------------	|:--------------:	|
| www.google.com   	| :arrow_right: 	| 172.217.194.99 	|
| www.facebook.com 	| :arrow_right: 	| 157.240.25.35  	|

## How do applications communicate over the internet? :iphone::left_right_arrow::computer:

Through Internet Network Layers

<center>

![InternetNetworkLayer](https://cdn-images-1.medium.com/max/800/1*PxADiXu9n6cFFEl2QOLwdA.jpeg)

</center>

These are called layers because they are built on top of each other; each layer uses the capabilities of the layers beneath it without worrying about its implementation details.

Internet applications work at the Application Layer and don’t need to worry about the details in the underlying layers. For example, an application connects to another application on the network via TCP using a construct called a *socket*, which abstracts away the gritty details of routing packets and re-assembling packets into messages.

## What is client and a server? :computer::left_right_arrow::desktop_computer:

While *clients* and *servers* are both applications that communicate over the Internet, *clients* are “closer to the user” in that they are more user-facing applications like web browsers, email clients, or smart phone apps. *Servers* are applications running on a remote computer which the client communicates over the Internet when it needs to.

A more formal definition is that the application that initiates a *TCP connection is the client, while the application that receives the TCP connection is the server.*

<center>

![ClientServer](https://upload.wikimedia.org/wikipedia/commons/c/c9/Client-server-model.svg)

</center>

## Summary :notebook_with_decorative_cover:

- Physically, the Internet is a collection of computers moving bits to each other over wires, cables, and radio signals.

- Like many complex engineering projects, the Internet is broken up into various layers, each concerned with solving only a smaller problem. These layers connect to each other in well-defined interfaces.

- There are many protocols that define how the Internet and its applications should work at the different layers: HTTP, IMAP, SSH, TCP, UDP, IP, etc. In this sense, the Internet is as much a collection of rules for how computers and programs should behave as it is a physical network of computers.

::: right
Courtesy of [Steven Li](https://medium.com/@User3141592)
:::

<br>

**Hope you understood it! Next up we have [Website vs Webapp](./website_vs_webapp.md)**