import React, { Component } from 'react';


const Medux = {
    createStore: function(reducer) {
        this.reducer = reducer;
        return this.store;
    },

    store: {
        dispatch: function(actionObj) {
            this.reducer(actionObj);

            setState()
        }



    }



}







export default Medux;