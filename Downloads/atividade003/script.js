document.getElementById("gerarNumero").addEventListener("click", function() {
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = numeroAleatorio;
    const numerosGerados = document.getElementById("numerosGerados");
    numerosGerados.insertBefore(novoParagrafo, numerosGerados.firstChild);
});
