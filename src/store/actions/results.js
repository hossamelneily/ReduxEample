import *  as actionTypes from './actionTypes'

export const restore=(counter)=>{

    return (dispatch,getstate)=>{
        setTimeout(()=> dispatch(() => {
            return{
                   type:actionTypes.RESTORE,counter:counter
                }
            }

            )
        ,2000)
    }

}

export const remove=(index)=>{
    return{
        type:actionTypes.REMOVE,
        rsltId:index
    }

}
