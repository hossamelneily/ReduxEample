import * as actionTypes from './actions'

const initialState={
    counter:0,
    results:[]
}
const reducer=(state=initialState,action)=>{
     switch (action.type) {
        case(actionTypes.INC_COUNTER):
           return {
               ...state,
               counter:state.counter+1
           }
           case(actionTypes.DEC_COUNTER):
            return {
               ...state,
               counter:state.counter-1
           }
        case(actionTypes.ADD_COUNTER):
            return {
               ...state,
               counter:state.counter+action.value
           }
           case(actionTypes.SUB_COUNTER):
            return {
               ...state,
               counter:state.counter-action.value
           }
         case(actionTypes.RESTORE):
            return {
               ...state,
               results:[...state.results,state.counter]
           }
         case(actionTypes.REMOVE):
               const updateArr = [...state.results].filter(((value, index) => index !== action.rsltID))
            return {
               ...state,
               results:updateArr
           }

        default:
            return state

    }

}

export default reducer