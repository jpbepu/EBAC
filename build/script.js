
//--------------------------Contador----------------------------


//divisoes para o getTime() em ms
const tFactor = {
    s: 1000,
    m: 60000,
    h: 3600000,
    d: 86400000,
    mt: 2592000000
}


const counter = setInterval(()=>{

    //data do evento
    const bday = new Date('dec 2, 2024 00:00:00').getTime();

    //data de agora
    const now = new Date().getTime();

    //tempo ate o evento
    const intervalo = bday - now;

    //calculo de unidades de tempo
    var dMonth = Math.floor(intervalo/tFactor.mt);
    var dDay = Math.floor((intervalo % tFactor.mt) / tFactor.d);
    var dHr = Math.floor((intervalo % tFactor.d) / tFactor.h);
    var dMin = Math.floor((intervalo % tFactor.h) /tFactor.m);
    var dSec = Math.floor((intervalo % tFactor.m) /tFactor.s);

    //injecao do contador no HTML
    document.querySelector('#counter').innerHTML = (`${dMonth} meses, ${dDay} dias, ${dHr}hrs, ${dMin}min, e ${dSec}s!`);

    //teste para ver se o evento ja passou
    if (intervalo < 0){
        clearInterval(counter);
    }

},1000)



//--------------------------FAQ---------------------------------

const faqItemList = document.querySelectorAll('.faq__item');


for (let i = 0; i < faqItemList.length; i++) {

    faqItemList[i].addEventListener('click', function(){
        faqItemList[i].classList.toggle("--is-active");
    });
}




