class Cachorro {
  constructor(nome, raca, idade) {
    this.nome = nome;
    this.raca = raca;
    this.idade = idade;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getRaca() {
    return this.raca;
  }

  setRaca(raca) {
    this.raca = raca;
  }

  getIdade() {
    return this.idade;
  }

  setIdade(idade) {
    this.idade = idade;
  }

  latir() {
    return "Au au!";
  }

  toString() {
    return `Nome: ${this.nome}\nRaça: ${this.raca}\nIdade: ${this.idade} anos`;
  }
}

const cachorro = new Cachorro("Princesinha", "Pitbull", 4);
console.log(cachorro.toString());
console.log(cachorro.latir());