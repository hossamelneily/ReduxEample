const redux = require('redux')

//store
const intialState = {
    counter:0
}

//Reducer
const rootReducer = (state=intialState,action) => {
    switch (action.type) {
        case('INC_COUNTER'):
           return {
               ...state,
               counter:state.counter+1
           }
        case('ADD_COUNTER'):
            return {
               ...state,
               counter:state.counter+action.value
           }
        default:
            return state

    }


}

const createStore = redux.createStore;


const Store  = createStore(rootReducer)


//Subscription
Store.subscribe(()=>{
    console.log('[subscription]',Store.getState())
})

// console.log(Store.getState())



//Action
Store.dispatch({type:'INC_COUNTER'})
Store.dispatch({type:'ADD_COUNTER',value:10})
// console.log(Store.getState())





