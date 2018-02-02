import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LocalStore from '../../util/localStore'
import {CITYNAME} from '../../config/localStoreKey'
import { hashHistory } from 'react-router'


import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    componentDidMount(){
    }

    changeNewCity(newCity){
        if(newCity == null){
            return
        }

        //修改redux
        this.props.userinfo.cityName=newCity;
        this.props.userInfoActions.update(this.props.userinfo);

        //修改localstorage
        LocalStore.setItem(CITYNAME,newCity);

        //返回首页
        hashHistory.push('/');
    }

    render() {
        return (
            <div>
               <Header title="选择城市"/>
               <CurrentCity cityName={this.props.userinfo.cityName}/>
               <CityList  changeFn={this.changeNewCity.bind(this)}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{ userinfo: state.userinfo }
}

function mapDispatchToProps(dispatch){
    return{
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)
