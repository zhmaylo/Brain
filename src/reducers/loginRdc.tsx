import { LOGIN, LOGIN_ERROR, PASSWORD, PASS_MD5 } from "../constants/actionConst";

// Login reducers
//
export const loginRdc = (state = [], action: any) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                login: action.payload // string
            };
        case PASSWORD:
            return {
                ...state,
                password: action.payload // string
            };
        case PASS_MD5:
            return {
                ...state,
                pass_md5: action.payload // string
            };
        case LOGIN_ERROR:
            return {
                ...state,
                login_error: action.payload // any
            };
        default:
            return state;
    }
}


