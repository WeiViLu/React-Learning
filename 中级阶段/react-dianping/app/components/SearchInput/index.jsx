import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class SearchInput extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            value:""
        }
    }
    componentDidMount(){
        this.setState({
            value: this.props.value || ""
        })
    }

    changeHandler(e){
        this.setState({
            value: e.target.value
        })
    }

    keyUpHandler(e){
        if(e.keyCode !== 13){
            return;
        }
        this.props.enterHandler(this.state.value);
    }

    render() {
        return (
            <input 
                className="search-input" 
                placeholder="请输入关键字"
                value={this.state.value}
                onChange={this.changeHandler.bind(this)}
                onKeyUp={this.keyUpHandler.bind(this)}
            />
        )
    }
}

export default SearchInput