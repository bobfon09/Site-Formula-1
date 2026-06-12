
const botaoTema = document.getElementById('botao-tema');


botaoTema.addEventListener('click', (event) => {
    
    event.preventDefault();

    
    document.body.classList.toggle('dark-mode');
    
 
    if (document.body.classList.contains('dark-mode')) {
        botaoTema.innerHTML = '☀️ Modo Claro';
    } else {
        botaoTema.innerHTML = '🌙 Modo Escuro';
    }
});



const formulario = document.getElementById('form-feedback');

if (formulario) {
    formulario.addEventListener('submit', function(event) {
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        
        let formularioValido = true;
        let mensagensErro = [];

        if (nome.length < 3) {
            formularioValido = false;
            mensagensErro.push("Por favor, insira um nome válido (mínimo 3 caracteres).");
        }

        if (!email.includes('@') || !email.includes('.')) {
            formularioValido = false;
            mensagensErro.push("Por favor, insira um endereço de e-mail válido.");
        }

        if (mensagem.length < 10) {
            formularioValido = false;
            mensagensErro.push("Sua mensagem está muito curta! Escreva pelo menos 10 caracteres.");
        }

        if (!formularioValido) {
            event.preventDefault(); // Impede o envio se houver erro
            alert("⚠️ Erro no envio:\n\n" + mensagensErro.join("\n"));
        } else {
            event.preventDefault(); // Impede recarregar na simulação acadêmica
            alert(` Sucesso! Obrigado pelo feedback, ${nome}. Sua mensagem foi enviada.`);
            formulario.reset(); 
        }
    });
}