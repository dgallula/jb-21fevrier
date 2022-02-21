import candiesDal from "../data-acces-layer/candies-dal.js"

const GetAll= ()=> {
    return candiesDal.GetAll()
}

const getById = id => {
    let candies = candiesDal.GetAll()
    let requestedCandy = candies.find(candy.id===id)

    return requestedCandy ?? {}
}




export default {
    GetAll,
    getById
}


