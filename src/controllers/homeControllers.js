/** this help to render the page */

const { json } = require("body-parser");
const { application } = require("express");
const { message } = require("statuses");

function  renderHome(req, res){
   // res.end("welcome to the home page!");oprion 1
   res.end(JSON.stringify({message:"welcome Paola, dont give up"})); //option 2
    // in contecnt-Type, puedo mandar cualquier cosa que desee . yo puedo envier "application/pdf" 0r "application/jpeg", etc ( googlear!!)
   //res.SetHeader("Content-Type", "application/json"); 
}
module.exports ={renderHome};
