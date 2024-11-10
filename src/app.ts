import express from "express";
import 'dotenv/config'

const PORT = process.env.PORT || 3333
const app = express()

app.listen(PORT, () => { console.log(`server started on port ${PORT}`) })