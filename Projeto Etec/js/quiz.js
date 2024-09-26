const quizData = [
    {
        audio: 'music/fase1.mp3',
        correctAnswer: 2, // Cantor 3 é a resposta correta para a fase 1
        image: 'img/cantor3.jpg'
    },
    {
        audio: 'music/fase2.mp3',
        correctAnswer: 0, // Cantor 1 é a resposta correta para a fase 2
        image: 'img/cantor1.jpg'
    },
    {
        audio: 'music/fase3.mp3',
        correctAnswer: 3, // Cantor 4 é a resposta correta para a fase 3
        image: 'img/cantor4.jpg'
    },
    {
        audio: 'music/fase4.mp3',
        correctAnswer: 1, // Cantor 2 é a resposta correta para a fase 4
        image: 'img/cantor2.jpg'
    },
    {
        audio: 'music/fase5.mp3',
        correctAnswer: 2, // Cantor 3 é a resposta correta para a fase 5
        image: 'img/cantor3.jpg'
    },
    {
        audio: 'music/fase6.mp3',
        correctAnswer: 1, // Cantor 2 é a resposta correta para a fase 6
        image: 'img/cantor2.jpg'
    },
    {
        audio: 'music/fase7.mp3',
        correctAnswer: 0, // Cantor 1 é a resposta correta para a fase 7
        image: 'img/cantor1.jpg'
    },
    {
        audio: 'music/fase8.mp3',
        correctAnswer: 3, // Cantor 4 é a resposta correta para a fase 8
        image: 'img/cantor4.jpg'
    }
];

let currentStage = 0;

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentStage].correctAnswer;
    const feedback = document.getElementById('feedback');
    const nextStage = document.getElementById('next-stage');
    const singerImg = document.getElementById('singer-img');

    if (selectedOption === correctAnswer) {
        feedback.textContent = 'Você acertou!';
        feedback.style.color = '#007BB5';
        singerImg.src = quizData[currentStage].image;
        nextStage.style.display = 'block';
    } else {
        feedback.textContent = 'Resposta errada. Tente novamente.';
        feedback.style.color = '#FF1744';
        nextStage.style.display = 'none';
    }
}

function nextStage() {
    currentStage++;
    if (currentStage < quizData.length) {
        // Atualiza o áudio e reseta o quiz para a próxima fase
        const audioElement = document.getElementById('quiz-audio');
        const audioSource = document.getElementById('audio-source');
        audioSource.src = quizData[currentStage].audio;
        audioElement.load();

        // Reseta feedback e esconde o botão de próxima fase
        document.getElementById('feedback').textContent = '';
        document.getElementById('next-stage').style.display = 'none';
    } else {
        alert('Parabéns! Você completou o quiz.');
    }
}
