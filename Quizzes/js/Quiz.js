document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var score = 0;
    var answers = ['O(n log n)', 'A linear data structure with Last In First Out (LIFO) order', 'To quickly retrieve data by a specific key'];

    for(var i = 1; i <= answers.length; i++) {
        var userAnswer = document.querySelector('input[name="q'+i+'"]:checked');
        if(userAnswer) {
            if(userAnswer.value === answers[i-1]) {
                score++;
            }
            else {
                userAnswer.parentElement.classList.add('incorrect-answer');
            }
        }
    }

    var result = document.getElementById('result');
    result.textContent = 'You scored ' + score + ' out of ' + answers.length;

    result.style.color = (score === answers.length) ? 'green' : 'red';

    var retryButton = document.getElementById('retry-button');
    retryButton.style.display = 'block';
});

document.getElementById('retry-button').addEventListener('click', function() {
    var result = document.getElementById('result');
    result.textContent = '';

    var retryButton = document.getElementById('retry-button');
    retryButton.style.display = 'none';

    var quizQuestions = document.querySelectorAll('.quiz-question');
    quizQuestions.forEach(function(question) {
        question.classList.remove('incorrect-answer');
    });

    var form = document.getElementById('quiz-form');
    form.reset();
});
