POST method fixed
6 days ago | 07/01/2024
Hi Guys, I forgot to add the response.end();
in the very end of the createServer Scope also, for some reason ,
 the POST method was blocked by the browser 
 I'm using so I had to force allow using the code below 
 response.writeHead(200, {   
     "Content-Type": "application/json",   
      "Access-Control-Allow-Origin": "*",   
      "Access-Control-Allow-Headers": "*",   
       "Access-Control-Allow-Methods": "*",  });


      anyway I'm sending the code for your consideration in near future we are going to
       learn a much easier way to do the same, be hold thanks