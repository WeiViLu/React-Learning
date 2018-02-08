import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            commentState: 2
        }
    }

    componentDidMount(){
        this.setState({
            commentState: this.props.data.commentState
        })
    }

    showComment(){
        this.setState({
            commentState: 1
        })
    }
    //取消按钮
    hideComment(){
        this.setState({
            commentState: 0
        })
    }
    //提交按钮
    submitComment(){

    }

    render() {
        const data = this.props.data;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img}/>
                </div>
                <div className="order-item-comment float-right">
                   {
                       //未评价
                       this.state.commentState === 0
                       ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                        // 评价中
                        : this.state.commentState === 1
                        ? ''
                          : <button className="btn unselected-btn">已评价</button>
                   }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>数量：{data.count}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                {
                    this.state.commentState === 1
                    ? <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                        <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                        &nbsp;
                        <button className="btn unselected-btn" onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                    : ''
                }
            </div>
        )
    }
}

export default Item