//John Maher
//Lab #1
//4/2/22
//Frameworktv
//Mark Lassof

window.onload = function()
{

    alert("Let's play! Think of a rock, a paper, or scissors");

    document.getElementById('playButton').addEventListener('click', randomNumber);document.getElementById('playButton').addEventListener('click', randomNumber);
    document.getElementById('computerPlay').addEventListener('click', playAgain);document.getElementById('playButton').addEventListener('click', randomNumber);
    
}

function randomNumber(e)
{
    var computerAnswer = Math.random();


    if (computerAnswer <= .33) {
        alert("Rock");
    } else if (computerAnswer <= .33) {
        alert("Paper");
    } else {
        alert("Scissors");
    }
}

function playAgain(e)
{
    var computerChoice = Math.random();
    var playerChoice = document.getElementById("choice").value;//./.toUpperCase();
    var computer = "";
    var player = "";
    var result = "";
    

    alert("pc = " + choice);

    switch (playerChoice) {
        case ("ROCK"):
            player = "rock";
            alert("r1");
            switch (true) {
                case (computerChoice <= .33):
                    alert("r2");
                    computer = "rock";
                    result = "its a tie.";
                    break;
                case (computerChoice <= .66):
                    alert("r3");
                    computer = "paper";
                    result = "I win.";
                    break;
                default:
                    alert("r4");
                    computer = "scissors";
                    result = "you win!";
                    break;
            }
        case ("PAPER"):
            alert("p1");
            player = "paper";
            switch (true) {
                case (computerChoice <= .33):
                    computer = "rock";
                    result = "you win!";
                    break;
                case (computerChoice <= .66):
                    computer = "paper";
                    result = "its a tie.";
                    break;
                default:
                    computer = "scissors";
                    result = "I win.";
                    break;
            }
        case ("SCISSORS"):
            alert("s1");
            player = "scissors";
            switch (true) {
                case (computerChoice <= .33):
                    computer = "rock";
                    result = "I win.";
                    break;
                case (computerChoice <= .66):
                    computer = "paper";
                    result = "you win!";
                    break;
                default:
                    computer = "scissors";
                    result = "its a tie.";
                    break;
            }
                }
    alert("You chose " + player + " and the computer chose " + computer + " so " + result);
}




