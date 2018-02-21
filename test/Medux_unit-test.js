require('babel-register')({
    presets: ['es2015', 'react'],
});
const expect = require('chai').expect;
const { reducer } = require('./../reducer/reducer');
const { createStore } = require('./../myRedux/Medux');


// const reducer1 = (state = initalState, action) => {
//     switch (action.type) {
//         case 'INCREMENT':
//             let incrState = Object.assign(state);
//             newState.count += 1;
//             return newState;
//         case 'DECREMENT':
//             let decrState = Object.assign(state);
//             if (newState !== 0) newState.count -= 1;
//             return newState;
//         default:
//             return state;
//     }
// };

describe('test for the test', () => {
    it('should pass', () => {
        expect(2).equal(2);
    })
})

describe('createStore', () => {
    it('should return a store object with dispatch, getState, subscribe methods', () => {
        const store = createStore(reducer);
        expect(store).to.be.a('object');
        expect(store).to.have.all.keys(['dispatch','getState', 'subscribe']);
    })

    it('should return an error if a reducer is not provided', ()=> {
        expect(() => {createStore()}).to.throw();
    })
    
    it('should validate that the reducer passed is a function', () => {
        expect(() => {createStore([])}).to.throw();
    })
})

describe('dispatch', () => {
    it('should be a function', () => {
        const store = createStore(reducer);
        expect(store.dispatch).to.be.a('function');
    })

    it('should require an action object with a property of type', () => {
        const store = createStore(reducer);
        const actionObj1 = [];
        const actionObj2 = {};
        expect(() => {store.dispatch()}).to.throw();
        expect(() => {store.dispatch(actionObj1)}).to.throw();
        expect(() => {store.dispatch(actionObj2)}).to.throw();
    })

    it('should return a new updated state', () => {
        const initialState = { counter: 0 };
        const store = createStore(reducer, initialState);
        const actionObj = { type: 'INCREMENT' };
        const expectedState = { counter: 1 };
        console.log();
        // expect(store.dispatch(actionObj)).to.equal(expectedState);

    })


})