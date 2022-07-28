//alert("It's working");
console.log('That\'s a console log');
console.error('That\'s an error');
console.log(1, 'am', 'concatenating', true);

/* Conditional Statement */

/* 1 - Simple If */
if(1 === 1)
{
  console.log('It\' True');
}
let rating = 3;
if(rating === 3)
{
  console.log('You Are a Superstar');
}
if(rating < 3)
{
  console.log('You are not a superstar');
}
let num = 37
if(num % 2 === 0)
{
  console.log('Even Number')
}
if(num % 2 !== 0)
{
  console.log('Odd Number');
}

/* 2 - Else if */
let num2 = 39;
if(num2 === 0 )
{
  console.log('That\s 0')
}
else if(num2 % 2 === 0)
{
  console.log('Even Number')
}
else if(num2 % 2 !== 0)
{
  console.log('Odd Number');
}

/* 3 - Else */
let rating2 = 213;
if(rating2 === 3)
{
  console.log('Maximum rating');
}
else if(rating2 == 2)
{
  console.log('Good rating')
}
else if(rating2 == 1)
{
  console.log('Insufficent rating');
}
else
{
  console.error('Invalid rating');
}

/* 4 - Nested conditional statements */
let username = 'kitty cat';

if(username.length >= 6 && username.indexOf(' ') === -1)
{
    //if(username.indexOf(' ') === -1)
    //{
      console.log('Valid Username')
    //}
    // else
    // {
      //console.error('Username cannot contain spaces');
    //}
}
else
{
  console.error('Invalid username');
}

/* 5 -thrutiness or falsiness of variables */
let mistery = 5;
let zero = 0;
let nan = 0/0;
let undef;
let emptyString = '';
let nll = null;
if(nll)
{
  console.log('Thruty');
}
else
{
  console.log('Falsy');
}

/* 6 - Ternary Operator */
let num3 = 7;
let ternaryOperator = num3 === 7 ? 'lucky' : 'not lucky';

console.log(ternaryOperator);

/* 7 - Array methods */
let topSongs = ['First Time Ever I Saw Your Face', 'God Only Knows', 'A Day In The Life', 'Life On Mars'];
topSongs.push('Fortunate Songs'); // --> Add an element at the end of an Array

let lastElement = topSongs.pop(); // --> Remove last element and returns it

let firstElement = topSongs.shift(); // --> Remove first element and returns it
 
topSongs.unshift(firstElement); // --> Add an elemente at the start of an Array

let array1 = ['a', 'b', 'c'];
let array2 = ['d', 'e', 'f'];

let mergeArray = array1.concat(array2); // --> Merge two Arrays
let includeMethod = array1.includes('b'); // --> Returns true if the element is present inside the array
let includeAtIndex = array1.includes('b', 0); // --> Starts searching at index 0
let indexOf = array1.indexOf('c'); // --> Returns the index of the element, if not found returns -1
let indexOfFrom = array1.indexOf('c', 0) // --> Starts searching at index 0
let slicedArry = array1.slice(undefined, 1);
// splice allow to delete, replace or insert values in an array
let animals = ['shark', 'salmon', 'tortoise'];
animals.splice(1, 1, 'octopus'); // --> Replace
animals.splice(1, 2); // --> Delete
animals.splice(1, 0, 'frog', 'snake'); // --> Insert

let people = ['Mrs. Robinson', 'Angie', 'Jolene', 'Maggie May', 'Roxanne'];
people.sort() // --> Sort the array alphabetically


/* 8 - Const with Array */
const myEggs = ['brown','brown']; // What has to be constant is the reference to the array
myEggs.push('purple'); //The array can be modified in values
console.log(myEggs);

/* 9 - Nested Arrays */
const colors = [['red', 'crimson'],['orange', 'darkorange'],['yellow', 'golden rod'],['blue', 'dark blue']];
const animalPairs = [['doe', 'buck'],['ewe','ram'],['peahen', 'peacock']];

console.log(animalPairs[2][0]);
console.log(animalPairs[2][1]);
console.log(animalPairs[1][1]);

animalPairs[0][1] = 'stag'; // --> Update nested array element

console.log(animalPairs[0][1]);

