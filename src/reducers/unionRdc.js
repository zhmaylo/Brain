import React from 'react';
import { combineReducers } from "redux";

import isAppInitRdc from './isAppInitRdc';
import sessionSidRdc from './sessionSidRdc';
import statusResponseRdc from './statusResponseRdc';
import { NO_ERRORS } from './../constants/errorConst';
import { categoryListRdc, viewListCatRdc } from './categoryListRdc';


export const ContextApp = React.createContext(null);


export const initialState = {
    isAppInitRdc: {
        isAppInit: false
    },

    categoryListRdc: {
        categoryList: Array()
    },

    viewListCatRdc: {
        viewListCat: Array()
    },

    sessionSidRdc: {
        sessionSid: { sid: "1", timeStamp: 1 }
    },

    statusResponseRdc: {
        statusResponse: NO_ERRORS
    },

};


export const unionRdc = combineReducers(

    {
        ////////////////////////////////
        //Start. Reducers of categoryes
        categoryListRdc: categoryListRdc,
        viewListCatRdc: viewListCatRdc,
        //End. Reducers of categoryes
        ////////////////////////////////

        isAppInitRdc: isAppInitRdc,
        sessionSidRdc: sessionSidRdc,
        statusResponseRdc: statusResponseRdc
    }
);

