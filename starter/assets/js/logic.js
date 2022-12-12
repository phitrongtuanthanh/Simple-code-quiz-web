// Set global variance 
var questionHead = document.querySelector('h2');
var choicesEl = document.querySelector('#choices');
var highscoresDisplay = document.querySelector('.scores');
var startDisplay = document.querySelector('.start');
var questions = document.querySelector('#questions');
var startBtn = document.querySelector('.start');
var timerEl = document.querySelector('.timer');
var endScreen = document.querySelector('#end-screen');
var submitBtn = document.querySelector('#submit');
var questionNum = 0;
var scores = 0;
var finalScore = document.querySelector('#final-score');

// create question HTML

var choiceList = document.createElement('ol');
choiceList.className = 'choice-list';

var choiceOne = document.createElement('p');
choiceOne.className = 'choice-one';


var choiceTwo = document.createElement('p');
choiceTwo.className = 'choice-two';


var choiceThree = document.createElement('p');
choiceThree.className = 'choice-three';


var choiceFour = document.createElement('p');
choiceFour.className = 'choice-four';


// Time variable
var timeLeft = 0;
timerEl.textContent = 'time: ' + timeLeft;

//var for whether or not user got answer right
var correctAns = document.createElement('div');
correctAns.className = 'user-answer';
correctAns.textContent = 'Previous Question: CORRECT!';
var incorrectAns = document.createElement('div');
incorrectAns.className = 'user-answer';
incorrectAns.textContent = 'Previous Question: WRONG!';

//Create hidden elements and unhidden elements when click start

startBtn.addEventListener('click', function () {
    startDisplay.classList.add('hide');
    highscoresDisplay.classList.add('hide');
    questions.classList.remove('hide');
    timeLeft = 75;
    startQuiz();
});

//create timer when the start button hitted
var startQuiz = function () {
    timeInt = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'time: ' + timeLeft;
            timeLeft--;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInt);
            stopQuiz();
        }
    }, 1000
    );

    createQuestion();
}

//Emerge the question bank to the interface
var createQuestion = function () {

    choicesEl.addEventListener('click', newQuestion);
    questionHead.textContent = questionsList[questionNum].questionTitle;
    choicesEl.appendChild(choiceList);

    choiceOne.textContent = questionsList[questionNum].choices[0];
    choiceList.appendChild(choiceOne);

    choiceTwo.textContent = questionsList[questionNum].choices[1];
    choiceList.appendChild(choiceTwo);

    choiceThree.textContent = questionsList[questionNum].choices[2];
    choiceList.appendChild(choiceThree);

    choiceFour.textContent = questionsList[questionNum].choices[3];
    choiceList.appendChild(choiceFour);
};

var newQuestion = function (event) {
    correctAns.remove();
    incorrectAns.remove();

    var btnPressed = event.target;
    var chosenAnswer = questionsList[questionNum].answer;

    if (btnPressed.className === chosenAnswer && questionNum < questionsList.length - 1) {
        questionNum++;
        createQuestion();
        questions.appendChild(correctAns);
        scores++;
    } else if (btnPressed.className != chosenAnswer && questionNum < questionsList.length - 1) {
        timeLeft -= 15;
        questionNum++;
        createQuestion();
        questions.appendChild(incorrectAns);
        scores--;
    } else if (btnPressed.className === chosenAnswer) {
        stopQuiz();
        questions.appendChild(correctAns);
        scores++;
        return;
    } else {
        timeLeft -= 15;
        stopQuiz;
        questions.appendChild(incorrectAns);
        scores--;
        return;
    };

};

// //create highscore initial input
var userScore = document.createElement('input');


function stopQuiz() {
    clearInterval(timeInt);
    if (timeLeft > 0) {
        timerEl.textContent = 'Time: ' + timeLeft;
    } else {
        timeLeft = 0;
        timerEl.textContent = 'Time: ' + timeLeft;
    };
    endScreen.classList.remove('hide');
    questions.classList.add('hide');
    // finalScore.textContent = scores;

    finalScore.textContent = scores;
    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();
        event.view.location.href = './starter/highscores.html';
    });
};

var hasHighScores = [{
    initials: scores
}];
var initials = document.querySelector('#initials');


