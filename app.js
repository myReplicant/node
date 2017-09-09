const http = require("http");

let myTime = new Date();
let seconds = myTime.getSeconds();
let minutes = myTime.getMinutes();
let hours = myTime.getHours();

let time = "Current time on server is: " + hours + " : " + minutes + " : " + seconds;

let server = http.createServer((req,res)=> {
    let holder = [];
    for(key in req) {
        holder.push(key);
    }
    let answer = holder.reduce((operator, item)=> {
        operator += item + "\n";
        return operator;
    });

    res.writeHead(200, {"Content-Type":"text/plain"});
    res.end(time + "\n" + "Oh and here is the res object from the server: \n" + answer);
});

server.listen(3000);
