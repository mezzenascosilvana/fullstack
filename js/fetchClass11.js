
// this fuction will call when I call index page
function fetchLinks() {
  // conect to server
  const promise = fetch("https://jsonplaceholder.typicode.com/posts");
  // if the server response with success
  promise.then(async (response) => {
    const array = await response.json(); // I am parsing 
   
    //this is to upload 10 posts
    let html = ""; 
    let counter = 0;  
    for(let i = 0; i < array.length; i++) {
      // I am doing a link for each title. If I mouseover or click on the top of the link I am seeing the differents Id 
      html +=`<a href="pages/dynamic.html?postId=${array[i].id}"> ${array[i].title} "</a> <br/>`; 
      counter++;
      if (counter === 10) {
        break;
      }
    }
    /*
     // this upload all the posts
      let html = "";
      array.forEach((post) => {
       //console.log(post.title); // Only, I am printing the titles 
       html+=post.title + "<br/>";
     });
     */
    
    document.getElementById("main-content").innerHTML = html;
  });

  // if the server response with error
  promise.catch((error) => {
    console.error(error);
  });
  promise.finally(() => {
    console.log("done");
  })
}

fetchLinks();