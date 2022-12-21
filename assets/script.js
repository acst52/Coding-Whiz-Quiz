// 1. Select elements we need & define as variables using getElementById method

// First grab the start quiz button:
let startButton = document.getElementById("start");

// Then grab the quiz div ... etc
let questionsElement = document.getElementById("questions");

let questionIndex = 0;

let time = 60;

let timerID;

let initials;

let finalScoreData;

let timerElement = document.getElementById("timer");

let choicesElement = document.getElementById("choices");

let endScreenElement = document.getElementById("endScreen");

let finalScoreElement = document.getElementById("finalScore");

let initialsElement = document.querySelector("#initials");

let submitButton = document.querySelector("#submit");


// 2. Create questions inside an array. Answers stored as obj inside arr.

let questions = [ {
    question : "What does HTML stand for?", 
    choices : ["Answer 1", "Answer 2", "Answer 3"],
    answer : "Answer 1"
},
{
    question : "Question 3",
    choices : ["Answer 4", "Answer 5", "Answer 6"],
    answer : "Answer 5"
},
{
    question : "Question 4",
    choices : ["Answer 7", "Answer 8", "Answer 9"],
    answer : "Answer 9"
},
{
    question : "Question 5",
    choices : ["Answer 10", "Answer 11", "Answer 12"],
    answer : "Answer 11"
},
{
    question : "Question 6",
    choices : ["Answer 13", "Answer 14", "Answer 15"],
    answer : "Answer 14"
} ];

// 3. click event, startQuiz fcn

function startQuiz(){
let startScreenElement = document.querySelector("#startScreen");
startScreenElement.setAttribute("class", "hide");  // once start button is clicked, div class="hide" so its hidden
questionsElement.removeAttribute("class");  // then the questions class="hide" is removed so its shown to user
timerID = setInterval(countdown, 1000);  // timer set to go by 1s and countdown fcn called
timerElement.textContent = time;  // show time to user
renderQuestion();  // calls fcn below to start showing questions
}
startButton.addEventListener("click", startQuiz);
// this fcn tells timer to count down & end quiz if the timer reaches 0
function countdown(){
    time--;
    timerElement.textContent = time;
    if(time <= 0){
        endQuiz();
    }
}

// this fcn renders the questions
function renderQuestion(){
    let q = questions[questionIndex];  // so we dont need to retype it
    let titleElement = document.getElementById("questionTitle");
    titleElement.textContent = q.question;
    choicesElement.innerHTML = "";  // clears out prev Q's choices before rendering new Q's choices
    for(var i=0; i < q.choices.length; i++){
        let choice = q.choices[i];
        let choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = i+1+". "+choice;  // text content of ans.
        choicesElement.appendChild(choiceButton);  // appending these buttons to choices div in html - renders Q
    }
}

function questionClick(event){
    let buttonElement = event.target;  // making the button element whatever the user clicks on
    if(!buttonElement.matches(".choice")){
        return;   // if they dont click a choice button, end fcn
    }
    if(buttonElement.value !== questions[questionIndex].answer){
        time -= 10;
        if(time < 0){
            time = 0;
        }
        timerElement.textContent = time;
    }else{
        buttonElement.setAttribute("id", "right")
    }
    questionIndex++;  // next question
    if(time <= 0 || questionIndex === questions.length){
        endQuiz();
    }else{
        renderQuestion();
    }
}

choicesElement.addEventListener("click", questionClick);

function endQuiz(){
    // first clear interval to stop timer
    clearTimeout(timerID);
    // hide the questions element
    questionsElement.setAttribute("class", "hide")
    // remove class from endScreen element to display it
    endScreenElement.removeAttribute("class");
    // let the finalScore var = time (moved to top so I can use in highScore fcn) and have it show on the page
    finalScoreElement.textContent = time;
}

function highscoreStore(){
    initials = initialsElement.value;
    console.log(initials);
if (initials !== ''){
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    finalScoreData = {
        finalScore : time,
        initials : initials
    };
    highscores.push(finalScoreData);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href="highscores.html";
}};

submitButton.addEventListener('submit', highscoreStore)


    // honey:core-sdk:*   ... askBCS about local storage issue 