import express from "express";
import {router } from "./controllers/candies-controllers.js";

const app = express()
const baseUrl= '/api'

app.use('/', router)

app.listen(5000)
console.log('server is listening on port 5000')
 



