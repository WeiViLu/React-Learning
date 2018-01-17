import AppDispatcher from '../AppDispatcher.js';
import * as ActionTypes from '../ActionTypes.js';
import {EventEmitter} from 'events';

const CHANGE_EVENT='changed';

const CounterValues={
    'First':0,
    'Second':10,
    'Third':20
}

const CounterStore=Object.assign({},EventEmitter.prototype,{
    getCounterValues:function(){
        return CounterValues;
    },

    emitChange:function(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback);
    },

    removeChangeListener:function(callback){
        this.remove(CHANGE_EVENT,callback);
    }
});

CounterStore.dispatchToken=AppDispatcher.register((action)=>{
    if(action.type===ActionTypes.INCREMENT){
        CounterValues[action.counterCaption]++;
        CounterStore.emitChange();
    }else if(action.type===ActionTypes.DECREMENT){
        CounterValues[action.counterCaption]--;
        CounterStore.emitChange();
    }
})

export default CounterStore;

