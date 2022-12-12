// var hasHighScores = JSON.parse(localStorage.getItem('highScores')) || [];
// var hasHighScores = [];
// var initials = document.querySelector('#initials');

// if (initials) {
//        var highScoreBoard = hasHighScores.map(object => {
//         return {...object, initials: scores};
//       });
//     console.log(highScoreBoard)
// }
// function handleSaveScore(event) {
//     console.log(event);
//     event.preventDefault();

//     var testScore = {
//         initials: 'TP',
//         score: 20,
//     }
//         hasHighScores.push(testScore);
//         localStorage.setItem('highScores', JSON.stringify(hasHighScores));
// }



// submitBtn.addEventListener('click', function(event) {
// event.preventDefault();
// // console.log(event);
// if (hasHighScores.length > 1) {
//     console.log(hasHighScores);
// } else {
//     console.log('no highscore');
// }
// }); 