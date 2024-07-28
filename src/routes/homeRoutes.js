/** remember: the routes is responsable to redirecto the request to the correct controller */

const homeController = require("../controllers/homeControllers");

function handleHomeRoutes(request, response){
    if (request.method == "GET"&& request.url == "/"){  // this is the root for the application hhtp>localhos:port/. La ulitma barra es lo que estamos referenciando
        homeController.renderHome(request,response);
    }
}
module.exports ={handleHomeRoutes};