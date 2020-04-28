import React from 'react';
import {combineReducers} from "redux";
import loadJsonFlagRdc from "./loadJsonFlagRdc";
import dataJsonRdc from "./dataJsonRdc";
import createEngine from 'redux-storage-engine-localstorage';
import {stateToConsoleLog} from "../api/localStorage";
import localStoreRdc from "./localStoreRdc";

export const ContextApp = React.createContext(null);


export const initialState = {
    dataJsonRdc:        { dataJson: []   },
    loadJsonFlagRdc:    { loadJsonFlag: false },
    localStoreRdc:      { localStore: "main" }
};


export const unionRdc = combineReducers(

    {
        dataJsonRdc: dataJsonRdc,
        loadJsonFlagRdc: loadJsonFlagRdc,
        localStoreRdc: localStoreRdc
    }
);

