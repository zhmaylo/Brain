import { URL_GET_CATEGORY } from './../constants/index';

export const API_key = "7408fbfbded5974d9b625d05237f6a6f";
const log = "dzhmaylo@gmail.com";
const pas = "b4a62dea0279a07036a87e355af638b4";

let user = 'login='+ log + '&password=' + pas;

const URL_GET_AUTH = 'https://api.brain.com.ua/auth';
//for PC Chrome
const proxyurl = "https://cors-anywhere.herokuapp.com/";
//for smart/anbdroid
// const proxyurl = "";

export async function fetchData() {
    const requestInit = {
        method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        }, 
        body: user
    };
    console.log('requestInit',requestInit);
    return (await fetch(proxyurl + URL_GET_AUTH, requestInit)
        .then(response => response.text(),
            error => console.log('An error occurred.', error))
        .then(text => {
            console.log("URL_GET_AUTH", text)
            return text;
        }))
}

