

var status = 0;

function setLed(){
  if (status === 0){
    setBlueLed();
    status = 1;
    setTimeout('resetLed(3);', 1000);
  }
  else if(status === 1){
    setGreenLed();
    status = 2;
    setTimeout('resetLed(2);', 1000);
  }
  else{
    setRedLed();
    status = 0;
    setTimeout('resetLed(1);', 1000);
  }
}

function setRedLed(){
  digitalWrite(LED1, 1);
}
  
function setGreenLed(){
  digitalWrite(LED2, 1);
}

function setBlueLed(){
  digitalWrite(LED3, 1);
}

function resetLed(int){
  if (int === 1){LED1.reset();}
  if (int === 2){LED2.reset();}
  if (int === 3){LED3.reset();}  
}


setWatch(setLed, BTN, { edge:"rising", debounce:50, repeat: true });