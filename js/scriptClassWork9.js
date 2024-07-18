console.log("scriptClassWork9.js loaded");

/** Learning String interpolation, basically we concatenate using `` with backtick (`) characters instead of +*/

function calculateNoOfMinutes(days) {
    const numberOfHours = days * 24;
    const numberOfMinutes = numberOfHours * 60;
    return numberOfMinutes;
}
const fiveDaysInMinutes = calculateNoOfMinutes(5);
console.log(`There are ${fiveDaysInMinutes} minutes in 5 days`)

/***Class Work ******************************************************************************/
// Create a function called "multiply" that takes in 3 numbers and returns the product of all 3

function multiply ( a, b,c) {
    var result = null;
    result = a*b*c;
    return ( result);
}
 console.log(multiply ( 3,3,3));

 // continue
 