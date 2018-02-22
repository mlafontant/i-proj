// import Counter from './Counter_Stateless.jsx';
import Counter from './Counter.jsx';
import { render } from 'react-dom';
import React from 'react';
import { createStore } from './../myRedux/Medux';
import { createCachedStore } from './../myRedux/Medux';
import M_provider from '../myRedux/M_provider';
import { reducer } from './../reducer/reducer';

render((
    <div>
        <br/>
        <h2> Sync Redux </ h2>
        <M_provider store={createStore(reducer)}>
            <Counter/>
        </ M_provider>
        <br/>
        <h2> Async Redux</ h2>
        <M_provider store={createCachedStore(reducer)}>
            <Counter />
        </ M_provider>
    </ div>
), document.getElementById('contents'));

