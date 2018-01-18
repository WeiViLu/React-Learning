import React,{Component} from 'react'
import PropTypes from 'prop-types';

import * as Actions from '../Actions.js';
import store from '../Store.js'

const buttonStyle={
    margin:'15px'
}

class Counter extends Component{
    constructor(props){
        super(props);

        this.onChange=this.onChange.bind(this);
        this.onIncrement=this.onIncrement.bind(this);
        this.onDecrement=this.onDecrement.bind(this);
        this.state=this.getOwnState();
    }

    getOwnState(){
        return{
            value:store.getState()[this.props.caption]
        }
    }

    shouldComponentUpdate(nextProps,nextState){
        return (nextProps.caption!==this.props.caption)||(nextState.value!==this.state.value)
    }

    onChange(){
        this.setState(this.getOwnState());
    }

    componentDidMount(){
        store.subscribe(this.onChange);
    }

    componentWillUnmount(){
        store.unsubscribe(this.onChange);
    }

    onIncrement(){ 
        console.log(this.state.value);
        store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrement(){
        store.dispatch(Actions.decrement(this.props.caption));
    }

    render(){
        const value=this.state.value;
        const {caption}=this.props;
        return(
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                <span>{caption} count:{value}</span>
            </div>
        )
    }
}

Counter.propTypes={
    caption:PropTypes.string.isRequired
}

export default Counter