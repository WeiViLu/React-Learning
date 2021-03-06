import React,{Component} from 'react'
import { Link } from 'react-router'

class App extends Component{
    render(){
        return(
            <div>
                <h1>Hello,React!</h1>
                <ul id="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default App