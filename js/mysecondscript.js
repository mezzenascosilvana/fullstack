
// this portion of the code can run straight forward on the console. check image class7
var valueOne = 789;
var valueTwo = 3;
var valueThree = valueOne + valueTwo;
console.log('result :'+ valueThree );
console.log(typeof valueThree)

function loadContent(page){   
   var  filePath = `pages/${page}.html`;                               //"pages/practice1.html";
   var ajax = new XMLHttpRequest(); // XMLHttpRequest is a class that is saving on the var ajax.
   ajax.open("GET",filePath,true) // true: is dont need to wait, asincrono way
    // callback function
   ajax.onload = function() {
   if ( ajax.status == 200){
     const container = document.getElementById("main-content").innerHTML = ajax.responseText; // it is a const because it will never change
     if(container){
      container.innerHTML =ajax.responseText;
     }
   }
};
// we can add an error 
ajax.onerror =function(){
   console.log("Error:" + ajax.statusText);
};
ajax.send(); // sent the request
}