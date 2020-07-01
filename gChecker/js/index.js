const form = document.querySelector(".form");
const oButton = form.querySelector(".oButton");
const xButton = form.querySelector(".xButton");
const q = document.querySelector("h2");
const title = document.querySelector("h1");
const final = document.querySelector("h3");
const comment = document.querySelector("p");
const wrong = document.querySelector(".wrong");
let currentNumber = 0;
const qList = [
    {question:'1. 찬물에 헹군 국수를 체에 받혀 놓았다.',answer: 2, section:'밭쳐'}, // 밭쳐
    {question:'2. 주인은 괜히 종업원을 닦달 하였다.',answer:1, section:'닦달'},
    {question:'3. 그는 장난을 치다가 결국 혼구멍이 났다.',answer:2, section:'혼꾸녕'}, // 혼꾸멍
    {question:'4. 학교 못 간 신입생은 동생과 치고박고 싸운다.',answer: 2, section:'치고받고'}, // 치고받고 
    {question:'5. 억울한 동생은 혼자 궁시렁 거린다.',answer:2, section:'구시렁'}, // 구시렁
    {question:'6. 학교를 못가더니 결국 사단이 났다.',answer:2, section:'사달'}, // 사달
    {question:'7. 말로써 천 냥 빛을 갚는다는 말이 있지.',answer: 1, section:'로써,로서'}, 
    {question:'8. 대학교 가면 연애 할 수 있다매!',answer:2, section:'다며'}, //
    {question:'9. 잘못은 네가 하고 되려 내게 화를 내면 어떡해?',answer:1, section:'되려'},
    {question:'10. 결국 나는 시험도 망치고 패가망신 하였다.',answer: 1, section:'패가망신'}, 
    {question:'11. 망친 시험지를 갈가리 찢어버렸다.',answer:1, section:'갈가리'},
    {question:'12. 전 학교를 가지 못 해서 미쳐버린 새내기예요.',answer:2, section:'에요'} //에요
];
let ansList = [1,1,2,1,1,2,1,1,2,1,1,2,1,1,2]; 
let userScore = 0;
let userAns = [];
let wrongAns = [];
function calc(){
    for(var i=0;i<12;i++){
        if(userAns[i] !== ansList[i]){
            var plusLi = document.createElement('li');
            plusLi.innerText = `${qList[i].section}`;
            wrong.appendChild(plusLi);
        }
    }
}

function done(){
    title.innerText = "분석결과";
    q.innerText = "";
    form.classList.add("showing");
    final.innerText = `슨배님 점수: ${userScore}점 입니다.`;
    if(userScore > 10){
        comment.innerText = `역시 우리선배님 뇌도 섹시하네?
        
        - 취약문법 -`;
        calc();
    }
    else {
        comment.innerText = `우리 선배님 멋지기만 하면 다야? 맞춤법 공부 쪼금만 하자?
        
        - 취약문법 -`;
        calc();
    }
}

function oButtonHandler(Event){ // 1
    if(currentNumber == 11){
        done();
        return 0;
    }
    userAns.push(1);
    if(qList[currentNumber].answer == ansList[currentNumber]){
        userScore++;
    }
    currentNumber++;
    q.innerHTML = qList[currentNumber].question;
}

function xButtonHandler(Event){ // 2
    if(currentNumber == 11){
        done();
        return 0;
    }
    userAns.push(2);
    if(qList[currentNumber].answer == ansList[currentNumber]){
        userScore++;
    }
    currentNumber++;
    q.innerHTML = qList[currentNumber].question;
}

function init(){
    q.innerHTML = qList[currentNumber].question;
    oButton.addEventListener("click",oButtonHandler);
    xButton.addEventListener("click",xButtonHandler);
};

init();