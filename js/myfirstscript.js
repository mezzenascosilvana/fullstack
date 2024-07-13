
// this function load the content for a particular page in one alert
/** 
function loadContent(page){
    alert("loadcontent: " + page);
}
*/
// this function load the content for a particular page now in a textarea, passing the id to the 

/**function loadContent(page){
    document.getElementById("main-content").innerText ="Loading....." + page;
}*/

// this function load a text into a textarea
/** 
function loadContent(page){
    document.getElementById("main-content").innerText ="Hi, I am learning";
}*/

// this function load a text into a textarea using tags, butI must use innerHTML
function loadContent(page){

     if (page =="longText") {
    document.getElementById("main-content").innerHTML = "<strong> I can see a long text msg </strong>";
     }else if  (page =="list"){
        document.getElementById("main-content").innerHTML = "<em> I can see my list msg </em>";
     }else {
        document.getElementById("main-content").innerHTML = "<i> I can see my form msg </i>";
     }
}