import React from 'react';
import {combineReducers} from "redux";
import categoryListRdc from "./categoryListRdc";
import isAppInitRdc from './isAppInitRdc';
import sessionSidRdc from './sessionSidRdc';


export const ContextApp = React.createContext(null);


export const initialState = {
    isAppInitRdc: {
        isAppInit: false
    },

    categoryListRdc: {
        categoryList: Array ()
    }, 
    
    sessionSidRdc: {
        sessionSid: ""
    }, 
    
    
};


export const unionRdc = combineReducers(

    {
        categoryListRdc: categoryListRdc,
        isAppInitRdc: isAppInitRdc,
        sessionSidRdc: sessionSidRdc 
    }
);

