import React from 'react';
import {combineReducers} from "redux";
import dataJsonRdc from "./dataJsonRdc";
import loadingRdc from './loadingRdc';


export const ContextApp = React.createContext(null);


export const initialState = {
    loadingState: {
        loading: false
    },

    dataJson: {
        data: Array ()
    }, 
    
};


export const unionRdc = combineReducers(

    {
        dataJsonRdc: dataJsonRdc,
        loadingRdc: loadingRdc
        
    }
);

