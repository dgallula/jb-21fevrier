import  express  from "express";
import candiesBl from "../business-logic/candies-bl.js";


const router = express.Router()
const baseUrl = '/api'

router.get(`${baseUrl}/candies`, (req, res)=> {
    let result = candiesBl.getAll()
    res.send(result)
})

router.get(`${baseUrl}/candies/:id`, (req, res)=> {
    let id = +req.params.id;

    let result = candiesBl.getById()
    res.send(result)
})


export {
    router
}