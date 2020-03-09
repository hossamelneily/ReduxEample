import *  as actionTypes from './actionTypes'


export const increment=()=>{
    return{
        type:actionTypes.INC_COUNTER
    }

}

export const decrement=()=>{
    return{
       type:actionTypes.DEC_COUNTER
    }

}

export const add=(value)=>{
    return{
        type:actionTypes.ADD_COUNTER,value:value
    }
}



export const sub=(value)=>{
    return{
        type:actionTypes.SUB_COUNTER,value:value
    }

}
