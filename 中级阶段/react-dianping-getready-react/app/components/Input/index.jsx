import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    changeHandler(e){
        this.setState({value:e.target.value});
    }

    keyUpHandler(e){
        const value = this.state.value;
        if(e.keyCode === 13 && value.trim()){
            this.props.submitFn(value);
            this.setState({value:''});
        }
    }

    render(){
        return(
            <input 
                style={{width:'100%',height:'40px',fontSize:'16px'}}
                value={this.state.value}
                onChange={this.changeHandler.bind(this)}
                onKeyUp={this.keyUpHandler.bind(this)}
            />
        )
    }
}

export default Input;