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


const res=(counter)=>{
    return{
                   type:actionTypes.RESTORE,counter:counter
                }
}
export const restore=(counter)=>{

    return (dispatch,getState)=>{
        setTimeout(()=> {
            console.log(getState().counter)
            dispatch(res(counter))
            }


        ,2000)
    }

}

export const remove=(index)=>{
    return{
        type:actionTypes.REMOVE,
        rsltId:index
    }

}


