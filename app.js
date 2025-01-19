
// Lista przykładowych pytań i odpowiedzi
const words = [
    { question: 'Jak po hebrajsku powiedzieć "dom"?', answer: 'בית' },
    { question: 'Jak po hebrajsku powiedzieć "samochód"?', answer: 'מכונית' },
    { question: 'Jak po hebrajsku powiedzieć "książka"?', answer: 'ספר' },
    { question: 'Jak po hebrajsku powiedzieć "światło"?', answer: 'אור' },
    { question: 'Jak po hebrajsku powiedzieć "dziecko"?', answer: 'ילד' }
];

let currentQuestionIndex = null;

// Funkcja losowania pytania
function getRandomQuestionIndex() {
    return Math.floor(Math.random() * words.length);
}

// Funkcja wyświetlania losowego pytania
function showQuestion() {
    const questionElement = document.getElementById('question');
    const answerInput = document.getElementById('answer');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('nextButton');
    const checkButton = document.getElementById('checkButton');

    // Wyczyść poprzednie dane
    feedbackElement.textContent = '';
    answerInput.value = '';
    answerInput.disabled = false;
    checkButton.disabled = false;
    nextButton.style.display = 'none';

    // Losuj pytanie
    currentQuestionIndex = getRandomQuestionIndex();
    questionElement.textContent = words[currentQuestionIndex].question;
}

// Funkcja sprawdzania odpowiedzi
function checkAnswer() {
    const answerInput = document.getElementById('answer');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('nextButton');
    const checkButton = document.getElementById('checkButton');

    const userAnswer = answerInput.value.trim();
    const correctAnswer = words[currentQuestionIndex].answer.trim();

    // Informacja zwrotna o poprawności
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Dobrze!';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = `Źle! Prawidłowa odpowiedź to: ${correctAnswer}`;
        feedbackElement.style.color = 'red';
    }

    // Zablokuj edytowanie odpowiedzi i przycisk "Sprawdź"
    answerInput.disabled = true;
    checkButton.disabled = true;

    // Wyświetl przycisk "Dalej"
    nextButton.style.display = 'inline-block';
}

// Inicjalizacja aplikacji
document.addEventListener('DOMContentLoaded', showQuestion);
