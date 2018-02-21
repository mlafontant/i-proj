export const reducer = (state = initalState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            let incrState = Object.assign(state);
            incrState.counter += 1;
            return incrState;
        case 'DECREMENT':
            let decrState = Object.assign(state);
            if (decrState !== 0) decrState.counter -= 1;
            return decrState;
        default:
            return state;
    }
};