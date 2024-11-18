let newyear='1 jan 2025';
let d1=new Date(newyear)
console.log(d1);
let monthT=document.querySelector('#months>span');
let daysT=document.querySelector('#days>span');
let hoursT=document.querySelector('#hours>span');
let minT=document.querySelector('#min>span');
let secT=document.querySelector('#sec>span')
function  timer(){
    let d2=new Date()
    let diff=d1-d2;
    const totalSeconds = (d1 - d2) / 1000;
const months=Math.floor((totalSeconds % 31536000) / 2628000);
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(days,hours,mins,seconds);
    daysT.innerHTML=days;
    hoursT.innerHTML=hours;
    minT.innerHTML=mins;
    monthT.innerHTML=months;
    secT.innerHTML=seconds;
}

setInterval(timer,1000)