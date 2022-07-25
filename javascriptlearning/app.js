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