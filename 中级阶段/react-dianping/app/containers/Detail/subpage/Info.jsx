import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import {getInfoData} from '../../../fetch/detail/detail'
import DetailInfo from '../../../components/DetailInfo'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            info:false
        }
    }

    componentDidMount(){
        const id = this.props.id;
        const result = getInfoData(id);

        result.then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                info:json
            })
        }).catch(ex => {
            if(__DEV__){
                console.error('搜索页获取数据报错, ', ex.message)
            }
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.info
                    ? <DetailInfo data={this.state.info}/>
                    : ''
                }
            </div>
        )
    }
}

export default Info;