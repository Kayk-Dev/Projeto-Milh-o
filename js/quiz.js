let faseAtual = 1;
const totalFases = 20;
const musicas = [
    'music/Chitãozinho & Xororó - Evidências.mp3',
    'music/Cesar Menotti, Fabiano - Leilão.mp3',
    'music/João Bosco & Vinícius - Chora Me Liga (Ao Vivo).mp3',
    'music/XUXA- LUA DE CRISTAL (SOM DIGITAL).mp3',
    'music/Luan Santana - Cê Topa - (Novo DVD O Nosso Tempo é hoje).mp3',
    'music/Bruno & Marrone - Dormi na Praça (Ao Vivo).mp3',
    'music/Cassia Eller - Malandragem (Lyric).mp3',
    'music/Claudinho E Buchecha-Fico Assim Sem Voce.mp3',
    'music/Jorge & Mateus - Um Dia Te Levo Comigo - [DVD O Mundo é Tão Pequeno] - (Clipe Oficial).mp3',
    'music/Legião Urbana · Eduardo e Mônica.mp3',
    'music/Los Hermanos - Anna Júlia (Video Clipe).mp3',
    'music/Pitty - Me Adora (Clipe Oficial).mp3',
    'music/Menina Veneno - ritchie.mp3',
    'music/Roupa Nova - Whisky a Go Go (Ao Vivo).mp3',
    'music/Sandy & Junior - A Lenda.mp3',
    'music/Mina do Condomínio - seu jorge.mp3',
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
    'artistas/rappa.webp'
];
const respostasCorretas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

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
