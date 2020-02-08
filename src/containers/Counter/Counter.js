import React, { Component } from 'react';
import * as actionTypes from '../../store/actions'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }


    render () {
        console.log(this.props.ctr)
        console.log(this.props.rst)
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.ADDFive}  />
                <CounterControl label="Subtract 5" clicked={this.props.SUBFive}  />
                <button onClick={this.props.RESTORE}>Store Results</button>
                <ul>
                    {this.props.rst.map((value,index) => (
                        <li key={index} onClick={() => this.props.REMOVE(index)}>{value}</li>
                    ))}

                </ul>
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
    return{
        ctr:state.counter,
        rst:state.results
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onIncrement: () => dispatch({type:actionTypes.INC_COUNTER}),
        onDecrement:() => dispatch({type:actionTypes.DEC_COUNTER}),
        ADDFive:() => dispatch({type:actionTypes.ADD_COUNTER,value:5}),
        SUBFive:() => dispatch({type:actionTypes.SUB_COUNTER,value:5}),
        RESTORE:()=> dispatch({type:actionTypes.RESTORE}),
        REMOVE: (index) => dispatch({type:actionTypes.REMOVE,rsltID:index})
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);