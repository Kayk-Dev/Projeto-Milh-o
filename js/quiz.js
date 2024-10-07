let faseAtual = 1;
const totalFases = 20;
const musicas = [
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/',
    'music/'
];
const imagensCantores = [
    'artistas/Chitaozinho-xororo.jpg',
    'artistas/César_Menotti_&_Fabiano_2004.jpg',
    'artistas/João_Bosco_&_Vinícius_2011.jpg',
    'artistas/Xuxa1.jpg',
    'artistas/luan_santana.webp',
    'artistas/bruno_e_marrone.jpg',
    'artistas/cassia-eller-malandragem.jpg',
    'artistas/claudinho_bochecha.jpg',
    'artistas/jorge_mateus.jpg',
    'artistas/legiao_urbana.jpg',
    'artistas/los_hermanos.jpg',
    'artistas/pitty.jpg',
    'artistas/ritchie.jpg',
    'artistas/roupanovaep.jpg',
    'artistas/sandy_junior.jpg',
    'artistas/seu_jorge.jpg',
    'artistas/tim_maia.jpg',
    'artistas/turma_pagode.jpg',
    'artistas/skank.webp',
    'artistas/mamonas.webp',
];
const respostasCorretas = [2, 0, 3, 1, 2, 0, 3, 1, 2, 0, 3, 1, 2, 0, 3, 1, 3, 1];

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
