import * as actionTypes from '../actions/actionTypes'
import UpdateObject from "./utility";
const initialState={
    counter:0,

}
const reducer=(state=initialState,action)=>{
     switch (action.type) {
        case(actionTypes.INC_COUNTER):
            return UpdateObject(state,{ counter:state.counter+1})
           // return {
           //     ...state,
           //     counter:state.counter+1
           // }
           case(actionTypes.DEC_COUNTER):
            return UpdateObject(state,{ counter:state.counter-1})
           //  return {
           //     ...state,
           //
           // }
        case(actionTypes.ADD_COUNTER):
            return UpdateObject(state,{counter:state.counter+action.value})
           //  return {
           //     ...state,
           //     counter:state.counter+action.value
           // }
           case(actionTypes.SUB_COUNTER):
           return UpdateObject(state,{counter:state.counter-action.value})
           // return {
           //     ...state,
           //     counter:state.counter-action.value
           // }
        default:
            return state

    }

}

export default reducer