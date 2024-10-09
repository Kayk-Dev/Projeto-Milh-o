let faseAtual = 1;
const totalFases = 20;
const musicas = [
    'feitas/Cesar Menotti, Fabiano - Leilão.mp3',
    'feitas/João Bosco & Vinícius - Chora Me Liga (Ao Vivo).mp3',
    'feitas/XUXA- LUA DE CRISTAL (SOM DIGITAL).mp3',
    'feitas/Luan Santana - Cê Topa - (Novo DVD O Nosso Tempo é hoje).mp3',
    'feitas/Bruno & Marrone - Dormi na Praça (Ao Vivo).mp3',
    'feitas/Cassia Eller - Malandragem (Lyric).mp3',
    'feitas/Claudinho E Buchecha-Fico Assim Sem Voce.mp3',
    'feitas/Jorge e Mateus.mp3',
    'feitas/Legião Urbana · Eduardo e Mônica.mp3',
    'feitas/Los Hermanos - Anna Júlia (Video Clipe).mp3',
    'feitas/Pitty - Me Adora (Clipe Oficial).mp3',
    'feitas/Menina Veneno - ritchie.mp3',
    'feitas/Roupa Nova - Whisky a Go Go (Ao Vivo).mp3',
    'feitas/Sandy & Junior - A Lenda.mp3',
    'feitas/Mina do Condomínio - seu jorge.mp3',
    'feitas/Não Quero Dinheiro - tim maia.mp3',
    'feitas/Turma do Pagode - Lancinho (Letra).mp3',
    'feitas/Skank - É Uma Partida De Futebol.mp3',
    'feitas/Mamonas Assassinas - Pelados em Santos (Videoclipe).mp3',
    'feitas/Pescador de ilusões - o Rappa Letra.mp3'
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
