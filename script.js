const quizData=[
{
    question:"The information to be communicated in a data communications system is the?",
    options:["Medium ","Protocol","Message","Transmission"],
    answre:2,
},
{
    question:"There are----------- Internet service providers? ",
    options:["local ","regional ","national and international","all of the above"],
    answre:3,
},
{
    question:"What is the default mask for class A in CIDR notation? ",
    options:["/9 ","/8","16 ","none of the above"],
    answre:1,
},
{
    question:"What is the result of ANDing 254 and 152?",
    options:["254","14","152","15"],
    answre:2
},

{
    question:"The---------- created a model called the Open Systeras Interconnection, which allows diverse systems to communicate.",
    options:["OSI","ISO","IEEE","none of the above"],
    answre:1
},
{
    question:"The------------ layer links the network support layers and the user support layers.",
    options:["transport","network","data link","sessione"],
    answre:0
},
{
    question:"Identity the class of the following IPv4 address: 229.1.2.3",
    options:["A","B","D","none of the above"],
    answre:3
},
{
    question:"An IPv6 address can have up to---------------- hexadecimal digits",
    options:["16","32","8","none of the above"],
    answre:1
},
{
    question:"IPv6 has-------------- bit addresses. ",
    options:["64","32","128","variable"],
    answre:2
},
{
    question:"In the OSI model, encryption and decryption are functions of the -----------layer.",
    options:["transport",". transport","presentation"," application"],
    answre:2
},
{
    question:"The layer------------- adds a header to the packet comilg from the upper layer that includes the logical addresses of the sender and receiver.",
    options:["physical"," data link","network","none of the above"],
    answre:2
},
{
    question:"An organization is granted a block of classless addresses with thestarting address 199.34.32.0/27. How many addresses are granted?",
    options:["8","16","32","none of the above"],
    answre:0
},
{
    question:"An orgaaization is granted a block of classless addresses with the starting address 199.34.76.64/28. How many addresses are granted?",
    options:["16","32","8","none of the above"],
    answre:0
},
];
const questionElement=document.querySelector(".question");
const optionElement=document.querySelectorAll(".options .option");
const scoreElement=document.querySelector("#score");

let questionIndix=0;
let score=0;


function setQuestion(){
    const crerentQuestion=quizData[questionIndix];
    questionElement.innerHTML=crerentQuestion.question
    optionElement.forEach((optionElement,index)=>{
        optionElement.innerHTML=crerentQuestion.options[index]
    });
}
function checkAnswer(optionIndex){
    const crerentQuestion=quizData[questionIndix];
    if(optionIndex===crerentQuestion.answre)
    {
        score++
    }
    questionIndix++
    
    if(questionIndix<quizData.length){
        setQuestion()
    }
    else{
        showResults()
    }
}
function  showResults(){
    questionElement.style.display="none"
    optionElement.forEach((optionElement)=>{
    optionElement.style.display="none"
    });
    scoreElement.innerHTML=`You scored ${score} out of ${quizData.length}`;
    scoreElement.style.display="block"
}
optionElement.forEach((optionElement,index)=>{
    optionElement.addEventListener("click",()=>{
        checkAnswer(index)
    })
})
setQuestion();


