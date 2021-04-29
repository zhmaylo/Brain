
/////////////////////////////
// Start. Section 'User authorization data'
//
// API_KEY
export const API_KEY_DEFAULT = "7408fbfbded5974d9b625d05237f6a6f";
//
// user login/password
export const LOGIN = "dzhmaylo@gmail.com";
export const PASSMD5 = "b4a62dea0279a07036a87e355af638b4";
export const USER_AUTH = 'login=' + LOGIN + '&password=' + PASSMD5;
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