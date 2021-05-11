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
import { syncDataRdc } from './synDataRdc';
import { filterRdc } from './filterRdc';
import { progBarRdc } from './progBarRdc';
import { loginRdc } from './loginRdc';
import { searchRdc } from './searchRdc';


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
        productsList: Array(),
        prodListFiltered: Array()
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
        prodCurrentDescription: [],
        prodCurrentImages: [],
    },
    //End. Product current
    ////////////////////////////////

    ////////////////////////////////
    //Start. SyncData
    syncDataRdc: {
        syncDataCrudLog: [],
        syncDataAlertShow: false,
    },
    //End. SyncData
    ////////////////////////////////

    ////////////////////////////////
    //Start. Filter
    filterRdc: {
        minDealerPrice: 0,
        maxDealerPrice: 10000000,

        minShowLimit: 0,
        maxShowLimit: 10000000,
    },
    //End. Filter
    ////////////////////////////////

    ////////////////////////////////
    //Start. Progress Bar
    progBarRdc: {
        progBarMaxVol: 0,
        progBarCurVol: 0,
    },
    //End. Progress Bar
    ////////////////////////////////

    ////////////////////////////////
    //Start. Login
    loginRdc: {
        login: '',
        password: '',
        pass_md5: '',
        login_error: '',
    },
    //End. Login
    ////////////////////////////////

    ////////////////////////////////
    //Start. Search
    searchRdc: {
        search_request: '',
    },
    //End. Search
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

        ////////////////////////////////
        //Start. SyncData
        syncDataRdc: syncDataRdc,
        //End. SyncData
        ////////////////////////////////

        ////////////////////////////////
        //Start. Filter
        filterRdc: filterRdc,
        //End. Filter
        ////////////////////////////////

        ////////////////////////////////
        //Start. Progress Bar
        progBarRdc: progBarRdc,
        //End. Progress Bar
        ////////////////////////////////
       
        ////////////////////////////////
        //Start. Login
        loginRdc: loginRdc,
        //End. Login
        ////////////////////////////////

        ////////////////////////////////
        //Start. Search
        searchRdc: searchRdc,
        //End. Search
        ////////////////////////////////

        isAppInitRdc: isAppInitRdc,
        sessionSidRdc: sessionSidRdc,
        statusResponseRdc: statusResponseRdc,
        numColumProdRdc: numColumProdRdc,

    }
);

