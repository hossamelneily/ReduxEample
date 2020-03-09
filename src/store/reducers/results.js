import * as actionTypes from '../actions/actionTypes'

const initialState={
    results:[]
}
const reducer=(state=initialState,action)=>{
     switch (action.type) {
         case(actionTypes.RESTORE):
            return {
               ...state,
               results:[...state.results,action.counter]
           }
         case(actionTypes.REMOVE):
               const updateArr = [...state.results].filter(((value, index) => index !== action.rsltId))
            return {
               ...state,
               results:updateArr
           }

        default:
            return state

    }

}

export default reducer