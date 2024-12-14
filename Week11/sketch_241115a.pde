import processing.serial.*;
float radius = 0.0;
float btn,flex;

Serial myConnection;
String incomingValue = " ";


void setup(){
  size(600,600);
  printArray(Serial.list());
  
  myConnection = new Serial(this, Serial.list()[4], 9600);
  myConnection.bufferUntil('\n');
}

void draw(){
  if (btn>0){
    background(0,0,255);
  }
  else{
    background(0);
  }


  circle(width/2,height/2,radius*2);
}

void serialEvent(Serial conn){
  incomingValue = conn.readString();
  
  String[] values = split(incomingValue.trim(),',');
if(values.length == 2){
  //good transmisson
  btn = float(values[0]);
  flex = float(values[1]);

  radius= map(flex,2500,3500,0,width/2);
}
  println(incomingValue);

  
}
