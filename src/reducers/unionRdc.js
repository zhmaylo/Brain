import React from 'react';
import { combineReducers } from "redux";

import isAppInitRdc from './isAppInitRdc';
import sessionSidRdc from './sessionSidRdc';
import statusResponseRdc from './statusResponseRdc';
import { NO_ERRORS } from './../constants/errorConst';
import { categoryListRdc, viewListCatRdc } from './categoryListRdc';
import { productsListRdc, sizeListProdRdc } from './productsListRdc';
import { numColumProdRdc } from './numColumProdRdc';
import { spinerToggleRdc } from './spinerRdc';
import { sortSwitchArrRdc } from './sortListProdRdc';
import { SORT_SWITCHES_ARR } from '../constants/sortConst';
import { prodCurrentRdc } from './prodCurrentRdc';


export const ContextApp = React.createContext(null);

// volume on default
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

    ////////////////////////////////
    //Start. Products list
    productsListRdc: {
        productsList: Array()
    },

    sizeListProdRdc: {
        sizeListProd: 0
    },
    //End. Products list
    ////////////////////////////////

    numColumProdRdc: {
        numColumProd: 2
    },

    ////////////////////////////////
    //Start. Spiner
    spinerToggleRdc: {
        spinerToggle: false
    },
    //End. Spiner
    ////////////////////////////////

    ////////////////////////////////
    //Start. Sort list
    sortSwitchArrRdc: {
        sortSwitchArr: SORT_SWITCHES_ARR
    },
    //End. Sort list
    ////////////////////////////////

    ////////////////////////////////
    //Start. Product current
    prodCurrentRdc: {
        prodCurrent: []
    }
    //End. Product current
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
        //End. Spiner
        ////////////////////////////////

        ////////////////////////////////
        //Start. Products list
        productsListRdc: productsListRdc,
        sizeListProdRdc: sizeListProdRdc,
        //End. Products list
        ////////////////////////////////

        ////////////////////////////////
        //Start. Sort list
        sortSwitchArrRdc: sortSwitchArrRdc,
        //End. Sort list
        ////////////////////////////////
        
        ////////////////////////////////
        //Start. Product current
        prodCurrentRdc: prodCurrentRdc,
        //End. Product current
        ////////////////////////////////

        isAppInitRdc: isAppInitRdc,
        sessionSidRdc: sessionSidRdc,
        statusResponseRdc: statusResponseRdc,
        numColumProdRdc: numColumProdRdc,
    }
);

