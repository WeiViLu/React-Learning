import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as storeActionsFromFile from '../../../actions/store';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';

import BuyAndStore from '../../../components/BuyAndStore'

class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            isStore: false
        }
    }

    componentDidMount(){
        this.checkStoreState();
    }

    //购买
    buyHandle(){
        const loginFlag = this.loginCheck();
        if (!loginFlag){
            return
        }

        //购买的流程
        //..
        //..
        //..

        //跳转到用户页
        hashHistory.push('/User')
    }

    //收藏
    storeHandle(){
        const loginFlag = this.loginCheck();
        if (!loginFlag){
            return
        }

        const id = this.props.id;
        const storeActions = this.props.storeActions;
        
        if(this.state.isStore){
            //当前商品已经被收藏，点击时取消收藏
            storeActions.rm({id:id});
        } else {
            //当前商品未被收藏，点击时收藏
            storeActions.add({id:id});
        }

        this.setState({
            isStore: !this.state.isStore
        })
    }

    //验证登录
    loginCheck(){
        const id = this.props.id;
        const userinfo = this.props.userinfo;

        console.log(!userinfo.username);

        if(!userinfo.username){
            //跳转到登录页面
            hashHistory.push('/Login/' + encodeURIComponent('/detail/' + id))
            return false
        }else{
            return true
        }
    }

    //检验当前商户是否被收藏
    checkStoreState(){
        const id = this.props.id;
        const store = this.props.store;

        store.some(item => {
            if(item.id == id){
                this.setState({
                    isStore: true
                })
                //跳出循环
                return true;
            }
        })
    }

    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch){
    return {
        storeActions: bindActionCreators(storeActionsFromFile,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Buy)