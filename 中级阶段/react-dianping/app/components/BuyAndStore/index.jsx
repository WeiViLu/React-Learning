import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class BuyAndStore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    StoreClickHandle(){
        this.props.storeHandle();
    }

    BuyClickHandle(){
        this.props.buyHandle();
    }

    render() {
        return (
           <div className="buy-store-container clear-fix">
               <div className="item-container float-left">
                   {
                        this.props.isStore
                        ? <button onClick={this.StoreClickHandle.bind(this)} className="selected">已收藏</button>
                        : <button onClick={this.StoreClickHandle.bind(this)}>收藏</button>
                    }
               </div>
               <div className="item-container float-right">
                   <button onClick={this.BuyClickHandle.bind(this)}>购买</button>
               </div>
           </div>
        )
    }
}

export default BuyAndStore