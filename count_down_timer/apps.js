let newyear='1 jan 2025';
let d1=new Date(newyear)
console.log(d1);
let monthT=document.querySelector('#months');
let daysT=document.querySelector('#days');
let hoursT=document.querySelector('#hours');
let minT=document.querySelector('#min');
let secT=document.querySelector('#sec')
function  timer(){
    let d2=new Date()
    let diff=d1-d2;
    const totalSeconds = (d1 - d2) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days,hours,mins,seconds);
}

setInterval(timer,1000)