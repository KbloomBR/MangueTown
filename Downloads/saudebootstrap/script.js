const calcular = document.getElementById("calcular");
const enviar = document.getElementById("enviar");
const dadosTexto = document.getElementById("dados-texto");
const dados = document.getElementById("dados");
const historicoLista = document.getElementById("historico");
const gerarPdf = document.getElementById("gerar-pdf");

document.getElementById("saude-form").addEventListener("submit", (event) => {
  event.preventDefault();
});

function validarCampos() {
  const calorias = document.getElementById("calorias").value;
  const sono = document.getElementById("sono").value;
  const exercicio = document.getElementById("exercicio").value;

  if (calorias <= 0 || sono <= 0 || exercicio <= 0) {
    alert("Por favor, insira valores positivos em todos os campos.");
    return false;
  }
  return true;
}

function salvarHistorico(dados) {
  const historico = JSON.parse(localStorage.getItem("historicoSaude")) || [];
  historico.push(dados);
  localStorage.setItem("historicoSaude", JSON.stringify(historico));
  renderizarHistorico();
}

function renderizarHistorico() {
  const historico = JSON.parse(localStorage.getItem("historicoSaude")) || [];
  historicoLista.innerHTML = "";

  historico.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = `Data: ${item.data}, Calorias: ${item.calorias}, Sono: ${item.sono}, Exercício: ${item.exercicio}, Objetivo: ${item.objetivo}`;
    historicoLista.appendChild(li);
  });
}

enviar.addEventListener("click", (event) => {
  event.preventDefault();

  if (!validarCampos()) {
    return;
  }

  const calorias = document.getElementById("calorias").value;
  const sono = document.getElementById("sono").value;
  const exercicio = document.getElementById("exercicio").value;
  const objetivo = document.getElementById("objetivo").value;

  const dadosInseridos = {
    data: new Date().toLocaleDateString(),
    calorias: calorias,
    sono: sono,
    exercicio: exercicio,
    objetivo: objetivo,
  };

  dadosTexto.value = `Calorias: ${calorias}, Sono: ${sono}, Exercício: ${exercicio}, Objetivo: ${objetivo}`;

  salvarHistorico(dadosInseridos);
  dados.innerHTML = "";
});

// Evento para calcular os resultados
calcular.addEventListener("click", (event) => {
  event.preventDefault();

  if (!validarCampos()) {
    return;
  }

  const calorias = document.getElementById("calorias").value;
  const sono = document.getElementById("sono").value;
  const exercicio = document.getElementById("exercicio").value;
  const objetivo = document.getElementById("objetivo").value;

  const resultado = [];

  if (objetivo === "perder peso") {
    if (calorias > 3000) {
      resultado.push("Você precisa comer menos para perder peso!");
    } else if (calorias < 600) {
      resultado.push("Você não precisa comer tão pouco assim, não é saudável!");
    }
    if (sono < 5) {
      resultado.push("Você precisa dormir mais!");
    }
    if (exercicio < 30) {
      resultado.push("Você precisa se exercitar mais para perder peso!");
    }
  } else if (objetivo === "ganhar peso") {
    if (calorias < 1000) {
      resultado.push("Você precisa comer mais para ganhar peso!");
    }
    if (sono < 5) {
      resultado.push("Você precisa dormir mais!");
    }
    if (exercicio < 30) {
      resultado.push("Você precisa se exercitar mais para ganhar peso!");
    }
  }

  dados.innerHTML = "";

  if (resultado.length === 0) {
    resultado.push("Parabéns! Você está indo bem com seus hábitos!");
  }

  resultado.forEach((item) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = item;
    dados.appendChild(li);
  });
});

gerarPdf.addEventListener("click", () => {
  const jsPDF = window.jspdf.jsPDF;
  const doc = new jsPDF();

  const historico = JSON.parse(localStorage.getItem("historicoSaude")) || [];

  let y = 10;
  doc.setFontSize(12);
  doc.text("Histórico de Monitoramento de Saúde", 10, y);
  y += 10;

  historico.forEach((item, index) => {
    doc.text(
      `Data: ${item.data}, Calorias: ${item.calorias}, Sono: ${item.sono}, Exercício: ${item.exercicio}, Objetivo: ${item.objetivo}`,
      10,
      y
    );
    y += 10;
  });

  doc.save("relatorio_saude.pdf");
});

window.onload = renderizarHistorico;
