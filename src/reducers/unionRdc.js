import React from 'react';
import {combineReducers} from "redux";
import categoryListRdc from "./categoryListRdc";
import isAppInitRdc from './isAppInitRdc';
import sessionSidRdc from './sessionSidRdc';
import statusResponseRdc from './statusResponseRdc';
import { NO_ERRORS } from './../constants/error';


export const ContextApp = React.createContext(null);


export const initialState = {
    isAppInitRdc: {
        isAppInit: false
    },

    categoryListRdc: {
        categoryList: Array ()
    }, 
    
    sessionSidRdc: {
        sessionSid: { sid: "", timeStamp: 1 }
    }, 

    statusResponseRdc: {
        statusResponse: NO_ERRORS
    },
    
};


export const unionRdc = combineReducers(

    {
        categoryListRdc: categoryListRdc,
        isAppInitRdc: isAppInitRdc,
        sessionSidRdc: sessionSidRdc,
        statusResponseRdc: statusResponseRdc
    }
);

