import express from "express";
import http from "http";
import WebSocket from "ws"

//http express
const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));


const handleListen = () => console.log("Listening on http://localhost:3000");

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
//http ws서버 동시 운영
//http서버위에 websocket서버가 동작

function handleConnection(socket) {
    console.log(socket);
    //socket: 사용자와 브라우저 사이를 구분
}


wss.on("connection", handleConnection);

server.listen(3000, handleListen);