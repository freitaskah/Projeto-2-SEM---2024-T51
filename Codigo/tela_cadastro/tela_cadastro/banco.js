document.addEventListener("DOMContentLoaded", () => {
    // Inicializa localStorage com um array vazio se não houver produtos
    if (!localStorage.getItem('produtos')) {
        localStorage.setItem('produtos', JSON.stringify([]));
    }

    // Função para criar produto
    document.getElementById('create').addEventListener('click', function (e) {
        e.preventDefault();
        const nome = document.getElementById('username').value;
        const descricao = document.getElementById('description').value;
        const imagem = document.getElementById('image-upload').files[0];

        if (!nome || !descricao || !imagem) {
            alert("Preencha todos os campos");
            return;
        }

        const reader = new FileReader();
        reader.onload = function (event) {
            const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
            const novoProduto = {
                id: new Date().getTime(),
                nome: nome,
                descricao: descricao,
                imagem: event.target.result // Salva a imagem como string Base64
            };
            produtos.push(novoProduto);
            localStorage.setItem('produtos', JSON.stringify(produtos));
            alert("Produto criado com sucesso!");
            limparCampos();
            listarProdutos();
        };
        reader.readAsDataURL(imagem); // Converte a imagem para Base64
    });

    // Função para listar produtos
    function listarProdutos() {
        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        console.log('Produtos cadastrados:', produtos); // Ou mostre em algum lugar no HTML
    }

    // Função para atualizar produto
    document.getElementById('update').addEventListener('click', function (e) {
        e.preventDefault();
        const id = prompt("Insira o ID do produto que deseja atualizar:");
        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        const produto = produtos.find(p => p.id == id);

        if (produto) {
            const novoNome = prompt("Novo nome:", produto.nome);
            const novaDescricao = prompt("Nova descrição:", produto.descricao);

            produto.nome = novoNome || produto.nome;
            produto.descricao = novaDescricao || produto.descricao;
            localStorage.setItem('produtos', JSON.stringify(produtos));
            alert("Produto atualizado com sucesso!");
            listarProdutos();
        } else {
            alert("Produto não encontrado!");
        }
    });

    // Função para excluir produto
    document.getElementById('delete').addEventListener('click', function (e) {
        e.preventDefault();
        const id = prompt("Insira o ID do produto que deseja excluir:");
        let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        produtos = produtos.filter(p => p.id != id);
        localStorage.setItem('produtos', JSON.stringify(produtos));
        alert("Produto excluído com sucesso!");
        listarProdutos();
    });

    // Função para limpar os campos do formulário
    function limparCampos() {
        document.getElementById('username').value = '';
        document.getElementById('description').value = '';
        document.getElementById('image-upload').value = '';
        document.getElementById('image-preview').style.display = 'none';
    }

    // Listar produtos ao carregar a página
    listarProdutos();
});
