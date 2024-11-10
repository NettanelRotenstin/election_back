import express from "express";
import 'dotenv/config'
import userController from './controllers/usersController'
import adminController from './controllers/adminController'
import votesController from './controllers/votesController'
import candidatesController from './controllers/candidatesController'

const PORT = process.env.PORT || 3333
const app = express()

app.use(express.json())

app.use(`/api/users`,userController)
app.use(`/api/admin`,adminController)
app.use(`/api/votes`,votesController)
app.use(`/api/candidates`,candidatesController)

app.listen(PORT, () => { console.log(`server started on port ${PORT}`) })