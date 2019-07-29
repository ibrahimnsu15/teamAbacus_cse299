#### Project title: Illegal border crossing detection alarm and notification  base on cloud infrastructure 

1.Introduction

 In rural areas house and the border of a country are literally face many problem regarding security issues. Although there is fancy or boundary for the safety purpose but it’s not enough for security. In the era, we have a  many technology for security but there is no specific technology for home and country border security. And now we are working with this kind of problem. In our project we working with NodeMCU esp32. NodeMCU is an open source IoT platform. It includes firmware which runs on the ESP32 Wi-Fi SoC from Espressif Systems, and hardware which is based on the ESP-12 module.NodeMCU esp32 wifi module is working with infrared sensor(IR). The detection range of the IR sensor is around 2 cm to 30 cm. The sensor module is interface with Arduino having IO voltage level of 3.3V to 5V. First of all, If a object detect by the IR sensor and then the signal pass to the NodeMCU esp8266 wifi  module. NodeMCU will check whether the wifi is connect or not. After that, NodeMCU esp8266 wifi module will check the signal from the IR sensor. And then the NodeMCU esp8266 wifi module analysis the signal through Arduino IDE and send a http request to the Heroku cloud server. When user need to see the touch history, then the web send a request to cloud server. Cloud server synchronise the data from database and response to the web server. Finally the user can see details of the object which cross the IR sensor.

2.Background/Related Works

As we focus on the IR sensor based object detection and NodeMCU esp8266 wifi module based signal passing feedback, the related work with respect to such fields are reviewed in this section.  
In the literature, different technologies such as Arduino, NodeMCU, IR sensor,indicator LED  have been used for detect a object and send a http request to the cloud server. In the  approach[1], the author make a home automation system using sensor. The author working various type of appliances such as fans, lights, air-conditioners and water heaters by the readings received by various sensors installed at different parts of the house. The IR sensor and LDR have been connected to NodeMCU ESP8266. These are used to control the blinds and lights by triggering the relays. The main advantage of using ESP8266 is that once it is connected to the internet it can be controlled remotely from anywhere in the world. This journal is related to our project to help us work with IR sensor and NodeMCU. 

In the approach,[2] the author work with the smart parking system using NodeMCU,IR sensor, indicator LED. This system help in organizing the parking slot and helps the driver to reach their parking spots easily as they known which space is vacant. The parking space can be detected using an Infrared sensor that connects to the ESP12-E (NodeMCU)module that was programmed through Arduino IDE. Users can access parking space information using a smartphone via an application. Especially for users who have been registered before, they have a code for login the app as the requirement for security system and user parking convenience. The system can work with the purpose of the research appropriately. 

In the system[2] IR sensor is used for detecting parking space. The Ir sensor is connected to the  microcontroller NodeMCU. NodeMCU acts like an intermediate between the sensors and cloud.The NodeMCU then transmits this data to the Firebase through Arduino IDE. The mobile application acts as an interface for the users to interact with the system on Cloud Firebase.
This journal is help us to work with IR sensor and NodeMCU, firebase, cloud server.  

In the approach,[3] the author work with human intrusion detection system using IR sensor, wifi module, Arduino, IOT, Atmega328p, Temperature sensor. The Arduino Uno is used as the core of the system; it receives inputs whenever the motion is detected through PIR sensors. This system is realized using PIR sensors to detect human presence, MQ135 gas and smoke detector, LM35 temperature sensor. The system is connected to the internet using wifi module i.e. ESP-12e. To connect to the internet and send parameters to the IOT platform we are using HTTP requests. To create alerts www.ubidots.com provides trigger event service.

This paper gives details about IOT based Human Intrusion Detection System using PIR sensor which combines different sensors. This paper help us know about different work categories of IR sensor. 


2.0 Methodology

To make this project we use IR sensor, nodeMCU, heroku cloud server, nodejs app engine, android studio. NodeMCU always connected to server by wifi service and have a ability to send http request to server . This notification store in server database and server notice center update. When server update , then this update notification send to user . User have a android app , web and android app immediately see this notification. 











2.1 Diagram of system 

         
<img src="/fullSystemdiagram.png"/> 
				Figure : System process diagram

