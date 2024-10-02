const button1 = document.getElementById("botao1");
const button2 = document.getElementById("botao2");
const button3 = document.getElementById("botao3");
const button4 = document.getElementById("botao4");
const message = document.getElementById("mensagem");

button1.addEventListener("click", () => {
 message.innerHTML = "Você clicou no botão 1";
});

button2.addEventListener("click", () => {
 message.innerHTML = "Você clicou no botão 2";
});

button3.addEventListener("click", () => {
 message.innerHTML = "Você clicou no botão 3";
});

button4.addEventListener("click", () => {
 message.innerHTML = "Você clicou no botão 4";
});