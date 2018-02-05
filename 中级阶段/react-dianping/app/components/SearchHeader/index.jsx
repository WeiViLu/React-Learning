import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../SearchInput'

import {hashHistory} from 'react-router'

import './style.less'

class SearchHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    
    ClickHandler(){
        window.history.back();
    }

    enterHandler(value){
        hashHistory.push('/search/all/'+encodeURIComponent(value));
    }

    render() {
        return (
            <div id="search-header" className="clear-fix">
                 <span className="back-icon float-left" onClick={this.ClickHandler}>
                    <i className="icon-chevron-left"></i>
                 </span>
                 <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <SearchInput enterHandler={this.enterHandler.bind(this)} value={this.props.keyword || ''}/>
                 </div>  
            </div>
        )
    }
}

export default SearchHeader