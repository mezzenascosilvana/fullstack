
// validate my script is loading
console.log("validationClass9.js loaded");

// when the view is ready to use by the client 
document.addEventListener("DOMContentLoaded", () => {
   // connect the form to my controller 
   const form = document.getElementById("postForm");
   form.addEventListener("submit", (event) => {
      event.preventDefault(); // helps to not refresh the page and prevent the page submit the content to another page
      const regex = "/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/";
      var emailfield = document.getElementById("mail1").value;
      var namefield = document.getElementById("name1").value;

      validateEmptyEmail(emailfield);
      itIsValidEmail(emailfield, regex);
      validateEmptyName(namefield);
      alert("Frorm submitted!! Thanks")


      function validateEmptyName(namefield) {
         var result;  
            if (namefield == "") {
               result = false;
               // this way is more user friendly, and better to create an alert. So, I sould add on the form.html a property called  "name"
               document.getElementById("name-error").innerText = "Name is required.";
            } else {
               result = true;
               document.getElementById("name-error").innerText = "";
            }
            console.log(result); 
            return result   
         }    
      

      function validateEmptyEmail(emailfield) {
         var result;
         if (emailfield == "") {
            result = false;
            document.getElementById("mail-error").innerText = "Email is required.";
         } else {
            result = true;
            document.getElementById("mail-error").innerText = "";
         }
         console.log("pasa por aca 2.a" + result);
         return result;
      }

      function itIsValidEmail(emailfield, regex) {
         var result = false;
         console.log("pasa por aca 3")
         if (emailfield.match(regex)) {
            document.getElementById("mail-error").innerText = "Email is invalid."
         } else {
            result = true;
            document.getElementById("mail-error").innerText = ""
         }
         console.log("pasa por aca 3.a" + result, emailfield);
         return result
      }
   })
});
