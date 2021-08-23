// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify({heelo: 'world'}));
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


const express = require("express");

const app = express();
app.get("/", (req, res)=>{
    res.send("hi");
} );

app.listen(3333, ()=>{
    console.log("servidor  na porta 3333")
})