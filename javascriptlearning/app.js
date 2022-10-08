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


/* 13 - Nested Loop */
for(let i=0; i< 10; i++)
{
  console.log('OUTER LOOP:', i+1);
  for(let j=10; j>=0; j-=2)
  {
    console.log('     INNER LOOP', j);
  }
}

const gameBoard =
[
  [4, 32, 8, 4],
  [64, 8, 32, 2],
  [8, 32, 16, 4],
  [2, 8, 4, 2]
];

let row = ''
let totaleScore = 0;
for(let i = 0; i < gameBoard.length; ++i)
{
  for(let j= 0; j< gameBoard[i].length; j++)
  {
    row += gameBoard[i][j].toString() + ' ';
    totaleScore += gameBoard[i][j];
  }
  if(i < gameBoard.length - 1) row+='\n';
}
console.log(row);
console.log(totaleScore);


/* 14 - While loop */
let gameOver = false;
let total = 0;
const NUMBER_OF_TRIES = 1000;
const target = Math.floor(Math.random() * 10);
for(let i = 0; i < NUMBER_OF_TRIES; ++i )
{
  let guesses = 0;
  while(!gameOver)
  {
    ++guesses;
    if(Math.floor(Math.random()* 10) === target) gameOver = true;
  }
  total += guesses;
  gameOver = false;
}
console.log(`Guess matches target in an average of ${total/NUMBER_OF_TRIES} moves`);

/* 15 - For...Of loop */
const subreddit = ['soccer', 'popheads', 'cringe', 'books'];
for(let sub of subreddit) // --> It is used to loop through iterable
{
  console.log(sub);
}
for(let char of 'chimichurri')
{
  console.log(char.toUpperCase());
}
const magicSquare = 
[
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
]
for(row of magicSquare) // --> The For...Of in this case allows only to sum rows
{
  let sum = 0;
  for(element of row)
  {
    sum += element;
  }
  console.log(sum);
}

const words1 = ['mail', 'milk', 'bath', 'black'];
const words2 = ['box', 'shake', 'tub', 'berry'];
for(let i = 0; i < words1.length; ++i) // --> In this case it is not suitable to use a For
{
  console.log(`${words1[i]}${words2[i]}`);
}

const movieReviews =
{
  Arrival :9.5,
  Alien :9,
  Amelie :8,
  'In Bruges' :9,
  Amadeus :10,
  'Kill Bill' :8,
  'Little Miss Sunshine' :8.5,
  Coraline :7.5
}

for(let movie of Object.keys(movieReviews))
{
  console.log(movie, movieReviews[movie]);
}
let avgRating = 0;
for(let rating of Object.values(movieReviews))
{
  avgRating += rating
}
console.log(avgRating/(Object.values(movieReviews)).length);

/* 16 - For...In loop */
const jeopardyWinnings = 
{
  regularPlay : 2522700,
  watsonChallenge: 300000,
  tournamentOfChampios: 500000,
  battleOfTheDecades: 100000
};

let totalEarnings = 0;
for(let prop in jeopardyWinnings)
{
  totalEarnings +=  jeopardyWinnings[prop];
}
console.log(totalEarnings);

for(let k in [88, 99, 77, 66])
{
  console.log(k);
}

/* 17 - Functions */
grumpus = () => { // --> this is the ES6, before the syntax was function funcName(){}
  console.log('ugh...you again...');
  console.log('FOR THE LAST TIME...');
  console.log('LEAVE ME ALONE!!!');
}
grumpus();

rollDie = () => // --> Generate a random number between 1 and 6
{
  return Math.floor(Math.random() * 6 + 1);
}

console.log(rollDie());

greet = person => 
{
  console.log(`Hi ${person}`);
}

greet('Jim');

throwAndAvgDice = numberOfRolls => 
{
  let avg = 0;
  for(let i = 0; i < numberOfRolls; i++)
  {
    let roll = rollDie();
    avg += roll;
  }
  return avg/numberOfRolls;
}

console.log(throwAndAvgDice(10000));

divide = (x,y) => 
{
  if(typeof x !== 'number' || typeof y !== 'number') return;
  if(y === 0) return;
  return x/y;
}

