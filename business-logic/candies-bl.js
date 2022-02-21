import candiesDal from "../data-acces-layer/candies-dal.js"

const getAll= ()=> {
    return candiesDal.getAll()
}

const getById = id => {
    let candies = candiesDal.getAll()
    let requestedCandy = candies.find(candy.id===id)

    return requestedCandy ?? {}
}




export default {
    getAll,
    getById
}


