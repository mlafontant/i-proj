import React, {Component} from 'React';
import PropTypes from 'prop-types';


//This is a presentational component that doesn't need state
const Counter = (props, { store }) => {
    console.log(store);
    //gets state from its parent's context. Passed Implicitly via the provider
    // const { store } = this.context;
    const { counter } = store.getState();
    //there is no access to state
    // console.log(store);
    const mapDispatchtoProps = {
        incre: () => {
            store.subscribe(this.forceUpdate);
            store.dispatch({ type: 'INCREMENT' })
        },
        decre: () => { 
            // store.subscribe(forceUpdate);
            store.dispatch({ type: 'DECREMENT' })
         }
    }

    console.log('state in child:', counter);
    return (
         <div>
           <h2> Counter { counter } </h2>
           <button onClick={ mapDispatchtoProps.incre }> + </button>
            <button onClick={ mapDispatchtoProps.decre }> - </button>
        </div>
    )
}

Counter.contextTypes = {
    store: PropTypes.object
}

export default Counter;