
/////////////////////////////
// Start. Section 'User authorization data'
//
// API_KEY_DEFAULT
//
// export const API_KEY_DEFAULT = "7408fbfbded5974d9b625d05237f6a6f";
// export const API_KEY_DEFAULT = "asdfsda";
//
// user login/password
export const LOGIN_DEFAULT = "dzhmaylo@gmail.com";

// let login: string = '';
let login: string = LOGIN_DEFAULT;
export const getLogin = (loginFromStore: string) => { login = loginFromStore };


export const PASSMD5_DEFAULT = "b4a62dea0279a07036a87e355af638b4";
// let login: string = '';
let passMD5: string = PASSMD5_DEFAULT;
export const getPassMD5 = (PassFromStore: string) => { passMD5 = PassFromStore };


export const USER_AUTH = 'login=' + login + '&password=' + passMD5;
//request header for authorization
export const REQUEST_HEADER_AUTH = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: USER_AUTH
};
//
// End. Section 'User authorization data'
/////////////////////////////


/////////////////////////////
// Start. Section 'Time Stamp'
//
// time life session - 5 min = 300000 ms
// export const SID_TIME_LIFE = 300000;
//
// End. Section 'Time Stamp'
/////////////////////////////