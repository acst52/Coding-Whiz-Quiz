
// to show all inputted initials + their quiz scores in descending order on the HS page...:

function printHighscores(){
    let storedScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    storedScores.sort(function(a, b){
        return b.score - a.score;
    })
    for (let i = 0; i < storedScores.length; i++) {
        let li = document.createElement("li");
        li.textContent = storedScores[i].initials + " - " + storedScores[i].finalScore;
        let ol = document.getElementById("scoreList");
        ol.appendChild(li);
        }
}

printHighscores();

