function timeToWalk(steps,footprintMe,speedKMH){
    let distanceMe = steps * footprintMe;
    let speedMeSe = speedKMH / 3.6;
    let timeSe = distanceMe / speedMeSe;
    let timeToRestMi = Math.floor(distanceMe / 500);
    let timeToRestSe = timeToRestMi * 60;
    let timeTotalSe = timeSe + timeToRestSe;
    let minutes = Math.floor(timeTotalSe/60);
    let hours = Math.floor(minutes/60);
    let seconds = Math.round(timeTotalSe - (minutes * 60));
    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`
    let minutesToPrint = minutes < 10 ? `0${minutes}` : `${minutes}`
    let secondsToPrint = seconds < 10 ? `0${seconds}` : `${seconds}`
    console.log(`${hoursToPrint}:${minutesToPrint}:${secondsToPrint}`)
}
timeToWalk(4000, 0.60, 5)