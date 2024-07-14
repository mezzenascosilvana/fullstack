
/**Class Work Class 8 */

//Exercise 1
console.log("scriptClassWork8.js loaded");
var firstName = "Paola";
var lastName ="Lucero";
var combine = firstName + " " +lastName;
console.log( combine);

//Exercise 2
var school = "Dublin Coding School";
const myArray = school.split(" ");
var myUpCaseArray = [];
for(let i = 0; i< myArray.length; i++){
  if ( myArray[i] == "Coding"){
    myUpCaseArray.push(myArray[i].toUpperCase());
  } else {
   myUpCaseArray.push(myArray[i]);
  }
}
console.log(myUpCaseArray.join(" "));

// Exercise 3 
var shoolReverse = myArray.reverse();
console.log(shoolReverse.join(" "));




/***********************************************************************************************
 * 
 * NOTE FROM CLASS 
 * 
 ***************************************************************************************************** */

// comment: Loading my scripts
//console.log("scriptClassWork8.js loaded");

//comment:  showing by console the type of the full_name variable
//var full_name =" Paola Lucero";
//console.log(typeof full_name);
// comment: learning conditional if 
//var age = 38;
//if( age>= 18) {
    //console.log( "you ae an adult");
//}

/** Learning Object in Javascript 
 *  this is another way to create a class. I dont use the word class I create the structure directly.
*/
 //var person ={
  //  name :full_name,
   // age,
  //};
 // console.log ("Person details:", person );
 
 //comment:  create a function
 //function eat(){
  //  console.log("eating...")
 //}
 //console.log( eat());

 /**Also, I can create inside an object a function:
  * atributes are separated by "coma" 
  * "learning" function is a new atribute inside de object.
  */
 //var subject = "dev fullstack";
 //var teacher ={
  //  name: " Roberto Santos",
  //  age: "23",
    //subjectDescription: subject,
   // learning: function(){
   //     console.log(`I am learning:  ${this.subjectDescription} by ${this.name}`);
   // },
 //};
 // Comment: after create an object I should call the function that is inside the object.
 //console.log(teacher.learning());
 // comment: here I am printing by console my entere teacher object
 //console.log(teacher); 

 /**
  * the code above is the same  if I create a class
  * class Teacher{
  * name;
  * age;
  * subjectDescription;
  * learning(){
  *  console.log("....");
  * }
  * }
  * var teacher1 = new Teacher();
  * teacher1.firstName = "Paola";
  */

//Comment: if I need to add a value I should use prompt

//var hobbies= prompt("what is your hobbies");
//console.log ( hobbies);

// Comment: toFixed(number) returns a string, with the number written with a specified number of decimals
//var longNumber = 67867569.9894357487;
//console.log( longNumber.toFixed(3)) // only show 3 decimals

// Comment: toPrecision(number) returns a string, with the number written with a specified number of characters regardless of the decimal
//console.log( longNumber.toPrecision(6)) // return => 6.78676e+7 

/**  LEARNIGN ARRAYS*/

//Comment: I can create array of the object
//var passanger1 = {firstName: "Paola", SurName: "Lucero", source : "Argentina", seat: "18A"};
//var passanger2 = {firstName: "Darren", SurName: "McGuckin", source : "Ireland", seat: "18B"};
//var passanger3 = {firstName: "Kadul", SurName: "Mezzenasco", source : "Brazil", seat: "18c"};
//var passanger4 = {firstName: "Ethan", SurName: "Lucero", source : "Spain", seat: "19F"};

//var toGo =[passanger1,passanger2,passanger3,passanger4]
//console.log ( toGo);
//Comment: index array: accessing a particular value inside an array that contains objects.
//console.log( "who is seating on second position:"+ toGo[2].firstName);

/**Ways to create a function in JavaScript 
 * 
 * A)
 * function myFunction(){
 * ......
 * }
 * B) Anonymous 1: inside an object I have a function
 * var person ={
 *  eat: function (){.....},
 * }
 * 
 * C) Anonymous 2 ( arrow function): inside an object I have a function
 * var person ={
 *  walk: () =>{.....},
 * }
 * 
 * 
 * 
*/
