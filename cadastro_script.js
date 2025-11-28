function validarCadastro(event) {
    if (event && typeof event.preventDefault === "function") {
        event.preventDefault();
    }

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const senha = document.getElementById("senha").value.trim();

    const campos = [
        { value: nome, id: "nome", label: "Nome" },
        { value: email, id: "email", label: "E-mail" },
        { value: telefone, id: "telefone", label: "Telefone" },
        { value: cidade, id: "cidade", label: "Cidade" },
        { value: senha, id: "senha", label: "Senha" }
    ];

    const primeiroVazio = campos.find(c => c.value === "");

    if (primeiroVazio) {
        alert("Por favor, preencha o campo: " + primeiroVazio.label);
        const el = document.getElementById(primeiroVazio.id);
        if (el) el.focus();
        return false; 
    }

    alert("Cadastro realizado com sucesso! Bem-vindo(a), " + nome + "!");
    return true;
}