let indiceAtual = 0;

function atualizarCarrossel() {
    const imagens = document.querySelectorAll('.box-produtos img');
    const totalImagens = imagens.length;

    // Altera a transformação do carrossel para mostrar a imagem atual
    const boxProdutos = document.querySelector('.box-produtos');
    const larguraImagem = imagens[0].clientWidth; // Obtém a largura da primeira imagem
    const deslocamento = -indiceAtual * larguraImagem; // Move o carrossel
    boxProdutos.style.transform = `translateX(${deslocamento}px)`; // Muda para pixels
}

function moverParaDireita() {
    const imagens = document.querySelectorAll('.box-produtos img');
    // Aumenta o índice; se chegar ao final, volta para 0
    indiceAtual = (indiceAtual + 1) % imagens.length; 
    atualizarCarrossel();
}

function moverParaEsquerda() {
    const imagens = document.querySelectorAll('.box-produtos img');
    // Diminui o índice; se for menor que 0, vai para o último
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length; 
    atualizarCarrossel();
}

// Iniciar o carrossel com a primeira imagem
atualizarCarrossel();
