import * as actionTypes from '../../store/actions'

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