document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        
        let isValid = true; // Flag para verificar se o formulário é válido

        // Validação do usuário (apenas letras, números e espaços)
        if (!/^[a-zA-Z0-9\s]+$/.test(username)) {
            alert("Por favor, insira apenas letras e números no campo Usuário.");
            isValid = false;
        }

        // Validação do email (formato de email)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Por favor, insira um email válido.");
            isValid = false;
        }

        // Validação do celular (formato brasileiro)
        const phonePattern = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;
        if (!phonePattern.test(phone)) {
            alert("Por favor, insira um celular no formato (xx) xxxxx-xxxx.");
            isValid = false;
        }

        // Validação da senha (mínimo 6 caracteres)
        if (password.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Evita o envio do formulário
        } else {
            // Se tudo estiver correto, redirecione para outra página
            window.location.href = "index.html";
            event.preventDefault(); // Impede o envio do formulário real, se necessário
        }
    });
});
