/******************************************8 FIRST EXAMEPLE :
// I am connected a particular server
fetch ("https://jsonplaceholder.typicode.com/todos/10")
// I am creating a response and if it is valid I will convert the response in a Json format ( parset it)
// parsing operation is : response.json()
.then( (response) => response.json()) 
// I willl print the json in the console
.then((json)=> console.log(json));

************************************************************************************************************/

/****************** A BIT OF THEORY, I can create this structure **********************************************************************

 // OLD WAY TO CREATE A FUNCTION, using function word

 function handleSuccess(response){
 console.log(response);
 }
 
 // or I can use await to force the server to provide a response, but the function should be async

async function handleSuccess(response){
 console.log(await response.json());
 }

 function handleError(error){
 console.log(error);
 }
 
 // I create a promise

 const promise = fetch("https://jsonplaceholder.typicode.com/todos/3");
 promise.then(handleSuccess);
 promise.catch(handleError);
 
 //NEW WAY TO CREATE A FUNCTIOPN: using anonymous function. I mean,  I dont use the word function I just use =>
 
 promise.catch((error) => console.log(error));
              or if I use more than one line I use bracket
 promise.catch((error) =>{ 
  console.log(error);
 )};
 
 promise.finally(() =>{
  console.log ( "done");
 });
 ******************************************************************************************************************/

/******************************* Practical Example *************************************************************** 
function handleSuccess(response){
    console.log(response); // if the server response well, I will print the enter response
    console.log(response.json()) // I need the response in a json format 
                                 //I should parset. If I check the console it still pending
                                 // it I check on the console it is a promise
}

// connet to server
// if I put "await" I am forcing the fech ( the operation) it is fully completed
const promise = await fetch("https://jsonplaceholder.typicode.com/todos/3");
// if the server response success
promise.then(handleSuccess);
//if the server response with an error
promise.catch((error)=> {
    console.error(error);
});

promise.finally(() => {
console.log("done");
});
****************************************************************************************************************************/

/**************************************SIMULATE AN ERROR, Using callback function*******************************************************
 * What is callback function?
 * it is function that I will call when the promise is done or when the promise has an error. REMEMBER I CANNOT GARANTY WHEN THE PROMISE WILL 
 * DONE, that only the server know. if it is very busy probably take more time to provide a response.
 * 
 * // async function: it says: "hey JavaScript call this function with the promise it is done"
 * // JavaScript will verify the code status to verify if a promise it is done or not
 * 
 
// async for this reason I use setTimeout
  function fetchData(callback){
    setTimeout(()=>{
     callback ("done"); // the setTimeout is trying to simulate the call
     },2000);
   }

   function processData(data){
    console.log(`data recived`, data);
   }
 // fetchData will be execute after 2000 sec that I setup before
   fetchData(processData);

 **************************************************************************************************************************************/

/***************************************************************************** If I create a promise with a return 
 LONG WAY TO DO

// async for this reason I use setTimeout
function fetchData(callback){
    return new Promise ((resolve, reject) => {
    setTimeout(()=>{
     resolve ("done"); // the setTimeout is trying to simulate the call
     },2000);
   });
}

   function processData(data){
    console.log(`data recived`, data);
   }
 // this means: call the function fetchData and if everything goes well call processsData
   fetchData().then(processData);

   **************************/

/***************************************************************************** If I create a promise with a return 
SHORT WAY TO DO  **************************/

// async for this reason I use setTimeout
function fetchData(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error"); // the setTimeout is trying to simulate the call
        }, 2000);
    });
}
fetchData().then((data) => {
    console.log('data received', data);
})
.catch((error) => {
    console.error(`error`, error);
});




