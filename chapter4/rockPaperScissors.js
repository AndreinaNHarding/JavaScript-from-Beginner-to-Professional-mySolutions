/* Solution to the practice exercises from book JavaScript Beginner to Professional
Andreina Nunez

Rock paper Scissors game
*/

//Create an array that contains the variables Rock, paper, scissors
const game = ["Rock", "Paper", "Scissors"];

//Variable that generates a random number for computer
const randomNumbercomputer = Math.floor(Math.random()*3);

//Variable to set user's choise
let choise =  prompt('Write your choise (Rock, Paper, Scissors): ');

//Variable to set computer's choise
const computerChoise = game[randomNumbercomputer];

let message = "Something went wrong, try again!"
let win;

//Verifiying if game is a tie
if(computerChoise === choise){
    message = 'It is a tie!! You have both chosen', computersChoise;
}

//game logic
switch (choise){
    case 'Rock':
        if(computerChoise === 'Paper'){
            win = false;
        } else if (computerChoise === 'Scissors') {
            win = true;
        }
        break;
    case 'Paper':
        if(computerChoise === 'Rock'){
            win = true;
        } else if (computerChoise === 'Scissors') {
            win = false;
        }
        break;  
    
        case 'Scissors':
            if(computerChoise === 'Rock'){
                win = false;
            } else if (computerChoise === 'Paper') {
                win = true;
            }
            break;  
}

//Set message according to results
if(win){
    message = 'You have Won the game';
} else {
    message = 'Sorry, you Lost';
}

//Output result's message
console.log( "The computer's choise was " + computerChoise);
console.log(message);