const ticTackToeBoard = [['O', '   ', 'X'],['   ', 'X', 'O'],['X', 'O', '  ']];
let board = '';
for(let i=0; i < ticTackToeBoard.length; ++i)
{
  for(let j=0; j < ticTackToeBoard[i].length; ++j)
  {
    if(j > 0) board += '| ';
    board += ticTackToeBoard[i][j] + ' ';
  }
  if(i < ticTackToeBoard.length - 1) board += '\n__ __ __\n';
}
console.log(board); // --> :)

const threeLevelArray = [['doe', ['buck', 'stag']]];
console.log(threeLevelArray[0][1][0]);
console.log(threeLevelArray[0][1][1]);

/* 10 - Object */
const fitbitData = 
{
  totalSteps: 308727,
  totalMiles: 211.7,
  avgCalorieBurn: 5755,
  workoutsThisWeek: '5 of 7',
  avgGoodSleep: '2: 13s', // --> The trailing comma is optional
}

console.log(fitbitData);
console.log(fitbitData.avgCalorieBurn); // --> dot syntax value access

const numbers = 
{
  100: 'one hundred',
  16: 'sixteen',
  red: '#eb4d4b'
};
console.log(numbers[100]);
console.log(numbers['100']);
let color = 'red';
console.log(numbers[color]);


const userReviews = {};
userReviews['queenBee49'] = 4;
userReviews.mrSmith78 = 3.5;

console.log(userReviews);

/* 11 - Arrays and Objects */
const student = 
{
  firstName: 'David',
  lastName: 'Jones',
  strenghts: ['Music', 'Art'], // --> Array inside object
  exams: {midterm: 92, final: 88} // --> Object inside object
}

console.log('exams average:', (student['exams'].midterm + student.exams['final']) * 0.5);


const shoppingCart = // --> Array of objects
[
  {
    product: 'Jenga Classic',
    price: 6.88,
    quantity: 1
  },
  {
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3
  },
  {
    product: 'Fire Stick',
    price: 39.99,
    quantity: 2
  }
]

const ticTacToeStats = 
{
  player1: {username: 'blue', character: 'X'},
  player2: {username: 'muffins', character: 'O'},
  board: board
}

console.log(ticTacToeStats['player1'].username + ': ' + ticTacToeStats['player1'].character + ' - ' + ticTacToeStats['player2'].username + ': ' + ticTacToeStats['player2'].character);
console.log(ticTacToeStats.board);


let nums = [1,2,3];
let misteryObj = [1,2,3];
let otherNums = nums;

console.log(nums === misteryObj); // --> Evaluates to false due to difference references
console.log(nums === otherNums); // --> Evaluates to true because they have the same reference

const user = 
{ 
  username: 'username',
  email: 'email@email.com',
  notifications : [],
}
console.log(user.notifications === []); // --> evaluates to false
console.log(!user.notifications.length); // --> evaluates to true because 0 is evaluated as false

/* 12 - For Loop */
let printHello = () => {
  console.log('Hello World');
}

let forLoop = (startingPoint, endingPointExcluded, increment, callback) => 
{
  callback();
  startingPoint += increment;
  if(startingPoint < endingPointExcluded)
  {
    forLoop(startingPoint, endingPointExcluded, increment, callback);
  }
}

forLoop(0, 10, 1, printHello); // Tried to recreate a primitive version of forLoop with a recursive function, it actually worked :)


for(let i=0; i < 10; ++i) // --> Real for loop 
{
  console.log('Hello From for loop');
}
for(let i=0; i<20; ++i) // --> First twenty perfect square
{
  console.log(`${(i + 1)}x${(i + 1)} = ${(i+1)*(i+1)}`);
}
for(let i=200; i >= 0; i-=25) // --> Backward loop
{
  console.log(i);
}

const animalsArray = ['lions', 'tigers', 'bears'];
for(let i = 0; i < animalsArray.length; ++i) // --> Loop through an array
{
  console.log(animalsArray[i]);
}

const students = 
[
  {
    firstName: 'Zeus',
    grade: 86
  },
  {
    firstName: 'Artemis',
    grade: 91
  },
  {
    firstName: 'Apollo',
    grade: 90
  },
];

let sum = 0
for(let i = 0; i < students.length; ++i)
{
  let student = students[i];
  sum += student.grade;
  console.log(`${student.firstName} got a grade of: ${student.grade}`);
}
console.log(`Average of grade is: ${sum/students.length}`);
