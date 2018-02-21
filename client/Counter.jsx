import React, {Component} from 'React'
import { createStore } from './../myRedux/Medux';
import { reducer } from './../reducer/reducer';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            counter: 0
        };
        this.store = createStore(reducer, this.initialState);
        this.mapDispatchtoProps = {
            incre: () => { 
                this.store.subscribe(this.render);
                this.store.dispatch({ type: 'INCREMENT' }) },
            decre: () => { this.store.dispatch({ type: 'DECREMENT' }) }
        }
        this.render = this.render.bind(this);
    }

    render() {
        const { counter } = this.store.getState();
        console.log('in render', counter);
        return (
            <div>
               Counter { counter }
               <button onClick={ this.mapDispatchtoProps.incre }></button>
            </div>
        )
    }
}

export default Counter;