import React, {Component} from 'React';
import PropTypes from 'prop-types';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.forceUpdate = this.forceUpdate.bind(this);
        this.style = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-around',
            width: '45%',
            fontFamily: 'Futura'
        }
    }
    
    render() {
        //gets state from its parent's context. Passed Implicitly via the provider
        const { store } = this.context;
        const { counter } = store.getState();
        store.subscribe(this.forceUpdate);

        this.mapDispatchtoProps = {
            incre: () => { store.dispatch({ type: 'INCREMENT' })},
            decre: () => { store.dispatch({ type: 'DECREMENT' })}
        }

        this.renderTime = new Date(Date.now());

        return (
            <div>
                <div style={this.style} >
                    <button className={'btn btn-outline-info'} onClick={ this.mapDispatchtoProps.incre }> + </button>
                <h3> Counter { counter } </ h3>
                    <button className={'btn btn-outline-info'}onClick={ this.mapDispatchtoProps.decre }> - </ button>
                </ div>
                <p> Last Rendered { this.renderTime.toString() } </ p>
             </div>
        )
    }
}
Counter.contextTypes = {
    store: PropTypes.object
}

export default Counter;