import express from "express";
import 'dotenv/config'
import userController from './controllers/usersController'
import adminController from './controllers/adminController'
import votesController from './controllers/votesController'
import candidatesController from './controllers/candidatesController'
import { connectToMonge } from "./config/DB";
import cors from 'cors'
import http from "http"
import {Server} from "socket.io"
import { handelSocketConnection } from "./sokcets/io";

const PORT = process.env.PORT || 3333
const app = express()
const httpServer = http.createServer(app)
export const io = new Server(httpServer, {
    cors: {
      origin: "*",
      methods: "*",
    },
    
  });
io.on("connection",handelSocketConnection)
connectToMonge()
app.use(express.json())
app.use(cors())

app.use(`/api/users`,userController)
app.use(`/api/admin`,adminController)
app.use(`/api/votes`,votesController)
app.use(`/api/candidates`,candidatesController)

httpServer.listen(PORT, () => { console.log(`server started on port ${PORT}`) })