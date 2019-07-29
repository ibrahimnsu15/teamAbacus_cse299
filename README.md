#### Project title: Illegal border crossing detection alarm and notification  base on cloud infrastructure 

1.Introduction

 In rural areas house and the border of a country are literally face many problem regarding security issues. Although there is fancy or boundary for the safety purpose but it’s not enough for security. In the era, we have a  many technology for security but there is no specific technology for home and country border security. And now we are working with this kind of problem. In our project we working with NodeMCU esp32. NodeMCU is an open source IoT platform. It includes firmware which runs on the ESP32 Wi-Fi SoC from Espressif Systems, and hardware which is based on the ESP-12 module.NodeMCU esp32 wifi module is working with infrared sensor(IR). The detection range of the IR sensor is around 2 cm to 30 cm. The sensor module is interface with Arduino having IO voltage level of 3.3V to 5V. First of all, If a object detect by the IR sensor and then the signal pass to the NodeMCU esp8266 wifi  module. NodeMCU will check whether the wifi is connect or not. After that, NodeMCU esp8266 wifi module will check the signal from the IR sensor. And then the NodeMCU esp8266 wifi module analysis the signal through Arduino IDE and send a http request to the Heroku cloud server. When user need to see the touch history, then the web send a request to cloud server. Cloud server synchronise the data from database and response to the web server. Finally the user can see details of the object which cross the IR sensor.



2.0 Methodology

To make this project we use IR sensor, nodeMCU, heroku cloud server, nodejs app engine, android studio. NodeMCU always connected to server by wifi service and have a ability to send http request to server . This notification store in server database and server notice center update. When server update , then this update notification send to user . User have a android app , web and android app immediately see this notification. 











2.1 Diagram of system 

         
<img src="/fullSystemdiagram.png"/> 
				Figure : System process diagram







2.2 Example of system
<img src="/webflow.png"/> 


3. Deliverable device 

Hardware device
Website 
Android app


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



