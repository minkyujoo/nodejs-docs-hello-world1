const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello111223443 IU!");
});

const port = process.env.PORT || 3000;
//const port = process.env.PORT || 1337;    // for azure devops
server.listen(port);

console.log("Server11223443 running at http://localhost:%d", port);
