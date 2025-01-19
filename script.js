function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = "cześć"; // Prawidłowa odpowiedź

    const feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Dobrze!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Źle, spróbuj ponownie.";
        feedback.style.color = "red";
    }
}
