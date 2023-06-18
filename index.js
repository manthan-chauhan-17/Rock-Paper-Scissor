const compChoice = Math.floor((Math.random()*3)+1);
let userChoice;

// Computer Image Display
let img = document.createElement("img");
let compResult = document.getElementById("compResult");

// Next Round
const nextRound = document.getElementById("nextRound");
nextRound.addEventListener("click" , resetGame);

// Display Result
let displayResult = document.getElementById("displayResult");

// Choices 
let rockChoice = document.getElementById("rock");
let paperChoice = document.getElementById("paper");
let scissorChoice = document.getElementById("scissor");

// User Selects any one choice
rockChoice.addEventListener("click" ,checkForRock);
paperChoice.addEventListener("click" , checkForPaper);
scissorChoice.addEventListener("click" , checkForScissor);

// For Rock
function checkForRock(){
    userChoice = 1;
    displayResult.style.display = "block";
    if (userChoice == compChoice) {
        displayResult.innerHTML = "Draw!";
        img.src = "/pics/rock.png";
        compResult.appendChild(img);
    }
    else if (compChoice == 2) {
        displayResult.innerHTML = "You Lost!";
        img.src = "/pics/paper.png";
        compResult.appendChild(img);
    }
    else if (compChoice == 3) {
        displayResult.innerHTML = "You Won!";
        img.src = "/pics/scissors.png";
        compResult.appendChild(img);
    }
}
// For Paper
function checkForPaper(){
    userChoice = 2;
    displayResult.style.display = "block";
    if (userChoice == compChoice) {
        displayResult.innerHTML = "Draw!";
        img.src = "/pics/paper.png";
        compResult.appendChild(img);
    }
    else if (compChoice == 1) {
        displayResult.innerHTML = "You Won!";
        img.src = "/pics/rock.png";
        compResult.appendChild(img);
    }
    else if (compChoice == 3) {
        displayResult.innerHTML = "You Lost!";
        img.src = "/pics/scissors.png";
        compResult.appendChild(img);
    }
}
// For Scissor
function checkForScissor(){
    userChoice = 3;
    displayResult.style.display = "block";
    if (userChoice == compChoice) {
        displayResult.innerHTML = "Draw!";
        img.src = "/pics/scissors.png";
        compResult.appendChild(img);
    }
    else if (compChoice == 1) {
        displayResult.innerHTML = "You Lost!";
        img.src = "/pics/rock.png";
        compResult.appendChild(img);
    }
    else if (compChoice == 2) {
        displayResult.innerHTML = "You Won!";
        img.src = "/pics/paper.png";
        compResult.appendChild(img);
    }
}
// Reseting the game
function resetGame(){
    img.src = "";
    displayResult.style.display = "none";
}