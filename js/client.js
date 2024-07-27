document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const message = document.getElementById("message");
      message.innerHTML = `<h2>${data.title}</h2> 
      <p>${data.body}</p>`;
    })
    .catch((error) => console.error("Error:", error));

  document.getElementById("submit").addEventListener("click", sendPostRequest);
});

function sendPostRequest(event) {
  event.preventDefault();
  const input = document.getElementById("input").value;
  // made the request from line 18 to 25.
  // And pass the type of the method to the server
  fetch("http://127.0.0.1:3000/submit", {
    method: "POST",  
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: input }),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("message").innerText = data.message;
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