2.2 Explanation of the functioning of the complete system
There are multiple component and processes done by system. We give description for each component and explain each processes. 
IR sensor: An Infrared light emitting diode (IR LED) is a special purpose LED emitting infrared rays ranging 700 nm to 1 mm wavelength. Different IR LEDs may produce infrared light of differing wavelengths, just like different LEDs produce light of different colors. IR LEDs are usually made of gallium arsenide or aluminum gallium arsenide. In complement with IR receivers, these are commonly used as sensors.
If the object is reflective, (White or some other light color), then most of the radiation will get reflected by it, and will get incident on the photodiode. If the object is non-reflective, (Black or some other dark color), then most of the radiation will get absorbed by it, and will not become incident on the photodiode. It is similar to there being no surface (object) at all, for the sensor, as in both the cases, it does not receive any radiation. 


If reflect it give output LOW . In our system this IR sensor output go throw nodeMcu and nodeMcu process this output signal. Now we give description about nodeMcu.

NodeMCU ESP32: The NodeMCU ESP-32S is one of the development board created by NodeMcu to evaluate the ESP-WROOM-32 module. It is based on the ESP32 microcontroller that boasts Wifi, Bluetooth, Ethernet and Low Power support all in a single chip. 

				Figure - NodeMCU ESP32 connect with IR sensor

In our system nodeMCU ESP32 work as read ir sensor output and if output is low it send a http request. NodeMCU work slowly and it take time for make a http request.  

Server : For making server we need to first make app engine. We are make app engine by nodejs. Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices. After make nodejs app we host those app in hereku cloud service. Herku is one of the best cloud service and it’s easy to use and best for use platform as a service cloud developer. 

Database :   For storing our system data we are use mysql database system. Mysql is easy and faster database system. The freehostingdatabase.net is provided free mysql cloud database service with limit space. We choice this database system and connect with our nodejs app engine. When nodeMCU send any http request it store sensor number, time and date. 




Serial 
Sensor id
Time 
Date 
1
1
12:30:23 am
06/12/2018
2
1
11:44:54 pm
07/12/2018

Figure - MySql Database table
For authentication system in app  we use firebase authentication system. Because firebase already provided authentication API. So, don’t need to make api for authentication. 


Username
Password
test123@gmail.com
AJGJshd122ijsdpas
ibrahim@gmail.com
asdaGJshd122ijsdp
 	
				Figure - Firebase data table

Web : To provide web browsing service we make various UI design for user. To enter system firstly they need to login. If he not signup, need to go register page and make signup. After login they show home page. In first page they see notification board . If sensor detect any object, user show the detection in notice board. In menu bar has some option  like home, notification log, about, logout. If user click notification log, they see history of detection.




















2.2 Example of system

   


3. Deliverable device 

Hardware device
Website 
Android app
4. Budget

           Product
            Model
      NodeMCU
                ESP32
      Wire
                M to F
      Breadboard
                840 Point Breadboard 
      IR Sensor
                Single Array 
      Buzzer
                5V Continuous Tone Beeper
      LED
                5mm


5. Challenges and Difficulties

Hardware Challenges 
Esp8266 Module connection fail
Nodemcu HTTP request error
IR sensor Range coverage problem

Software Challenges
Server sometime cannot load
Firebase connection fail
Higher time complexity for database query
Fail to load html changes

6. Future Work
	
In the future, we will add a camera on this project and we will improve our detection area as well as we can use the ultrasonic sensor instead of the IR sensor. It makes long-range detection to detect the object. For better and high-speed notification system we can use raspberry pi 3 B+ for make server request. Web and Android app user interface design can make more user-friendly and add more feature better user experience. We can use better and advance database system for add more data and space.






7. References

[1] Himanshu Singh, Vishal Pallagani, Vedant Khandelwal and Venkanna U,”IoT based Smart Home Automation System using Sensor Node”,4th Int’l Conf. on Recent Advances in Information Technology | RAIT-2018 |
[2] L Anjari, A H S Budi, “The Development of Smart Parking System based on NodeMCU 1.0 using the Internet of Things”, International Symposium on Materials and Electrical Engineering (ISMEE) 2017 IOP Publishing, IOP Conf. Series: Materials Science and Engineering 384 (2018) 012033 doi:10.1088/1757-899X/384/1/012033.
[3] Samrat J. Kamble,Piyush H. Marathe,Saurabh S. Rahatekar,”Human Intrusion Detection System Based On IoT”, International Journal of Electronics, Electrical and Computational System IJEECS ISSN 2348-117X Volume 7, Issue 3 March 2018.

