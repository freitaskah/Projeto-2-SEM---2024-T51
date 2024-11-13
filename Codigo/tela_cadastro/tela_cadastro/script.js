// Seleciona o contêiner da imagem e o input de upload
const imageContainer = document.getElementById('image-container');
const imageUpload = document.getElementById('image-upload');
const imagePreview = document.getElementById('image-preview');
const ocultarDiv = document.querySelector('.ocultar'); // Seleciona a div "ocultar"

// Adiciona um evento de clique ao contêiner da imagem
imageContainer.addEventListener('click', () => {
    imageUpload.click(); // Simula o clique no input de arquivo
});

// Adiciona um evento para quando uma imagem é selecionada
imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Pega o primeiro arquivo selecionado
    if (file) {
        const reader = new FileReader(); // Cria um FileReader para ler o arquivo
        reader.onload = () => {
            imagePreview.src = reader.result; // Define a imagem de pré-visualização
            imagePreview.style.display = 'block'; // Mostra a imagem
            
            // Esconde a div "ocultar" e mostra a imagem
            ocultarDiv.style.display = 'none'; // Esconde a div "ocultar"
        };
        reader.readAsDataURL(file); // Lê o arquivo como URL de dados
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');

    setTimeout(() => {
        splashScreen.style.opacity = '0'; // Inicia a transição de opacidade
        setTimeout(() => {
            splashScreen.style.display = 'none'; // Esconde a tela de splash
        }, 500); // Espera a transição de opacidade terminar
    }, 2000); // Duração da tela de splash (2000 ms = 2 segundos)
});


