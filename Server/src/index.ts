import express,{Request,Response, Application} from "express";
import {dbConnection} from "./config/database";
import { createServer } from "http";
import {Server} from "socket.io"
// import { Server } from "http";

const app : Application = express();
const PORT = 8585;

app.use(express.json());


app.get("/",(req : Request, res : Response)=>{
    res.status(200).send(`Welcome to Chat app `)
});

const server = createServer(app);
const io = new Server(server);
io.on('connection', (socket) => {
    socket.on('chat message', (msg : string) => {
      console.log('message: ' + msg);
    });
  });
  
  


app.listen(PORT, async()=>{
    await dbConnection();
    console.log({Server : `Listing on Port ${PORT} 🤙`});
})

