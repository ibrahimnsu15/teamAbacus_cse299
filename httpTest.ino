#include <WiFi.h>
#include <HTTPClient.h>

#define IR_Read 4
#define LED 2

const char* ssid = "ibrahim";
const char* password =  "ibrahim11";


void setup() {
 
  Serial.begin(115200);
  delay(4000);
  WiFi.begin(ssid, password);
 
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi..");
  }
 
  Serial.println("Connected to the WiFi network");
  
  pinMode(IR_Read,INPUT);
  pinMode(LED,OUTPUT);
}
 
void loop() {
  digitalWrite(LED,LOW);
  int irSignal = digitalRead(IR_Read);
  Serial.print("IR sigal : ");
  Serial.println(irSignal);
  if(irSignal == LOW){
    digitalWrite(LED,HIGH);
    httpRequest();
    
  }
 
  delay(1000);
 
}


void httpRequest(){
     if ((WiFi.status() == WL_CONNECTED)) { //Check the current connection status
    
        HTTPClient http;
    
        http.begin("http://abacusteam.herokuapp.com/req"); //Specify the URL
        int httpCode = http.GET();                                        //Make the request
    
        if (httpCode > 0) { //Check for the returning code
    
          String payload = http.getString();
          Serial.println(httpCode);
          Serial.println(payload);
        }
    
        else {
          Serial.println("Error on HTTP request");
        }
    
        http.end(); //Free the resources
    }
    delay(1000);
}
