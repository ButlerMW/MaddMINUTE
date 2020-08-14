let score = 0;

function timer() {
  var sec = 60;
  var timer = setInterval(function() {
    if(sec <= 5) {
      document.getElementById("timer-display").style.color = "red";
    }
    document.getElementById("timer-display").innerHTML= sec;
    sec--;
    if(sec < 0) {
      clearInterval(timer);
      document.getElementById("timer-display").style.color = "";
      document.getElementById("equation-container").style.display = "none";
      document.getElementById("result").style.display = "";
      document.getElementById("scoreboard").innerHTML = score;
    }
  }, 1000);
}

function math() {
  function answerCheck() {
    if(document.getElementById("answer").value == num1 + num2){
      score++;
      math();
    }
  }

  document.getElementById("answer").value = "";
  let num1 = Math.floor(Math.random() * 10);
  let num2 = Math.floor(Math.random() * 10);
  document.getElementById("number1").innerHTML = num1;
  document.getElementById("number2").innerHTML = num2;
                    
  const buttons = document.querySelectorAll('.btn');

  for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function(e) {
      if(buttons.innerHTML == "c"){
        document.getElementById("answer").value = "";
      }
      else {
        document.getElementById("answer").value += e.toElement.innerHTML;
        answerCheck();
      }
    }
  }

  document.onkeydown = function(e){
    if(e.keyCode == 8 || e.keyCode == 13){
      document.getElementById("answer").value = "";
    }
    else if(e.key < 10){
      document.getElementById("answer").value += e.key;
      answerCheck();
    }
  }
}

document.getElementById("start").onclick = function() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("equation-container").style.display = "";
  timer();
  math();
}

document.getElementById("restart").onclick = function() {
  document.getElementById("answer").value = 0;
  score = 0;
  document.getElementById("result").style.display = "none";
  document.getElementById("equation-container").style.display = "";
  timer();
  math();
}