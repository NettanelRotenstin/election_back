import { Socket } from "socket.io";
import { io } from "../app";
export const handelSocketConnection = (client:Socket) => {
    console.log(`[socket.io] New Connection ${client.id}`)
    client.on('disconnect',()=>console.log("connection end"))
    client.on('newVote',()=>{
        io.emit("newVoteAddad")
    })
}