class Retangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  getBase() {
    return this.base;
  }

  setBase(base) {
    this.base = base;
  }

  getAltura() {
    return this.altura;
  }

  setAltura(altura) {
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }

  calcularPerimetro() {
    return 2 * (this.base + this.altura);
  }

  toString() {
    return `Base: ${this.base}\nAltura: ${this.altura}\nÁrea: ${this.calcularArea()}\nPerímetro: ${this.calcularPerimetro()}`;
  }
}

const retangulo = new Retangulo(5, 5);
console.log(retangulo.toString());
