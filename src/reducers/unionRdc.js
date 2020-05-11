import React from 'react';
import {combineReducers} from "redux";
import dataJsonRdc from "./dataJsonRdc";
import isAppInitRdc from './isAppInitRdc';
import sessionSidRdc from './sessionSidRdc';


export const ContextApp = React.createContext(null);


export const initialState = {
    isAppInitRdc: {
        loading: false
    },

    dataJsonRdc: {
        data: Array ()
    }, 
    
    sessionSidRdc: {
        sid: ""
    }, 
    
    
};


export const unionRdc = combineReducers(

    {
        dataJsonRdc: dataJsonRdc,
        isAppInitRdc: isAppInitRdc,
        sessionSidRdc: sessionSidRdc 
    }
);

