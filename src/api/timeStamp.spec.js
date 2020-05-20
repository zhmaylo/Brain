import { setTimeStampToSid } from './timeStamp';

test('"setTimeStampToSid" set current time in ms. => ', () => {
    let sidAndTime = { sid: "11helsfokhm2d475ennf4em1p1", timeStamp: null };
    const data = setTimeStampToSid(sidAndTime);
    // console.log("Test getCategoryList. dipatch data", data);
    expect(data.timeStamp).toBeGreaterThan(1234567890123);
});

// test('"updateTimeStampToSid" - update time stamp to sid - complete. => ', () => {
//     let currTime = new Date().getTime();
//     let sidAndTime = {sid: "11helsfokhm2d475ennf4em1p1", timeStamp: currTime };

//     const dispatch = (data) => {
//         // console.log("Test dispatch callback. data", data);
//         expect(data.type).toMatch('SESSION_SID');
//         return;
//     };    
//     const data = updateTimeStampToSid (sidAndTime, dispatch);
//     // console.log("Test complete getCategoryList. data", data);
//     expect(data.timeStamp).toBeGreaterThan(1234567890123);
// });

// test('"updateTimeStampToSid" - update time stamp to sid - error. => ', () => {
//     let sidAndTime = {sid: "11helsfokhm2d475ennf4em1p1", timeStamp: 12345678901 };
//     const data = updateTimeStampToSid (sidAndTime, null);
//     // console.log("Test error updateTimeStampToSid. data", data);
//     expect(data).toBe(false);
// });

