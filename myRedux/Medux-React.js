import React, { Component } from 'react';

export class Medux extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.createStore = this.bind(this.createStore, this);
    }

    createStore(reducer) {
        this.reducer = reducer;
        this.listeners = [];
        this.store = {
            dispatch: this.bind(function (actionObj) {
                let newState = this.reducer(this.state, actionObj);
                this.setState(newState, () => {
                    listeners.forEach(listener => listener());
                });
            }, this),
            getState: this.bind(() => this.state, this),
            subscribe: this.bind(function (cb) {
                this.listeners.push(cb);
                //add a way to remove a listener??
            })
        }
        return this.store;
    }
}