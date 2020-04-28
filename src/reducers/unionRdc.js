import React from 'react';
import {combineReducers} from "redux";
import loadJsonFlagRdc from "./loadJsonFlagRdc";
import dataJsonRdc from "./dataJsonRdc";

import storageToStateRdc from "./storageToStateRdc";

export const ContextApp = React.createContext(null);


export const initialState = {
    // dataJsonRdc:        { dataJson: []   },
    loadJsonFlagRdc:    { loadJsonFlag: false },
    // storageToStateRdc:  { storageToState: "test" }
};


export const unionRdc = combineReducers(

    {
        dataJsonRdc: dataJsonRdc,
        loadJsonFlagRdc: loadJsonFlagRdc,
        storageToStateRdc: storageToStateRdc
    }
);

