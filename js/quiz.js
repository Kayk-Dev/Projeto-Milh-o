let faseAtual = 1;
const totalFases = 26;
const musicas = [
    'music/fase1.mp3',
    'music/fase2.mp3',
    'music/fase3.mp3',
    'music/fase4.mp3',
    'music/fase5.mp3',
    'music/fase6.mp3',
    'music/fase7.mp3',
    'music/fase8.mp3'
];
const imagensCantores = [
    'img/cantor1.jpg',
    'img/cantor2.jpg',
    'img/cantor3.jpg',
    'img/cantor4.jpg',
    'img/cantor5.jpg',
    'img/cantor6.jpg',
    'img/cantor7.jpg',
    'img/cantor8.jpg'
];
const respostasCorretas = [2, 0, 3, 1, 2, 0, 3, 1];

function showAnswer() {
    const feedback = document.getElementById('feedback');
    const singerImg = document.getElementById('singer-img');
    
    feedback.innerText = 'Aqui está a resposta!';
    singerImg.src = imagensCantores[respostasCorretas[faseAtual - 1]];
    singerImg.style.display = 'block'; // Mostrar a imagem
    
    // Exibir botão para próxima fase
    document.getElementById('next-stage').style.display = 'block';
}

function nextStage() {
    faseAtual++;

    if (faseAtual > totalFases) {
        document.getElementById('completion-message').style.display = 'block';
    } else {
        document.getElementById('fase-atual').innerText = faseAtual;
        document.getElementById('audio-source').src = musicas[faseAtual - 1];
        document.getElementById('quiz-audio').load();
        document.getElementById('feedback').innerText = '';
        document.getElementById('singer-img').src = '';
        document.getElementById('singer-img').style.display = 'none'; // Ocultar imagem para nova fase
        document.getElementById('next-stage').style.display = 'none';
    }
}