console.log(divide('s', 1));
console.log(divide(2,0));
console.log(`${divide(1,4)} is different from ${divide(4,1)}`);



/* 18 - Challenge Function isValidPassowrd */
console.log('### Challenge 1 Begins ###');

isValidPassword = (password, username) => 
{
  // If username or password is not a string return false
  if(typeof password !== 'string' || typeof username !== 'string') return false;
  // If password is not at least 8 characters long return false
  if(password.length < 8) return false;
  // Password cannot contains spaces
  if(password.indexOf(' ') > -1) return false;
  // Password cannot contains username case insensitive check
  if((password.toLowerCase()).indexOf(username.toLowerCase()) > -1) return false;  
  // All requirements are met
  return true;
}
// Test Cases
if(isValidPassword(1,'username')) console.log('Challenge 1 Failed'); //Expected False
if(isValidPassword('passwrd','username')) console.log('Challenge 1 Failed'); //Expected False
if(isValidPassword('pass word','username')) console.log('Challenge 1 Failed'); //Expected False
if(isValidPassword('dogLuvr123','dogLuvr')) console.log('Challenge 1 Failed'); //Expected False
if(isValidPassword('DOGLUVR123','dogLuvr')) console.log('Challenge 1 Failed'); //Expected False
if(!isValidPassword('89Fjj1nms','dogLuvr')) console.log('Challenge 1 Failed'); //Expected True 

console.log('Challenge 1 Succed!!!');

console.log('### Challenge 1 Ends ###');

/* 19 - Challenge Function avg */
console.log('### Challenge 2 Begins ###');

avg = (numbers) => 
{
  //If it is not an array return fals
  if(!Array.isArray(numbers)) return false;
  //If any element in the array is not a number return false
  let result = 0;
  for(let num of numbers)
  {
    if(typeof num !== 'number') return false;
    result += num;
  }
  return result/numbers.length;

}
// Test Cases
if(avg({})) console.log('Challenge 2 Failed'); //Expected False
if(avg(['passwrd','username'])) console.log('Challenge 2 Failed'); //Expected False
if(avg([0, 50]) !== 25) console.log('Challenge 2 Failed'); //Expected True
if(!avg([0, 50, 30, 40, 50, 10, 30, 129.2, 49.1])) console.log('Challenge 2 Failed'); //Expected True


console.log('Challenge 2 Succed!!!');

console.log('### Challenge 2 Ends ###');

/* 20 - Challenge Function isPangram */
console.log('### Challenge 3 Begins ###');

isPangram = (sentence) => 
{
  // If the sentence is not a string return false
  if(typeof sentence !== 'string') return false;
  //Making the test case insensitive
  let sentenceToLowerCase = sentence.toLowerCase();
  let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  //Another solution which is smarter :) 
  alphabetSecondSolution = 'abcdefghijklmnopqrstuvwxyz';
  for(let letter of alphabetSecondSolution)
  {
    //If a letter is not contained in the sentence is not a pangram
    //It is possible to use "includes" instead of "indexOf"
    if(sentenceToLowerCase.indexOf(letter) === -1) return false;
  }
  //The sentence meet the requirements and it is a pangram
  return true;
}
// Test Cases
if(isPangram('I am not a pangram')) console.log('Challenge 3 Failed'); //Expected False
if(!isPangram('Two driven jocks help fax my big quiz')) console.log('Challenge 3 Failed'); //Expected True
if(!isPangram('The quick brown fox jumps over the lazy dog')) console.log('Challenge 3 Failed'); //Expected True


console.log('Challenge 3 Succed!!!');

console.log('### Challenge 3 Ends ###');


/* 21 - Challenge Function getCard */
console.log('### Challenge 4 Begins ###');

pickRandom = arr => 
{
  return arr[Math.floor(Math.random() * arr.length)];
}

getCard = () => 
{
  // Define possible values and suites
  const cardValue = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const cardSuite = ['clubs', 'spades', 'hearts', 'diamonds'];
  let result = {};
  // Popoulate the resulting object with a card value and a suite
  // It is possible to use a function to pick the random number
  result["value"] = pickRandom(cardValue);
  result["suite"] = pickRandom(cardSuite);
  return result;
}
// Test Cases
for(let i = 0; i < 10; ++i)
{
  let play = getCard();
  console.log(`Player ${i} played: ${play.value} of ${play.suite}`);
}

