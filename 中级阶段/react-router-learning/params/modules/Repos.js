import React,{Component} from 'react'

class Repos extends Component{
    render(){
        return(
            <div>
                userName:{this.props.params.userName}<br/>
                reposName:{this.props.params.repoName}
            </div>
        )
    }
}

export default Repos