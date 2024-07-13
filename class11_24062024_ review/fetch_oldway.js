// old way to create a function 
async function handleSuccess(response){
    console.log(await response.json());   
}
// connet to server
const promise  = fetch( "https://jsonplaceholder.typicode.com/todos/3")
// if the server response with success 
promise.then(handleSuccess);
// new way to create a function