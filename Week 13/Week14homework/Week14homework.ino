
#define BUTTON_PIN 13 
#define PHOTO_PIN A3

void setup() {
  // put your setup code here, to run once:
  pinMode(BUTTON_PIN, INPUT);
  Serial.begin(9600);
  while(!Serial);

}

void loop() {

  Serial.print(digitalRead(BUTTON_PIN));
  Serial.print(',');
  Serial.println(analogRead(PHOTO_PIN));
  delay(10);
}
