// Set global variance 


// Set variance


//Create hidden elements and unhidden elements when click start
var highscoresDisplay = document.querySelector('.scores');
var wrapperDisplay = document. querySelector('.wrapper');
var hiddenElement = [highscoresDisplay, wrapperDisplay];

var questions = document.querySelector('#questions');
var startBtn = document. querySelector('.start');

console.log(questions);
startBtn.addEventListener('click', function(){
    for (var el of hiddenElement) {
        el.classList.add('hide');
    };
    questions.classList.remove('hide');
    
});



