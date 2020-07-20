import React from 'react';
import { combineReducers } from "redux";

import isAppInitRdc from './isAppInitRdc';
import sessionSidRdc from './sessionSidRdc';
import statusResponseRdc from './statusResponseRdc';
import { NO_ERRORS } from './../constants/errorConst';
import { categoryListRdc, viewListCatRdc } from './categoryListRdc';
import { productsListRdc } from './productsListRdc';
import { viewListProdRdc } from './viewListProdRdc';
import { spinerToggleRdc, spinerVolumeRdc, spinerMaxRdc } from './spinerRdc';


export const ContextApp = React.createContext(null);


export const initialState = {
    isAppInitRdc: {
        isAppInit: false
    },
    
    ////////////////////////////////
    //Start. Reducers of categoryes
    categoryListRdc: {
        categoryList: Array()
    },

    viewListCatRdc: {
        viewListCat: Array()
    },
    //End. Reducers of categoryes
    ////////////////////////////////
    
    sessionSidRdc: {
        sessionSid: { sid: "1", timeStamp: 1 }
    },

    statusResponseRdc: {
        statusResponse: NO_ERRORS
    },
    
    productsListRdc: {
        productsList: Array()
    },
    
    viewListProdRdc: {
        numColumViewListProd: 2
    },

    ////////////////////////////////
    //Start. Spiner
    spinerToggleRdc: {
        spinerToggle: true
    },

    spinerVolumeRdc: { 
        spinerVolume: 100
    },

    spinerMaxRdc: {
        spinerMax: 100
    }
    //End. Spiner
    ////////////////////////////////



};


export const unionRdc = combineReducers(

    {
        ////////////////////////////////
        //Start. Reducers of categoryes
        categoryListRdc: categoryListRdc,
        viewListCatRdc: viewListCatRdc,
        //End. Reducers of categoryes
        ////////////////////////////////
       
        ////////////////////////////////
        //Start. Spiner
        spinerToggleRdc: spinerToggleRdc,
        spinerVolumeRdc: spinerVolumeRdc,
        spinerMaxRdc: spinerMaxRdc,
        //End. Spiner
        ////////////////////////////////

        productsListRdc: productsListRdc,

        isAppInitRdc: isAppInitRdc,
        sessionSidRdc: sessionSidRdc,
        statusResponseRdc: statusResponseRdc,
        viewListProdRdc: viewListProdRdc,
    }
);

