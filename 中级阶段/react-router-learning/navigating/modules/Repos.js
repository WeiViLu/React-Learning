import React,{Component} from 'react'

import NavLink from './NavLink.js'

class Repos extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const userName=e.target.elements[0].value;
        const repo=e.target.elements[1].value;
        const path=`/repos/${userName}/${repo}`
        this.context.router.push(path);
    }

    render(){
        return(
           <div>
                <h2>Repos</h2>
                <ul>
                    <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                    <li>
                        <form onSubmit={this.handleSubmit}>
                            userName:<input type="text" placeholder="userName" />{' '}
                            repo:<input type="text" placeholder="repo" />{' '}
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
                {this.props.children}
           </div>
        )
    }
}

Repos.contextTypes={
    router:React.PropTypes.object
}

export default Repos