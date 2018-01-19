import React from 'react'

export default class Repo extends React.Component{
    render(){
        return(
            <div>
                username:{this.props.params.userName}<br/>
                repoName:{this.props.params.reposName}<br/>
            </div>
        )
    }
}
