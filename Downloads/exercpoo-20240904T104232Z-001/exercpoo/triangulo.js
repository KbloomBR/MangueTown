class Triangulo {
  constructor(ladoA, ladoB, ladoC) {
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  getLadoA() {
    return this.ladoA;
  }

  setLadoA(ladoA) {
    this.ladoA = ladoA;
  }

  getLadoB() {
    return this.ladoB;
  }

  setLadoB(ladoB) {
    this.ladoB = ladoB;
  }

  getLadoC() {
    return this.ladoC;
  }

  setLadoC(ladoC) {
    this.ladoC = ladoC;
  }

  calcularPerimetro() {
    return this.ladoA + this.ladoB + this.ladoC;
  }

  calcularArea() {
    let s = (this.ladoA + this.ladoB + this.ladoC) / 2;
    return Math.sqrt(s * (s - this.ladoA) * (s - this.ladoB) * (s - this.ladoC));
  }

  toString() {
    return `Triângulo:\nLado A: ${this.ladoA}\nLado B: ${this.ladoB}\nLado C: ${this.ladoC}\nPerímetro: ${this.calcularPerimetro()}\nÁrea: ${this.calcularArea()}`;
  }
}

const triangulo = new Triangulo(3, 4, 5);
console.log(triangulo.toString());