/** */
// create userController
const userController = require("../controllers/userControllers");

const handleUserRoutes = ( request, response) =>{             

    if (request.method === "GET" && request.url === "/api/users") {
        userController.getAllUsers(request, response);
    } else if (request.method === "POST" && request.url === "/api/users") {
        userController.createUser(request, response);
    }else{
        response.statusCode = 404; // not found
        response.setHeader("Content-Type", "text/plain");
        response.end("404 Not found");
    }
    // I can continue adding Delete and Create operation
};
module.exports = {handleUserRoutes};