console.log('Challenge 4 Succed!!!');

console.log('### Challenge 4 Ends ###');


/* 22 - Scope */
lol = () => //--> Variabile are in function scope
{
  let person = 'Tom';
  const age = 45;
  var color3 = 'teal';
}
lol();
//console.log(color3); // --> This gives an error because color3 is not defined in this scope

let bird = 'mandarin duck';

function birdWatch()
{
  let bird = 'golden pheasant'; // --> It is possible to have the same variable name for variables in different scope
}

console.log(bird); // --> The value will be 'mandarin duck' because the one is function scope is not defined in this scope

if(true)
{
  const animal = 'eel'; // --> This variable is defined in the block scope
  let secondAnimal = 'elephant'; // --> this variable is defined at block scope
  var thirdAnimal = 'duck' // --> this variable can be accessed from outside because ignores block scope
  console.log(animal);
}
//console.log(animal);// -->  This gives an error because variable is not defined in this scope
//console.log(secondAnimal);// --> This gives an error because variable is not defined in this scope
console.log(thirdAnimal); // --> This does not give an error because var ignore block scope

outer = () =>
{
  let hero = 'Black Panther';
  inner = () =>
  {
    let cryForHelp = `${hero} please save me!`; // --> cryForHelp is looked up in the "outer" function (Lexical Scope)
    console.log(cryForHelp);
    extraInner = () =>
    {
      console.log(cryForHelp + ' From extra inner'); // --> cryForHelp is looked up in the "inner" function (Lexical Scope)
    }
    extraInner();
  }

  inner();
}

outer();

/* 23 - Function Expression */
const square = (num) => { // --> it is possible to declare functions as variables, since functions are objects in javascript
  return num * num;
}
console.log(square(2));

/* 24 - Higher Order Functions */
add1 = (x,y) => {return x+y};
const subtract1 = (x, y) => {return x-y};
multiply1 = (x,y) => {return x*y};
const divide1 = (x,y) => {return x/y};

const operations = [add1, subtract1, multiply1, divide1]; // --> It is possible to define array of functions

console.log(operations[1](100,4));

for(let func of operations) // --> And loop through it
{
  console.log(func(2,3));
}

const thing = { doSomething: multiply1 }; // --> It is possible to define object where values are functions

/* 25 - Functions as Arguments */
callThreeTimes = (func) => // --> This funcion takes a function as an argument
{
  func();
  func();
  func();
}
const laugh = () => { console.log('AHAHAHAHAHAHHAHAHAH') };
const laughWithE = () => { console.log('EHEHEHEHEHEHEHEHEHEHE')};
callThreeTimes(laugh);

repeatNTimes = (action, repetitions) => // --> This funcion takes a function as an argument
{
  for(let i = 0; i< repetitions; ++i)
  {
    action();
  }
}

repeatNTimes(laugh, 13);

callOne = (func1, func2) => // --> This funcion takes a function as an argument
{
  if(Math.random() < 0.5) func1();
  else func2();
}

callOne(laugh, laughWithE);

/* 26 - Functions as return values */
multiplyBy = (num) => // --> This function can be thought as a function factory
{
  return (x) => {
    return x * num
  }
}

const triple = multiplyBy(3); // --> MultiplyBy returns a function which is stored in triple
console.log(triple(2));
console.log(triple(6));
console.log(triple(9));

const double = multiplyBy(2); // --> Multiply returns a function which is store in double
console.log(double(2));
console.log(double(4));
console.log(double(6));

makeBetweenFunc = (x, y) => 
{
  return (num) => 
  {
    return x <= num && num <= y
  }
}

const isChild = makeBetweenFunc(0,18);
console.log(isChild(3));
console.log(isChild(23));

/* 27 - Callback */
sampleFunc = () => { console.log('A sample callback')};
setTimeout(sampleFunc, 5000); // --> This JS function takes two arguments: a function that need to be called after an amount of time
              // --> And the amount of time
              // --> A function passed as an argument and called inside the outer class is called a "Callback"

const btn = document.querySelector('button');
btn.addEventListener('click', sampleFunc);

