import candiesDal from "../database/database.js";

const GetAll = () => {
    return candiesDal.GetAll()
}

const getById = id => {
    let candies = candiesDal.get.all()
    let requestCandy = candies.find(candy =>candy.id=== id )
      

    return requestCandy
}


export default {
    GetAll,
    getById
}   