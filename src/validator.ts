function validarChamado(titulo: string): boolean {
    if (!titulo) {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    if (titulo.length < 5) {
        throw new Error("O título do chamado deve ter pelo menos 5 caracteres.");
    }

    if (titulo.length > 100) {
        throw new Error("O título do chamado não pode ter mais de 100 caracteres.");
    }

    return true;
}

export default validarChamado;

console.log(validarChamado("teste"));
