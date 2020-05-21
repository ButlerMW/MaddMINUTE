let count = 0;

function timer() {
    var sec = 60;
    var timer = setInterval(function() {
        if(sec <= 5) {
            document.getElementById("timer-display").style.color = "red";
        }
        document.getElementById("timer-display").innerHTML= sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            document.getElementById("timer-display").style.color = "";
            document.getElementById("equation-container").style.display = "none";
            document.getElementById("result").style.display = "";
            document.getElementById("counter").innerHTML = count;
        }
    }, 1000);
}

function math() {
    function answerCheck() {
        if(document.getElementById("answer").value == num1 + num2){
            count++;
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
    
    // Is there a way to shorten this? look it up later
    document.onkeydown = function(e){
        if(e.keyCode == 49){
            document.getElementById("answer").value += 1;
            answerCheck();
        }
        if(e.keyCode == 50){
            document.getElementById("answer").value += 2;
            answerCheck();
        }
        if(e.keyCode == 51){
            document.getElementById("answer").value += 3;
            answerCheck();
        }
        if(e.keyCode == 52){
            document.getElementById("answer").value += 4;
            answerCheck();
        }
        if(e.keyCode == 53){
            document.getElementById("answer").value += 5;
            answerCheck();
        }
        if(e.keyCode == 54){
            document.getElementById("answer").value += 6;
            answerCheck();
        }
        if(e.keyCode == 55){
            document.getElementById("answer").value += 7;
            answerCheck();
        }
        if(e.keyCode == 56){
            document.getElementById("answer").value += 8;
            answerCheck();
        }
        if(e.keyCode == 57){
            document.getElementById("answer").value += 9;
            answerCheck();
        }
        if(e.keyCode == 48){
            document.getElementById("answer").value += 0;
            answerCheck();
        }
        if(e.keyCode == 8){
            document.getElementById("answer").value = "";
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
    count = 0;
    document.getElementById("result").style.display = "none";
    document.getElementById("equation-container").style.display = "";
    timer();
    math();
}