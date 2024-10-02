function calcular() {
    const numberInput = document.getElementById("numberInput");
    const number = parseFloat(numberInput.value);
    const result = document.getElementById("resultado");
    const numberToAnalyze = document.getElementById("numberToAnalyze");


    if (isNaN(number)) {
    result.innerHTML = "Bota um número cabaço!";
    return;
    }

    numberToAnalyze.innerHTML = `O número que você escolheu para analisar foi ${number}`;
   
    const absNumber = Math.abs(number);
    const floorNumber = Math.floor(number);
    const roundNumber = Math.round(number);
    const sqrtNumber = Math.sqrt(number);
    const cbrtNumber = Math.cbrt(number);
    const powNumber2 = Math.pow(number, 2);
    const powNumber3 = Math.pow(number, 3);
   
    result.innerHTML = `
    O valor absoluto é ${absNumber}<br>
    A parte inteira é ${floorNumber}<br>
    O valor inteiro mais próximo é ${roundNumber}<br>
    A raiz quadrada do seu número é ${sqrtNumber}<br>
    A raiz cúbica do seu número é ${cbrtNumber}<br>
    Seu número elevado a 2 é ${powNumber2}<br>
    Seu número elevado a 3 é ${powNumber3}<br>
    `;
   }