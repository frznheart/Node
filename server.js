// const auth = require("./auth");
// auth.login();

const http = require("http");
const { URL } = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //   Changing content by changing url
  //   res.write("Hello World!!");
  //   res.end();
  //   res.writeHead(200, {
  //     "Content-type": "application-json",
  //   });
  //   if (req.url == "/home") {
  //     res.write(JSON.stringify({ msg: "Welcome to home page" }));
  //     res.end();
  //   } else {
  //     res.write("404 ERORR!!! page not found");
  //     res.end();
  //   }
  //   res.end();
  // Importing HTML files ..... NOT APPROPRAITE FOR MANY HTML FILES
  //   res.writeHead(200, {
  //     "Content-Type": "text/html",
  //   });
  //   const html = fs.readFileSync("./index.html");
  //   console.log(req.url);
  //   res.end(html);
});

server.listen(8000, () => {
  console.log("listening");
});
