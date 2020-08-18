import React from 'react';
import { combineReducers } from "redux";

import isAppInitRdc from './isAppInitRdc';
import sessionSidRdc from './sessionSidRdc';
import statusResponseRdc from './statusResponseRdc';
import { NO_ERRORS } from './../constants/errorConst';
import { categoryListRdc, viewListCatRdc } from './categoryListRdc';
import { productsListRdc, sizeListProdRdc } from './productsListRdc';
import { numColumProdRdc } from './numColumProdRdc';
import { spinerToggleRdc, spinerVolumeRdc, spinerMaxRdc } from './spinerRdc';
import { sortListProdRdc, SORT_PRICE_ASCEND } from './sortListProdRdc';


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

    spinerVolumeRdc: {
        spinerVolume: 0
    },

    spinerMaxRdc: {
        spinerMax: 100
    },
    //End. Spiner
    ////////////////////////////////

    ////////////////////////////////
    //Start. Sort list
    sortListProdRdc: {
        sortListProd: SORT_PRICE_ASCEND
    }
    //End. Sort list
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

        ////////////////////////////////
        //Start. Products list
        productsListRdc: productsListRdc,
        sizeListProdRdc: sizeListProdRdc,
        //End. Products list
        ////////////////////////////////

        ////////////////////////////////
        //Start. Sort list
        sortListProdRdc: sortListProdRdc,
        //End. Sort list
        ////////////////////////////////

        isAppInitRdc: isAppInitRdc,
        sessionSidRdc: sessionSidRdc,
        statusResponseRdc: statusResponseRdc,
        numColumProdRdc: numColumProdRdc,
    }
);

