var textArea = document.querySelector("#DIV2"); //.test-wrapper
var testArea = document.querySelector("#TX-AREA"); //#test-area
var originText = document.querySelector("#DIV1 p").innerHTML; //origin-text p
var resetBtn = document.querySelector("#BTN"); //#reset
var setTimer = document.querySelector(".TIMER"); //.timer

var timer = [0,0,0,0];
var interval; 
var timerRun = false;

function leadingZero(time){
      if (time <= 9) {
          time = "0" + time;
          
      }
      return time;
}


function runTimer() {
    var currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]); // + ":" + timer[3] + ":" + timer[4];
    setTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}


function spellCheck() {
    var textEnterE = testArea.Value;
    var originalTextMach = originText.substring(0, textEnterE.length);

    if (textEnterE == originText){
        clearInterval(interval);
        textArea.style.borderColor = "#429890";
    }else{
        if (textEnterE == originalTextMach) {
            textArea.style.borderColor = "#65CCf3";
            
        }else{
            textArea.style.borderColor = "red";
        }
    }
    
}

function start() {
    var textEnterLength = testArea.value.length;
    if (textEnterLength === 0 && !timerRun) {
        timerRun = true;
       interval = setInterval(runTimer, 10);
        
    }
    
}


function reset() {
  clearInterval(interval);
  interval = null;
  timer = [0,0,0,0];
  timerRun = false;

  testArea.value = "";
  setTimer.innerHTML = "00:00:00";
  textArea.style.borderColor = "grey";
    
}

testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetBtn.addEventListener("click", reset, false);