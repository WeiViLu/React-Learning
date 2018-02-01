import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './Item'

class ListComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const data=this.props.data
        return (
           <div id="home-ad">
                <div>
                    {
                        data.map((item,index) => {
                            return <Item key={index} item={item}/>
                        })
                    }
                </div>
           </div>
        )
    }
}

export default ListComponent
