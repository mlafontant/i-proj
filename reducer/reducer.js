export const reducer = {
    initialState: {
        counter: 0
    },

    reducer: (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            let incrState = Object.assign(state);
            incrState.counter += 1;
            return incrState;
        case 'DECREMENT':
            let decrState = Object.assign(state);
            if (decrState.counter !== 0) decrState.counter -= 1;
            return decrState;
        default:
            return state;
        }
    }   
}