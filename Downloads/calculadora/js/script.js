let numeroAtual = '';
let operacao = '';
let numeroAnterior = '';
let history = '';

function appendToDisplay(value) {
    if (document.getElementById('display').value === '0') {
        document.getElementById('display').value = value;
    } else {
        document.getElementById('display').value += value;
    }
    numeroAtual += value;
}

function appendDecimal() {
    if (!numeroAtual.includes('.')) {
        appendToDisplay('.');
    }
}

function setOperation(op) {
    operacao = op;
    numeroAnterior = numeroAtual;
    numeroAtual = '';
    document.getElementById('display').value = numeroAnterior + ' ' + operacao;
}

function calculate() {
    const display = document.getElementById('display');
    let currentText = display.value;
    let lastLine = currentText.lastIndexOf('\n') > -1? currentText.substr(currentText.lastIndexOf('\n')+1) : currentText;
    let result;
    try {
      if (operacao === '/' && parseFloat(numeroAtual) === 0) {
        throw new Error('ERRO');
      }
      result = eval(numeroAnterior + ' ' + operacao + ' ' + numeroAtual);
    } catch (error) {
      display.value = 'Error: ' + error.message;
      return;
    }
    if (!isNaN(result)) {
      history = `${numeroAnterior} ${operacao} ${numeroAtual} = ${result}`;
      display.value = history + '\n' + result;
      numeroAtual = result;
    }
}

function clearDisplay() {
    document.getElementById('display').value = '0';
    numeroAtual = '';
    numeroAnterior = '';
    operacao = '';
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (!isNaN(key) || key === '.') {
    appendToDisplay(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    setOperation(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    clearDisplay();
  }
});