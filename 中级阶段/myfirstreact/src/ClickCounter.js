import React,{Component} from 'react';
import PropTypes from 'prop-types';

class ClickCounter extends Component{

    constructor(props){
        super(props);
        console.log('enter constructor:'+props.caption);
        this.Add=this.Add.bind(this);
        this.Minus=this.Minus.bind(this);
        this.state={count:props.initValue};
    }

    // 装载过程
    componentWillReceiveProps(nextProps){
        console.log('enter componentWillReceiveProps:'+this.props.caption);
    }

    componentWillMount(){
        console.log('enter componentWillMount:'+this.props.caption);
    }

    componentDidMount(){
        console.log('enter componentDidMount:'+this.props.caption);   
    }


    Add(){
        this.updateCount(true);
    }

    Minus(){
        this.updateCount(false);
    }

    updateCount(isIncrement) {
        const previousValue = this.state.count;
        const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
    
        this.setState({count: newValue})
        this.props.onUpdate(newValue, previousValue)
    }

    //更新过程
    shouldComponentUpdate(nextProps,nextState){
        return (nextProps.caption!==this.props.caption)||(nextState.count!==this.state.count)
    }

    render(){
        const {caption} = this.props;
        return(
            <div>
                <button onClick={this.Add}>+</button>
                <button onClick={this.Minus}>-</button>
                <span>{caption} count:{this.state.count}</span>
            </div>
        );
    }
}

ClickCounter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number,
    onUpdate: PropTypes.func
  };
  
  ClickCounter.defaultProps = {
    initValue: 0,
    onUpdate: f => f //什么都不做的函数
  };

export default ClickCounter;