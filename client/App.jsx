import Counter from './Counter.jsx';
import { render } from 'react-dom';
import React from 'react';
import { createStore } from './../myRedux/Medux';

render((
    <Counter/>
), document.getElementById('contents'));