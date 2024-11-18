const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];
let currentQ=0;
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const button=document.querySelector('.submitB')
const selects=document.querySelectorAll('.answer')
function loadQuiz(){
    deselect();
let newQ=quizData[currentQ];
questionEl.innerText=newQ.question;
a_text.innerText=newQ.a;
b_text.innerText=newQ.b;
c_text.innerText=newQ.c;
d_text.innerText=newQ.d;


}
function deselect(){
selects.forEach((e)=>{
    e.checked=false;
})
}
function checkAnswer(){
    selects.forEach((e)=>{
        if(e.checked){
            if(e.id===quizData[currentQ].correct){
               alert('CORRECT')
currentQ++;
               return;
            }
            else{
                currentQ++;
               alert('WRONG')
               return;
            }
        }
        

    })
}
loadQuiz();
function submitaA(){
   
 
 if(currentQ<=quizData.length-1){
    checkAnswer();
    loadQuiz();
   
    console.log(currentQ);
console.log('continue');
}
 else{
    alert('END OF QUIZ')
    console.log('end');
    return;}



}
button.addEventListener('click',submitaA)