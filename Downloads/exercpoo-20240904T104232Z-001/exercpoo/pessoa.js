class Pessoa {
  constructor(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getIdade() {
    return this.idade;
  }

  setIdade(idade) {
    this.idade = idade;
  }

  getAltura() {
    return this.altura;
  }

  setAltura(altura) {
    this.altura = altura;
  }

  toString() {
    return `Nome: ${this.nome}\nIdade: ${this.idade} anos\nAltura: ${this.altura} m`;
  }
}

const pessoa = new Pessoa("João Veras", 17, 1.72);
console.log(pessoa.toString());