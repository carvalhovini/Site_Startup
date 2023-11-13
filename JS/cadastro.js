document.getElementById('signup-form').addEventListener('submit', function (event) {
    const cpfInput = document.getElementById('cpf');
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpfInput.value)) {
        alert('Formato de CPF inválido. Por favor, insira um CPF válido.');
        event.preventDefault();
        return;
    }

    const crmInput = document.getElementById('crm');
    const crmRegex = /^\d{2}\.\d{3}\.\d{3}-\d{2}$/;
    if (!crmRegex.test(crmInput.value)) {
        alert('Formato de CRM inválido. Por favor, insira um CRM válido.');
        event.preventDefault();
        return;
    }

    // Adicione aqui o código para enviar os dados do formulário para o servidor e realizar o cadastro
    // ...

    // Após o cadastro bem-sucedido, redirecione para a página de login
    window.location.href = "/caminho/para/pagina-de-login.html";
});
