let currentQuestionIndex = 0;

document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const questions = document.getElementsByClassName('question');
    let score = 0;
    const correctAnswers = ["c", "b", "a"]; // You can modify the correct answers here

    Array.from(questions).forEach((question, index) => {
        const questionNumber = index + 1;
        const selectedAnswer = document.querySelector(`input[name="q${questionNumber}"]:checked`);

        if (selectedAnswer && selectedAnswer.value === correctAnswers[index]) {
            score++;
        }
    });

    const totalQuestions = questions.length;
    const scorePercentage = (score / totalQuestions) * 100;

    const result = document.getElementById('result');
    result.style.display = 'block';
    result.textContent = `You scored ${score} out of ${totalQuestions}. Your percentage is ${scorePercentage.toFixed(2)}%.`;

    // Remove previous classes before adding new one
    result.classList.remove('success', 'fail');

    if (scorePercentage === 100) { // If the score is 100%, apply the 'success' class
        result.classList.add('success');
    } else if (scorePercentage >= 70) {
        result.classList.add('success');
    } else {
        result.classList.add('fail');
    }

    document.getElementById('restart-btn').style.display = 'block';
});


function nextQuestion() {
    if (currentQuestionIndex < 2) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    }
}



// Initial question display
showQuestion(currentQuestionIndex);

// New function to check the answer and apply styles

// New function to determine if a question has been answered
function isQuestionAnswered(index) {
    const question = document.getElementsByClassName('question')[index];
    const radios = question.getElementsByTagName('input');
    for (let radio of radios) {
        if (radio.checked) {
            return true;
        }
    }
    return false;
}

function showQuestion(index) {
    const questions = document.getElementsByClassName('question');
    for (let i = 0; i < questions.length; i++) {
        questions[i].style.display = 'none';
    }
    questions[index].style.display = 'block';
    updateNavigationButtons();
}

function restartQuiz() {
    document.getElementById('result').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('quiz-form').reset();
    const questions = document.getElementsByClassName('question');
    Array.from(questions).forEach(question => {
        const labels = question.getElementsByTagName('label');
        Array.from(labels).forEach(label => {
            label.style.color = '';
            const radios = label.getElementsByTagName('input');
            Array.from(radios).forEach(radio => {
                radio.disabled = false;
            });
        });
    });
    currentQuestionIndex = 0;
    showQuestion(currentQuestionIndex);
}

function checkAnswer(element, correctAnswer, questionId) {
    const parentQuestion = document.getElementById(questionId);
    const labels = parentQuestion.getElementsByTagName('label');
    for (let i = 0; i < labels.length; i++) {
        const radio = labels[i].getElementsByTagName('input')[0];
        radio.disabled = true;
        if (radio.value === correctAnswer) {
            labels[i].style.color = 'green';
        } else if (radio.checked) {
            labels[i].style.color = 'red';
        }
    }
}

function updateNavigationButtons() {
    document.getElementById('prev-btn').style.display = currentQuestionIndex === 0 ? 'none' : 'block';
    document.getElementById('next-btn').style.display = currentQuestionIndex === 2 ? 'none' : 'block';
    document.getElementById('submit-button').style.display = currentQuestionIndex === 2 ? 'block' : 'none';
}

document.getElementById('topicSelect').addEventListener('change', function (e) {
    const selectedTopic = e.target.value;
    const heading = document.querySelector('#quiz-form h2');

    switch (selectedTopic) {
        case 'all':
            heading.textContent = 'Data Structures Quiz';
            break;
        case 'Linked Lists':
            heading.textContent = 'Linked Lists Quiz';
            break;
        case 'Algorithms':
            heading.textContent = 'Algorithms Quiz';
            break;
        case 'Stacks & Queues':
            heading.textContent = 'Stacks & Queues Quiz';
            break;
        default:
            heading.textContent = 'Data Structures and Algorithms Quiz';
            break;
    }
});

