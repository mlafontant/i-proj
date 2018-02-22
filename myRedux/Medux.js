// Challenge 1 exporting a name space
// Challenge 2 figuring out correct form to export
export const createStore = function (input) {
        if(!input || typeof input.reducer !== 'function') throw new Error('Valid reducer function required');

        let state = input.initialState || {};
        const reducer = input.reducer;
        const listeners = [];
        const store = {
            dispatch: function (actionObj) {
                if (typeof actionObj !== 'object') throw new Error('Action obj required');
                if(!actionObj.hasOwnProperty('type')) throw new Error('Action type is required');
                state = reducer(state, actionObj);
                // console.log("state in store:",state);
                listeners.forEach(listener => listener());
            },
            getState: () => state,
            subscribe: function (cb) {
                if(!listeners.includes(cb)) listeners.push(cb);
                //add a way to remove a listener??
            }
        }
        return store;
    }

export const createCachedStore = function (input) {
    if (!input || typeof input.reducer !== 'function') throw new Error('Valid reducer function required');

    // let state = input.initialState || {};
    let state = {counter: 0};
    const reducer = input.reducer;
    const listeners = [];
    let willUpdate = false;
    const store = {
        dispatch: function (actionObj) {
            if (typeof actionObj !== 'object') throw new Error('Action obj required');
            if (!actionObj.hasOwnProperty('type')) throw new Error('Action type is required');
            state = reducer(state, actionObj);
            if(!willUpdate) {
                setTimeout(() => {
                    listeners.forEach(listener => listener());
                    willUpdate = false;
                }, 750);

                willUpdate = true;
            }
        },
        getState: () => state,
        subscribe: function (cb) {
            if (!listeners.includes(cb)) listeners.push(cb);
            //add a way to remove a listener??
        }
    }
    return store;
}

// }

// Medux.prototype.createStore = function (reducer) {
//     this.reducer = reducer;
//     this.listeners = [];
//     this.store = {
//         dispatch: this.bind(function (actionObj) {
//             this.state = this.reducer(this.state, actionObj);
//             // this.setState(newState, () => {
//                 listeners.forEach(listener => listener());
//             // });
//             }, this),
//         getState: this.bind(() => this.state, this),
//         subscribe: this.bind(function (cb) {
//         this.listeners.push(cb);
//             //add a way to remove a listener??
//         })
//     }
//     return this.store;
// }
