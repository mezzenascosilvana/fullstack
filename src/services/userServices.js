
/**  service doesnt have aceess to request and reponse objects.
 * this module (layer) only deal with data and database */

// We are simulate a database  in memory with an array
let users =[];

function getAllUsers(){
    return users;

}
function createUser(user){
    users.push(user);
    return user;
}

module.exports = {getAllUsers,createUser};