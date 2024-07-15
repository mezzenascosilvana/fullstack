console.log("scriptClassWork9.js loaded");

/** Learning String interpolation, basically we concatenate using `` with backtick (`) characters instead of +*/

function calculateNoOfMinutes(days) {
    const numberOfHours = days * 24;
    const numberOfMinutes = numberOfHours * 60;
    return numberOfMinutes;
}
const fiveDaysInMinutes = calculateNoOfMinutes(5);
console.log(`There are ${fiveDaysInMinutes} minutes in 5 days`)