/* 28 - Hoisting */
console.log(animal3); // --> It will not be thrown an error beacuse the variable declaration is "Hoisted" before the log
                      // --> This beahviour does not apply to let and const.
var animal3 = 'tapir';

/* 29 - Array CallbackMethod */
const numbers29 = [20, 21, 22, 23, 24, 25, 26, 27];

numbers29.forEach(function(num) // --> Calls the callback function for each element in the array (anonymous function)
{
  console.log(num);
})

function printTriple(n)
{
  console.log(n * 3);
}

numbers29.forEach(printTriple);// --> Calls the callback function for each element in the array (declared function)

numbers29.forEach(function(num, idx) // --> The second parameter is always the index
{
  console.log(num, idx);
})


const words = ['asap', 'byob', 'rsvp', 'diy'];


const newNumbers = numbers29.map(function(num) // --> Creates a new array calling for each element a callback function
{
  return num * 2; // --> The return statement is needed to tell to map what to put in the new array
})

console.log(newNumbers);

const num29Detail = numbers29.map(function(n)
{
  return { value: n, isEven: n % 2 === 0}
})

console.log(num29Detail);

const newWords = words.map(function(word)
{
  return word.toUpperCase().split('').join('.') + '.';
})

console.log(newWords);


const squareFunc = function(x) { return x * x; } // --> Old function declaration
const squareFuncNew = (x) => { return x * x; } // --> Arrow Function definition
const squareFuncNewWoPar = x => { return x * x; } // --> Arrrow function without parenthesis
const squareFuncNewImplicitReturn = x => ( x * x ); // --> Arrow function with implicit return
const squareFuncNewOneLiner = x => x * x; // --> Arrow function one-liner implicit return


console.log(squareFuncNewOneLiner(3));


const num29Arrow = numbers29.map( n => { return n * 2; });
console.log(num29Arrow);

const parityList = numbers29.map( n => n % 2 === 0 ? 'even' : 'odd');
console.log(parityList);

let movies = [ 'The fantastic Mr. Fox', 'Mr. and Mrs. Smith', 'Mrs. Doubtfire', 'Mr. Deeds'];
const movie = movies.find( movie => movie.includes('Mrs.')); // --> Returns the first occurrence that satisfies the condition in the function
console.log(movie);
const movie2 = movies.find(m => (m.indexOf('Mrs.') === 0));
console.log(movie2);

const oddFilterNums = numbers29.filter(n => n % 2 === 1); // --> Creates a new array with the elements that satisfies the boolean condition in the callback
const evenFilterNums = numbers29.filter(n => n % 2 === 0);
console.log(oddFilterNums);
console.log(evenFilterNums);

const words29 = ['dog', 'dig', 'log', 'bag', 'wag'];

const all3Letters = words29.every( word => word.length === 3); // --> Returns true if all the elemnts pass the callback test
const startWithD = words29.some( word => word.startsWith('d'));// --> Return true if any of the elements passes the callback test

console.log(all3Letters);
console.log(startWithD);

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const sort1 = prices.sort((a, b) => a - b); // --> Sort the original array based on the compare func.
                                            // --> If the compare func returns < 0 sort a before b
                                            // --> If the compare func returns = 0 leave a and b unchanged
                                            // --> If the compare func returns > 0 sort b before a
console.log(sort1);

const nums299 = [3, 4, 5, 6, 7];
const result299 = nums299.reduce((total, currentValue) => { return total * currentValue; }); // --> Returns a single value obatained by calling the callback function for each element
console.log(result299);


const grades = [87, 64, 96, 92, 88, 99, 73, 70, 64];
const maxGrades = grades.reduce((max, currentValue) =>{ return max > currentValue ? max : currentValue});
const maxGradesWithMax = grades.reduce((max, currentValue) => Math.max(max, currentValue));
const minGrade = grades.reduce((min, currentValue) => Math.min(min, currentValue));
console.log(maxGrades);
console.log(maxGradesWithMax);
console.log(minGrade);

const noInitialValue = [4,5,6,7,8].reduce((accumulator, currentValue) => accumulator + currentValue);
const withInitialValue = [4,5,6,7,8].reduce((accumulator, currentValue) => accumulator + currentValue, 100); // --> It is possible to start with a starting value (which is by default 0)
console.log(noInitialValue);
console.log(withInitialValue);

