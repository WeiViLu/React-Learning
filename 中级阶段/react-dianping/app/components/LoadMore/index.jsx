import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    handleResult(){
        this.props.loadMoreFn();
    }

    componentDidMount(){
        const wrapper=this.refs.wrapper;
        const loadMoreFn=this.props.loadMoreFn;
        let time;

        function callback(){
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight= window.screen.height;

            if(top && top < windowHeight){
                loadMoreFn();
            }
        }

        window.addEventListener("scroll",function(){
            if(this.props.isLoadingMore){
                return 
            }

            if(time){
                clearTimeout(time);
            }

            time = setTimeout(callback,50);
        }.bind(this),false)
    }

    render(){
        return(
            <div className="load-more" ref="wrapper">
               {
                   this.props.isLoadingMore?
                   <span>加载中...</span>
                   : <span onClick={this.handleResult.bind(this)}>加载更多</span>
               }
            </div>
        )
    }
}

export default LoadMore