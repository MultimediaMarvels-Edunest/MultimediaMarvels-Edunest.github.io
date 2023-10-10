document.addEventListener('DOMContentLoaded', function() {
    var currentQuestion = 0;
    var quizQuestions = document.querySelectorAll('.quiz-question');
    var prevButton = document.getElementById('prev-button');
    var nextButton = document.getElementById('next-button');
    var submitButton = document.querySelector('#quiz-form input[type="submit"]');

    function showQuestion(index) {
        quizQuestions.forEach(function(question, i) {
            if (i === index) {
                question.style.display = 'block';
            } else {
                question.style.display = 'none';
            }
        });

        if (index === 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }

        if (index === quizQuestions.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'block';
        } else {
            nextButton.style.display = 'block';
            submitButton.style.display = 'none';
        }
    }

    showQuestion(currentQuestion);

    prevButton.addEventListener('click', function() {
        currentQuestion--;
        showQuestion(currentQuestion);
    });

    nextButton.addEventListener('click', function() {
        currentQuestion++;
        showQuestion(currentQuestion);
    });
});

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
                var feedback = userAnswer.parentElement.querySelector('.incorrect-feedback');
                feedback.textContent = 'Incorrect';
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
        var feedback = question.querySelector('.incorrect-feedback');
        feedback.textContent = '';
    });

    var form = document.getElementById('quiz-form');
    form.reset();

    currentQuestion = 0;
    showQuestion(currentQuestion);
});
window.onload = () => {
    document.getElementsByClassName("auth-nav")[0].style.display = "none";
};