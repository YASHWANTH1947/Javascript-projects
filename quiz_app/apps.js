const quizData = [ { question: "What is the capital of France?",
     a: "Berlin",
      b: "Madrid",
       c: "Paris",
        d: "Lisbon", 
        correct: "c", }, 
        { question: "Who is the CEO of Tesla?", 
            a: "Jeff Bezos",
             b: "Elon Musk",
             c: "Bill Gates", 
             d: "Tony Stark",
              correct: "b", }];


let currentQ=0;
let score=0;

let questionT=document.querySelector('#question');
let answersT=document.querySelectorAll('.answer');
let qcontainer=document.querySelector('.container');
let aT=document.querySelector('#a_text')
let bT=document.querySelector('#b_text')
let cT=document.querySelector('#c_text')
let dT=document.querySelector('#d_text');
let sub=document.querySelector('.submitB');


loadQuiz();
function loadQuiz(){
    deselect();
    questionT.innerText=quizData[currentQ].question;
    aT.innerText=quizData[currentQ].a;
    bT.innerText=quizData[currentQ].b;
    cT.innerText=quizData[currentQ].c;
    dT.innerText=quizData[currentQ].d;
    
}
function getAnswer(){
    let rvalue;
    answersT.forEach((e)=>{
        if(e.checked){
            console.log(e.id);
            rvalue=e.id;
        }
    })
    return rvalue;
}

function deselect(){
    answersT.forEach((e)=>{
        e.checked=false;
    })
}

function AnswerSub(){
    console.log("answersub");
    let ans=getAnswer();
    console.log(ans);
    if(ans){
        console.log("ans if");
        if(ans==quizData[currentQ].correct){
           score++;
            console.log('correct');
        }
        else{
            console.log('wrong');
        }
    currentQ++;
    if(currentQ<quizData.length){
        loadQuiz();
    }
    else{
qcontainer.innerHTML=`<div class="final">Your total score is  ${score} </div>`;
sub.innerText="Reload";
sub.addEventListener('click',()=>{
    location.reload();
})

    }
    
}
}
sub.addEventListener('click',AnswerSub)
