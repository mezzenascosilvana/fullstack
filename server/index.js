const http = require("http");
const url = require("url");
const userRoutes = require("./routes/userRoutes");

const hostname = "127.0.0.1";
const port = 3000;

// create the server this is responsable to handle reeuest and response
// that means :if someone try to access to my server to this endpoint http://localhost:3000/api
// the server should response for example http://localhost:3000/api/product/1 ==> so here we use UPDATe, DELETE, etc
/**
 * EndPoints:
 * http://127.0.0.1:3000/api
 * http://127.0.0.1:3000/api/users
 * http://127.0.0.1:3000/api/users => create
 * http://127.0.0.1:3000/api/products
 * http://127.0.0.1:3000/api/product/1 => update
 * http://127.0.0.1:3000/api/product/1 => delete
 * 
 */

const server = http.createServer((request, response) => {
  /** basic example to see if the server works 
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end("hello");
 *********************************************************************/
  /** Before SOLID 
  //I shluld do 2 verification the api and the method
  if(request.url== `/api/product/` && request.method ==="DELETE"){
    //delete product
  }
  //I shluld do 2 verification the api and the method
  if(request.url== `/api/product/` && request.method ==="UPDATE"){
    //update product
  }
  //I shluld do 2 verification the api and the method
  if(request.url== `/api/user/` && request.method ==="DELETE"){
    //delete user
  }
  if(request.url== `/api/user/` && request.method ==="DELETE"){
    //update user
  }
  // every time I need to add an new endpoint I should repeat this 
  //if with the endpoint and the method. That isnt really good for 
  // this reason we will learn is SOLID
  ***************************************************************
  /** using SOLID ***********/

  const parseURL = url.parse(request.url, true);
  console.log("Request URL:", request.url);
  console.log("Request Method:", request.method);
  const path = parseURL.pathname;
  if (path.startsWith("/api/users")) {
    // I can use because I have imported userRouters
    userRoutes.handleUserRoutes(request, response);
  } else {
    response.statusCode = 404; // not found
    response.setHeader("Content-Type", "text/plain");   
    response.end("404 Not found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

