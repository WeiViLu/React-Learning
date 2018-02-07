import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { hashHistory } from 'react-router';

import Header from '../../components/Header';
import LoginComponent from '../../components/Login';

class Login extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            checking:true
        }
    }

    componentDidMount(){
        this.doCheck();
    }

    doCheck(){
        const userinfo = this.props.userinfo
        if(userinfo.username){
            //已经登录
            this.goUserPage();
        }else{
            //未登录
            this.setState({
                checking:false
            })
        }
    }

    goUserPage(){
        hashHistory.push('/User')
    }

    //登录成功后
    loginHandle(username){
        //保存用户名
        const userinfo = this.props.userinfo;
        const actions = this.props.userInfoActions;
        userinfo.username=username;
        actions.update(userinfo);

        //跳转链接
        const params = this.props.params
        const router = params.router

        if(router){
            hashHistory.push(router);
        }else{
            hashHistory.push('/User');
        }
    }

    render() {
        return (
           <div>
               <Header title="登录" />
               {
                   this.state.checking
                   ? <div>未登录</div>
                   : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
               }
           </div>
        )
    }
}

function mapStateToProps(state){
   return {userinfo: state.userinfo} 
}

function mapDispatchToProps(dispatch){
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)