import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd'
import {getAdData} from '../../../fetch/home/home.js'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        const result=getAdData();
        result.then((res)=>{
            return res.json();
        }).then((json)=>{
            const data=json;
            if(data.length){
                this.setState({
                    data:data
                });
            }
            console.log(json);
        })
    }

    render() {
        return (
           <div>
               <HomeAd data={this.state.data}/>
           </div>
        )
    }
}

export default Ad