const votes = ['y','y','n','y','n','y','n','y','y','n','n','n'];

const tallyObj = votes.reduce((tally, val) => {
  if(tally[val]) ++tally[val];
  else tally[val] = 1;
  return tally;
}, {}); //--> In this case the initial value is an object
console.log(tallyObj);

const tallyObj2 = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
})
console.log(tallyObj2);


/* 30 - default parameters */
const defaultParameterMultiply = (x, y=1) => x * y; // --> It is possible to pass a default parameter for the function so it can be easily called with only one parameter
console.log(defaultParameterMultiply(2));

const blah = (x, y=[1,2,3]) => console.log(x,y);
blah(1);

/* 31 - Spread */
const nums31 = [1, 2, 3, 4, 5];
console.log(Math.max(nums31)); // --> This returns Nan
console.log(Math.max(...nums31)); //--> Using the Spread syntax spreads the array in 5 single elements
const str31 = 'GOAT';
console.log(...str31); //--> Since a string is an iterable it can be spread


const cephalopods = ['dumbo octopus','humboldt squid', 'flanboyant cuttlefish'];
const gastropods = ['giant african snail', 'banana slung', 'variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = [...cephalopods, ...gastropods]; // --> Spread allow to create a new array with elements of both original arrays
console.log(mollusca);
const cephCopy = [...cephalopods]; // --> With spread it is possible to create new arrays with unique references
console.log(cephCopy === cephalopods); // --> This return false

const feline = {
  legs: 4,
  family: 'Felidae'
}
const canine = {
  family: 'Canine',
  furry: true
}
const dog = { // --> It is possible to use Spread to extends object
  ...canine,
  isPet: true,
  adorable: true
}
const houseCat ={
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable'
}
const catDog = {...canine, ...feline};
console.log(catDog); //--> When creating objects starting from two objects it is important to lookup for equal keys that overrides.

/* 32 - arguments array-like and Rest syntax */
function sumAll()
{
  let total = 0;
  for(let i=0; i < arguments.length; ++i) //--> All function(s) have the "arguments" keyword which is an array-like object, has property length but does not have array methods
  {
    total += arguments[i];
  }
  return total;
}
console.log(sumAll(1,2,3,4,5,6));

function sumAllRest(...nums) // --> Rest syntax is the same syntax as spread, but it has an opposite function. It collects every remaining arguments in an array
{
  return nums.reduce((total, currentValue) => total + currentValue);
}
console.log(sumAllRest(1,2,3,4,5,6));

const fullName32 = (first, last, ...titles) => 
{
  console.log('first', first);
  console.log('last', last);
  console.log('titles', titles);
}
fullName32('tom', 'jones', 'III', 'Order of the Phoenix');

/* 33 - Destructuring */
const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp', 'Ghirmay Ghebreslassie', 'Alphonce Simbu', 'Jared Ward'];

const [gold, silver, bronze] = raceResults; //--> This syntaxt assign to gold, silver, bronze variable the first, second and third element respectively
console.log(gold);
console.log(silver);
console.log(bronze);

const [first,,,fourth] = raceResults; // --> With commas it is possible to skip elements of the array
console.log(first);
console.log(fourth);
const [winner, ...others] = raceResults;
console.log(winner);
console.log(others);
const [winnerNew, , ...othersNew] = raceResults;
console.log(winnerNew);
console.log(othersNew);

const runner = {
  firstName: 'Eliud',
  lastName: 'Kipchoge',
  country: 'Kenya',
  title: 'Elder of the Order of the Golden Heart of Kenya'
}

const {firstName, lastName, time, ...other} = runner;
console.log(firstName); // --> The value to the variable is assigned based on the key name
console.log(lastName);
console.log(time); // --> If the key is not found it's value will be undefined
console.log(other); // --> It is possible to collect remaining key/value pairs with spread syntaxt

const {country: nation, title: honorific} = runner; // --> With this syntaxt it is possible to choose custom names for the variables to destructure
console.log(nation);
console.log(honorific);

const result33 = 
[
  {
  first: 'Eliud',
  last: 'Kipchoge',
  country: 'Kenya'
  },
  {
    first: 'Feyisa',
    last: 'lilesa',
    country: 'Ethiopia'
  }
];

const [{first: goldWinner}, {country}] = result33 // --> It is possible combine destructuring of arrays and objects but it is not recommended
console.log(goldWinner, country);

const fullNameDestructuring = ({firstName, lastName}) => `${firstName} ${lastName}`; // --> It is possible to use destructuring in function's parameter
console.log(fullNameDestructuring(runner));

/* 34 - Features and Objects methods */
const getStats = (arr) => 
{
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, r) => sum + r);
  const avg = sum/arr.length;

  return {max, min, sum, avg}; // --> This is the shorthand version to create object literals introduces in ES 2015
                              // --> It creates key/value pairs with the key the variable name and value its corresponding value
}

