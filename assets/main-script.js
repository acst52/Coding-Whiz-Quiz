// First lets get the quiz timer working:
var countDown = 60;
var x = setInterval(function() {
    countDown--;
    if (countDown < 0) {
        clearInterval(x);
        alert("Time's up!");
    } else {
        document.getElementById("timer").innerHTML = countDown;
    }
}, 1000);


// let's SELECT ELEMENTS WE NEED using the getElementById method:

// First we grab the start quiz button
let startButton = document.getElementById("start");

// Then lets grab the quiz div:
let questionsElement = document.getElementById("questions");

let questionIndex = 0;

let time = 60;

let timerID;

let timerElement = document.getElementById("timer");

let choicesElement = document.getElementById("choices");

let submitButton = document.getElementById("submit");

let initialsElement = document.getElementById("initials");


// Now let's create our questions inside an ARRAY
// inside array, answers stored as OBJECTS:

let questions = [ {
    question : "What does HTML stand for?",
    choices : ["Answer 1", "Answer 2", "Answer 3"],
    answer : "Answer 1"
},
{
    question : "Question 2",
    choices : ["Answer 1", "Answer 2", "Answer 3"],
    answer : "Answer 1"
} ];


// Next, create some functions:
    // 1. First the quiz needs to start when the button is pressed. 
        // Things we also want to happen when the quiz starts:
            // a. 60 second timer starts - have to set the interval it counts down from to 1s = 1000ms
            // b. timer to be shown to the user, probably with timerElement textContent = time
            // c. first question is displayed to user - display:none class needs to be removed
    // 2. Ok so once the quiz starts, we want each question to show after it's answered.
    // 3. We want to check their answers - if correct, next answer shows, if incorrect, -10sec on timer/score
        // - if there is no time left, end quiz immediately
    // 4. Then we want to end the quiz... and show the user their score = time left
        // - so we need to stop the timer, 
        // - hide / display:none everything on screen except for title and score. everything with class=hide
    // 5. Finally we want to store user's high score and show a list of highscores on the highscores.html page
        // - let initials = value that user inputted for initials, 
        // - then save score as an obj where score = time remaining + initials... then set the obj to local storage
        // - new js doc linked to highscores.html that pulls the info out of local storage & renders it on that page.






            // *** UNDER CONSTRUCTION ***

// let quizTime = 60;  // 10 seconds are supposed to be deducted for wrong answers...
// let count = 0; // where it starts

// function scoreRender(){
//     if(score <= quizTime){
//         counter.innerHTML = count;   
//         count++;
//     }else{
//         count -10; 
//         answerIsWrong();
//     // now we need to move to the next Q, but first, we have to make sure there are Q's left in the quiz!
//     if(runningQuestionIndex < lastQuestionIndex){
//         runningQuestionIndex++;  // if above if statement is true, and there are Q's left, then we move to next Q:
//         questionRender();
//     }else{
//         clearInterval(timer);  // if there are no q's left, then we clear the timer and show the user their score:
//         scoreRender();
//     }
//     }
// }


// Add event listener to listen for submit event
// document.querySelector('.answers').addEventListener('submit', function(e) {
//     e.preventDefault(); // Prevent default form submission
        
// Initialize score
// var score = 0;
        
// Check answers and update score
// if (document.querySelector('input[name="q1"]:checked').value === 'a') {
//     score++;
//     }
//     if (document.querySelector('input[name="q2"]:checked').value === 'a') {
//         score++;
//     }
        
// Show score to user
    // alert('Your score: ' + score);
    //  });


//   to get user's high score to display: 

  // Set the user's high score in local storage
// localStorage.setItem('highScore', 10000000000000000);

// Retrieve the user's high score from local storage
// var highScore = localStorage.getItem('highScore');

// Format the high score and display it on the page
// document.getElementById('highScore').innerHTML = "Your high score: " + highScore;