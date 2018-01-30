import React from 'react'

import Input from '../../components/Input'
import List from '../../components/List'

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.submitFn=this.submitFn.bind(this);
        this.deleteFn=this.deleteFn.bind(this);
        this.state={
            todos:[]
        }
    }

    submitFn(value){
        const id=this.state.todos.length;
        this.setState({
            todos:this.state.todos.concat({
                id:id,
                text:value
            })
        })
    }

    deleteFn(id){
        const data=this.state.todos
        this.setState({
            todos:data.filter(item =>
                item.id !== id
            )
        })
    }

    render(){
        return(
            <div>
                <Input submitFn={this.submitFn}/>
                <List todos={this.state.todos} deleteFn={this.deleteFn}/>
            </div>
        )
    }
}

export default Todo