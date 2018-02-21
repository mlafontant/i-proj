import React, { Component } from 'react';

class M_provider extends Component {
    
    //This provides context to any component wrapped instide the M_provider including grandchildren
    getChildContext() {
        return {
            store: this.props.store
        }
    }
    
    render() {
        //renders its children or anything that is wrapped inside of it
        return this.props.children;
    };
}
//We need to specify that the store key has a propType of object
M_provider.childContextTypes = {
    store: React.Proptypes.object
};

//Now we don't need to pass the store down to each component one by one. Instead, we can just neeed to specify the content type in each child that needs access to the store once.

// Component_name.contextTypes = {
//     store: React.PropTypes.object
// }

// &&

// render() {
//     const { store } = this.context
// }

// Later when called it is going to leverage the React advanced context feature to make the store available to all things inside of it.

// <M_provider store={createStore(reducer)}> 
//     <App />
// </M_provider>

export default M_provider;