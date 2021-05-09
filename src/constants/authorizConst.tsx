
/////////////////////////////
// Start. Section 'User authorization data'
//
// 
// 
// user login/password
export const LOGIN_DEFAULT = "dzhmaylo@gmail.com";
let login: string = LOGIN_DEFAULT;
export const setLogin = (loginFromStore: string) => {
    login = loginFromStore;
};

export const PASS_MD5_DEFAULT = "b4a62dea0279a07036a87e355af638b4";
let passMD5: string = PASS_MD5_DEFAULT;
export const setPassMD5 = (PassFromStore: string) => { passMD5 = PassFromStore };

export const USER_AUTH = () => 'login=' + login + '&password=' + passMD5;

//request header for authorization
export const REQUEST_HEADER_AUTH = () => [{
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: USER_AUTH()
}];
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