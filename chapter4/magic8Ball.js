/* Solution to the practice exercises from book JavaScript Beginner to Professional
Andreina Nunez
*/

//Set a variable that gets a random number between 0 - 5
const randomNumber = Math.floor( Math.random() * 6);
console.log(randomNumber);

//Create a prompt that can get a string value input from the user 
const userQuestion = prompt('Ask me anything (Yes/no question)');

//Create variable for message
let message = 'Somenthing is off';

//Create 6 responses using switch stement
switch(randomNumber){
    case 0:
    message = "Don't count on it";
    break;
    case 1:
    message = "Odds are not good";
    break;
    case 2:
    message = "Yes, definitely";
    break;
    case 3:
    message = "Concentrate and ask me again!";
    break;
    case 4:
    message = "Count on it";
    break;
    case 5:
    message = "Maybe";
    break;
}

//Output user's question + message
console.log("You asked " +  userQuestion + ". Response: " + message);
