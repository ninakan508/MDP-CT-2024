#define BTN_PIN 13  //识别
#define FLEX_PIN A0


void setup() {
  // put your setup code here, to run once:
  //pinMode(LED_PIN, OUTPUT);  //代码输出
  pinMode(BTN_PIN, INPUT);
  pinMode(FLEX_PIN, INPUT);

  Serial.begin(9600);
}

void loop() {

  // put your main code here, to run repeatedly:
  // digitalWrite(LED_PIN,HIGH);
  // delay(1000);
  // digitalWrite(LED_PIN,LOW);
  // delay(1000);
  //float value = analogRead(POT_PIN);
 // Serial.println(value);

 Serial.print(digitalRead(BTN_PIN));
 Serial.print(',');
 Serial.println(analogRead(FLEX_PIN));

}
