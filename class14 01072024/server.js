const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((request, response) => {
  console.log("Request URL: ", request.url);
  const { query, pathname } = url.parse(request.url, true);
  console.log("method: ", request.method);
  console.log("Pathname: ", pathname);
  response.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  });

  if (request.method === "GET") {
    console.log("GET request received");
    handleGetRequest(request, response);
  }
  if (request.method === "POST" && pathname === "/submit") {
    console.log("POST request received");
    handlePostRequest(request, response);
  }
  response.end();
});

function handlePostRequest(request, response) {
  var body = "";
  request.on("data", (chunk) => {
    body += `${chunk}`;
  });
  request.on("end", () => {
    const parsedBody = JSON.parse(body);
    console.log(parsedBody);
    const json = { message: parsedBody.name };
    const result = JSON.stringify(json);
    response.write(result);
  });
}

function handleGetRequest(request, response) {
  const json = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };
  const jsonForWeb = JSON.stringify(json);
  response.write(jsonForWeb);
  response.end();
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
