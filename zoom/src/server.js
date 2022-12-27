import express from "express";
import http from "http";
import SocketIO from "socket.io";


//backendside
/*
    wating event, If event is occured using socket print state
    connect, close, send message, get message
    wss mean whole server
*/


//http express
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));


const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
    socket.on("enter_room", (msg, done) => {
        console.log(msg);
        setTimeout(() => {
            done();
        }, 5000);
    });
});

/*
const sockets = [];

wss.on("connection", (socket) => {
    sockets.push(socket);
    socket["nickname"] = "Anon";
    console.log("Connected to Browser ^^");
    socket.on("close", onSocketClose); //when close browser
    socket.on("message", (msg) => {
        const message = JSON.parse(msg);
        switch (message.type){
            case "new_message":
                sockets.forEach((aSocket) =>
                    aSocket.send(`${socket.nickname}: ${message.payload}`)
                );
            case "nickname":
                socket["nickname"] = message.payload;
        }

    });
    socket.send("hello!!!"); //sending message
    //console.log(socket);
});
*/

const handleListen = () => console.log('Listening on http://localhost:3000');
httpServer.listen(3000, handleListen);