console.log(getStats([3.2,4.5,6.2,7.6,2.3,7.8,9.1,9.4]));

const role34 = 'host';
const person34 = 'Jools Holland';

const team34 = {[role34]: person34}; // --> With computed syntax it is possible to declare objects with dynamic keys directly in object definition

const math34 = //--> It is possible to add functions as properties and we call them Object's methods
{
  multiply: (x, y) => x*y,
  divide: (x, y) => x/y,
  square: (x) => x*x,
  add(x,y){ return x + y;} //--> This is a new syntax that allows to easily write object's methods
}

console.log(math34.multiply(2,3));
console.log(math34.divide(2,3));
console.log(math34.square(3));

/* 35 - This Keyword */
function sayHi()
{
  console.log('Hi');
  console.log(this); // --> "this" refers to the global scope "Window"
}

sayHi();

const personThis = 
{
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    const { first, last, nickName} = this; // --> In this case "this" refers to the object itself and it is aware of other properties and methods
    return `${first} ${last} AKA ${nickName}`;
  },
  printbio(){
    console.log(this);
    const fullName = this.fullName(); // --> Since "this" is aware of other methods can be used to call other methods on the object
    console.log(`${fullName} is a person`);
  },
  laugh: () => 
  {
    console.log(this); // --> In arrow functions this does not have it's own reference to the object, instead it will point to the global object "Window"
    console.log(`${this.nickName} says AHAHAHAHHAAH`);
  }
}

personThis.printbio();

const printbio = personThis.printbio;
console.log(printbio); // --> In printbio variable "this" refers to the global scope because it belongs to it

personThis.laugh();

const annoyer = 
{
  phrases: ['literally', 'cray cray', 'I can\'t even', 'Totes!', 'YOLO', 'Can\'t stop, Won\'t stop'],
  pickPhrase()
  {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)];
  },
  start() 
  {
    //const that = this; // --> This is a possible workaround, that will refers to the annoyer object.
    this.timerId = setInterval(() => // --> Calling "this" inside setInterval it will refers to "Window" because setInterval is a window method and has the global
    {                 // --> Using arrow function will not give a new "this" reference but will use the one of the closer scope which is the object scope
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop()
  {
    clearInterval(this.timerId);
    console.log('Annoyer stopped');
  }
}

annoyer.start();

setTimeout(() => { 
  annoyer.stop();
}, 12000);

/* 36 - More on object's method */
const deckObj = () => // --> When an object needs to have many feature it is possible to create an object with multiple methods to easily handle all those feature
{  
return {
    deck: [],
    drawnCards: [],
    suits : ['hearth', 'diamonds', 'spades', 'clubs'],
    values : '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    makeDeck()
    {
      const { suits, values, deck} = this;
      for(let value of values.split(','))
      {
        for(let suit of suits) deck.push({value, suit});
      }
    },
    drawCard()
    {
      const card = this.deck.pop();
      this.drawnCards.push(card);
      return card;
    },
    drawCards(numCards)
    {
      const cards = [];
      for(let i = 0; i< numCards; ++i)
      {
        cards.push(this.drawCard());
      }
      return cards; 
    },
    shuffle() // --> This method shuffle the deck
    {
      const {deck} = this;
      for(let i = deck.length - 1; i > 0; --i) // --> loops through the array backwards
      {
        let j = Math.floor(Math.random() * (i + 1)); // --> Pick a random index less than current loop index
        [deck[i], deck[j]] = [deck[j], deck[i]]; // --> swap elements in the deck
      }
    }
  }
}