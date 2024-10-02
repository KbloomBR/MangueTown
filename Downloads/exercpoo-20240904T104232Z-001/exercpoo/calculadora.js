class Calculadora {
  somar(a, b) {
    return a + b;
  }

  subtrair(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) {
      throw new Error("Divisão por zero");
    }
    return a / b;
  }
}

const calculadora = new Calculadora();
console.log(calculadora.subtrair(3, 3));