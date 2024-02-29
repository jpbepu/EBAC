

const tFactor = {
    s: 1000,
    m: 60000,
    h: 3600000,
    d: 86400000,
    mt: 2592000000
}



const counter = setInterval(()=>{

    const bday = new Date('dec 1, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const intervalo = bday - now;

    var dMonth = Math.floor(intervalo/tFactor.mt);
    var dDay = Math.floor((intervalo % tFactor.mt) / tFactor.d);
    var dHr = Math.floor((intervalo % tFactor.d) / tFactor.h);
    var dMin = Math.floor((intervalo % tFactor.h) /tFactor.m);
    var dSec = Math.floor((intervalo % tFactor.m) /tFactor.s);


    document.querySelector('#counter').innerHTML = (`${dMonth}M, ${dDay}d, ${dHr}hrs, ${dMin}min, ${dSec}s !`);

},1000)

//data do evento







// divisores de tempo em ms















