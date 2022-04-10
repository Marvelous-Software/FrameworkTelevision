//John Maher
//Lab #1
//4/2/22
//Frameworktv
//Mark Lassof

window.onload = function()
{
    document.getElementById("addingButton").addEventListener("click", addNumbers);
    document.getElementById("subtractingButton").addEventListener("click", subtractNumbers);
    document.getElementById("multiplyingButton").addEventListener("click", multiplyNumbers);
    document.getElementById("dividingButton").addEventListener("click", divideNumbers);
}

function addNumbers(e)
{
    var answer = 0; 
    answer = parseInt(document.getElementById('inputOne').value) + parseInt(document.getElementById('inputTwo').value);
    alert(answer);
}

function subtractNumbers(e)
{
    var answer = ""; 
    answer = document.getElementById('inputOne').value - document.getElementById('inputTwo').value;
    alert(answer);
}

function multiplyNumbers(e)
{
    var answer = ""; 
    answer = document.getElementById('inputOne').value * document.getElementById('inputTwo').value;
    alert(answer);
}

function divideNumbers(e)
{
    var answer = "";
    var remainder = 0; 
    answer = Math.floor(document.getElementById('inputOne').value / document.getElementById('inputTwo').value);
    remainder = document.getElementById('inputOne').value % document.getElementById('inputTwo').value;
    if (remainder != 0)
    {
        answer += " remainder " + remainder;
    }
    alert(answer);
}


