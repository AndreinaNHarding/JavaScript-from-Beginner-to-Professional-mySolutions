/* Solution to the practice exercises from book JavaScript Beginner to Professional
Andreina Nunez
*/

//Create a prompt to ask the user age, convert the response to a number
const age = prompt('Please, write your age: ');

//message variable to hold console message for user
let message;

//Logic statement to verify age of user
if (age >= 21){
    message = 'Entrance is allowed, you also can buy alcohol';
} else if(age >= 19){
    message = 'Entrance is allowed, you can not buy alcohol';
} else{
    message = 'Sorry, you are not allowed to enter';
}

//Output message to console
console.log(message);
