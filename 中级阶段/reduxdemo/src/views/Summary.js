 import React,{Component} from 'react'

 import store from '../Store.js'

 class Summary extends Component{
     constructor(props){
         super(props);

         this.onChange=this.onChange.bind(this);
         this.state=this.getOwnState();
     }

     getOwnState(){
        const state=store.getState();
        let sum=0;

        for(const key in state){
            if(state.hasOwnProperty(key)){
                sum +=state[key];
            }
        }

        return {sum:sum};
     }

     componentDidMount(){
        store.subscribe(this.onChange);
     }

     componentWillUnmount(){
        store.unsubscribe(this.onChange);
     }

     onChange(){
         this.setState(this.getOwnState());
     }

     render(){
         return(
             <div>Total count:{this.state.sum}</div>
         )
     }
 }

 export default Summary