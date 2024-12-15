import processing.serial.*;

import processing.sound.*;

//In-Class

//from https://pages.mtu.edu/~suits/notefreqs.html
//                C4a      C#4      D4      D#4    E4      F4      F#4      G4      G#4    A4      A#4     B4      C5
float[] notes = {261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.0, 466.16, 493.88, 523.25};

//Sine wave oscillator
SinOsc sineWave;
//Square wave oscillator
SqrOsc squareWave;


// Envelope parameters
Env envelope;

float attackTime = 0.001;
float sustainTime = 0.004;
float sustainLevel = 0.7;
float releaseTime = 10;

//Low Pass Fillter
LowPass lowPassFilter; 
float lpFreq;

//Reverb
Reverb reverb;
float revRoom = 0.5;
float revDamp = 0.5;
float revWet = 0.5;

//Delay
Delay delay;
float delayTime = 0.3;
float delayFeedback = 0.5;

// Serial connection
Serial myConnection;


void setup(){
  size(600,400);
  sineWave = new SinOsc(this);
  squareWave = new SqrOsc(this);
  envelope = new Env(this);
  
  lowPassFilter = new LowPass(this);
  lowPassFilter.process(squareWave);
  
  reverb = new Reverb(this); 
  reverb.process(squareWave);
  
  delay = new Delay(this);
  delay.process(squareWave, 2);
  
  // setup serial
  // print(Serial.list());
  myConnection = new Serial(this, Serial.list()[5], 9600);
  myConnection.bufferUntil('\n');
}


void draw(){
  background(0);
  
  // lpFreq = map(mouseX, 0, width, 500, 8000); 
  lowPassFilter.freq(lpFreq);
  
  float revWet = map(mouseY, 0, height, 1, 0);
  reverb.set(revRoom, revDamp, revWet);
  
  delayFeedback = map(mouseX,0,width,0,1);
  delay.set(delayTime, delayFeedback);
}

//plays the same note on the sine and square wave oscillators
void playNote(float noteFreq) {
  sineWave.play(noteFreq, 0.75);
  envelope.play(sineWave, attackTime, sustainTime, sustainLevel, releaseTime);
  squareWave.play(noteFreq, 0.4);
  envelope.play(squareWave, attackTime, sustainTime, sustainLevel, releaseTime);
}

void keyReleased(){
  switch(key){
    case 'a': //C
      playNote(notes[0]);
      break;
    case 'w': //C#
      playNote(notes[1]);
      break;
    case 's': //D
      playNote(notes[2]);
      break;
    case 'e': //D#
      playNote(notes[3]);
      break;
    case 'd': //E
      playNote(notes[4]);
      break;
    case 'f': //F
      playNote(notes[5]);
      break;
    case 't': //F#
      playNote(notes[6]);
      break;
    case 'g': //G
      playNote(notes[7]);
      break;
    case 'y': //G#
      playNote(notes[8]);
      break;
    case 'h': //A
      playNote(notes[9]);
      break;
    case 'u': //A#
      playNote(notes[10]);
      break;
    case 'j': //B
      playNote(notes[11]);
      break;
    case 'k': //C
      playNote(notes[12]);
      break;
  }
}

void serialEvent(Serial conn){
  String incomingValues = conn.readString();
  String[] values = split(trim(incomingValues), ',');
  println(values);
  
  if(values.length == 2){
    float noteFreq = map(float(values[1]), 0, 3600, 261, 523);
    if(float(values[0])>0){
      playNote(noteFreq);
    }

  }
}
