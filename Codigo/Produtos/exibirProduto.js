document.addEventListener("DOMContentLoaded", () => {
    // Verifica se há produtos no localStorage
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    if (produtos.length === 0) {
        alert("Nenhum produto encontrado.");
        return;
    }

    // Aqui você pode escolher qual produto mostrar. Vamos mostrar o primeiro produto
    const produto = produtos[0]; // Para exibir o primeiro produto (ou altere a lógica conforme necessário)

    // Preenche as informações
    document.getElementById('username').textContent = produto.nome;
    document.getElementById('description').textContent = produto.descricao;
    document.getElementById('image-upload').src = produto.imagem;  // A imagem é armazenada em Base64
});