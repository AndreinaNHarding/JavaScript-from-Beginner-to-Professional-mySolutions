//Solution to the chapter project exercise "Manipulating an Array" from JavaScript from the Book: JavaScript Beginner to Professional 

/*Take the theList array and manipulate it using various methods such as pop, push, shift and unshift and transform it

theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}];  manipulate it to be --> ['FIRST', 'Svekis', 'MIDDLE', 'Hello world', 'LAST]; */

const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}];

//Remove first and last element of the array
theList.shift();
theList.pop();

//Assign new first value
theList.unshift("FIRST");

//Assign values to third and fourth items
theList[2] = "MIDDLE";
theList[3] = "hello World";

//Delete  last value
theList.pop();

//Assign new value to last item
theList[4] = "LAST";
