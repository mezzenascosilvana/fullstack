/** a) for the backend we will use MVC pattern 
 *  b) the folder serve is my backend
 * c) this controller has only one responsability: handle all the method for the user
 */

const userServices = require("../services/userServices");

// I expected to get somethig,so, I will use GET somthing to /api/users
function getAllUsers(req, res) {
  let user = userServices.getAllUsers();
  res.setHeader("Content-Type", "application/json"); // estoy mandnado datos a la UI
  //res.end("All users data");
  res.end(JSON.stringify(user));
}

// I expected to create something, so, I will use POST something to  =>/api/user
function createUser(req, res) {
  let body = "";
  // I am lisen an event
  req.on("data", (chunk) => {
    body += chunk.toString();
    // I will keep increment the body with the chunk
    //  because, I dont know how much data I will sent to the for
  });
  req.on("end", () => {  // here the request end
    let user = JSON.parse(body); // all the user are here
    console.log("User:", user);
    userServices.createUser(user);
    res.end("User created successfully")
  });
}
// in order to use this function externally I need to export

module.exports = { createUser, getAllUsers };