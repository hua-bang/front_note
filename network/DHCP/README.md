### DHCP(动态主机配置协议)

DHCP（动态主机配置协议）Dynamic Host Configuration Protocol.

指的是有服务器控制一段IP地址范围，客户机登录服务器就可以自动获取服务器分配的IP地址和子网掩码。

DHCP（Dynamic Host Configuration Protocol，[动态主机配置协议](https://baike.baidu.com/item/动态主机配置协议/10778663)）通常被应用在大型的局域网络环境中，主要作用是集中的管理、分配IP地址，使网络环境中的主机动态的获得IP地址、Gateway地址、DNS服务器地址等信息，并能够提升地址的使用率。

DHCP采用**客户端/服务器**模型，主机地址的动态分配任务由网络主机驱动。当[DHCP服务器](https://baike.baidu.com/item/DHCP服务器/9956953)接收到来自网络主机申请地址的信息时，才会向网络主机发送相关的地址配置等信息，以实现网络主机地址信息的动态配置。

#### 具有以下功能

- 保证任何IP地址在同一时刻只能由一台DHCP客户机所使用
- DHCP应当可以给用户分配永久固定的IP地址
- DHCP应当可以同用其他方法获得IP地址的主机共存（如手工配置IP地址的主机）。
- DHCP服务器应当向现有的BOOTP客户端提供服务。

#### DHCP三种机制分配IP地址

- 自动分配方式（Automatic Allocation），DHCP服务器为主机指定一个永久性的IP地址，一旦DHCP客户端第一次成功从DHCP服务器端租用到IP地址后，就可以永久性的使用该地址。
- 动态分配方式，DHCP服务器给主机指定一个具有时间限制的IP地址，时间到期或主机明确表示放弃该地址时，该地址可以被其他主机使用。
- 手工分配方式，客户端的IP地址是由网络管理员指定的，DHCP服务器只是将指定的IP地址告诉客户端主机。

DHCP报文格式

![img](https://bkimg.cdn.bcebos.com/pic/7dd98d1001e93901cc8e376e7bec54e737d196d6?x-bce-process=image/watermark,image_d2F0ZXIvYmFpa2U4MA==,g_7,xp_5,yp_5/format,f_auto)