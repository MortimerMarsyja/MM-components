const reducers = {
    default: state=>state,
    ADD_TO_COUNT:(state,payload)=>state + payload,
    SUBSTRACT_FROM_COUNT:(state,payload)=> state - payload,
}

export const countReducer = (state=0,action) => {
    return (reducers[action.type]||reducers.default)(state,action.payload)
}


