import React,{Component} from 'react'
import { Link } from 'react-router'

class App extends Component{
    render(){
        return(
            <div>
                <h1>Hello,React!</h1>
                <ul id="nav">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos/facebook/react">Repos</Link></li>
                </ul>
            </div>
        )
    }
}

export default App