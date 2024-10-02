const countButton = document.getElementById("botaoContar");
const resetButton = document.getElementById("botaoResetar");
const clickCount = document.getElementById("numeroClique");
let clicks = 0;

countButton.addEventListener("click", () => {
 clicks++;
 clickCount.innerHTML = `Você clicou ${clicks} vezes`;
});

resetButton.addEventListener("click", () => {
 clicks = 0;
 clickCount.innerHTML = `Você clicou ${clicks} vezes`;
});