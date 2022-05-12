/*My solution to
Practice exercise 3.5 
from JavaScript Beginners to Professional
Andreina Nunez*/

//Create an object named people that contains an empty array called friends
const people = 
{
friends: []
};

//Create 3 variables each holding an object with one of your friend's name, last name and id
let friend1 = {
name: 'Kevin',
lastName: 'Harding',
id: 1
};

const friend2 = {
    name: 'Paul',
    lastName: 'Harding',
    id: 2
    };

const friend3 = {
    name: 'Andre',
    lastName: 'Harding',
    id: 3
    };

    //Add the 3 friends to the friend array
    people.friends.splice(0, 0, friend1, friend2, friend3);

    //output to the console
    console.log(people);
