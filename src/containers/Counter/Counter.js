import React, { Component } from 'react';
import * as actionTypes from '../../store/actions/actionTypes'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux'
import  * as  actionCreators from "../../store/actions/actions";
import  * as  counterActionCreators from "../../store/actions/counter";
import  * as  resultsActionCreators from "../../store/actions/results";
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
                <button onClick={()=>this.props.RESTORE(this.props.ctr)}>Store Results</button>
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
        ctr:state.counter.counter,
        rst:state.results.results
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onIncrement: () => dispatch(counterActionCreators.increment()),
        onDecrement:() => dispatch(counterActionCreators.decrement()),
        ADDFive:() => dispatch(counterActionCreators.add(5)),
        SUBFive:() => dispatch(counterActionCreators.sub(5)),
        RESTORE:(counter)=> dispatch(actionCreators.restore(counter)),
        REMOVE: (index) => dispatch(resultsActionCreators.remove(index))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

