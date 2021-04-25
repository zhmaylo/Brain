
// getProgBar - return statistics string
// logFromState - log from state
// logToBeAdded - log to be added to the site
export const getProgBar = (curVol, maxVol) => {
    let percent=100;
    if (maxVol!=0) percent = curVol/maxVol*100;
    
    let barString=curVol+'/'+ maxVol + ' | '+ percent.toFixed(0) + '%';
    return barString;

};

