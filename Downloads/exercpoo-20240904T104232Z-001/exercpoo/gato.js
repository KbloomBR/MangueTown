class Gato {
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

  miar() {
    return "Miau!";
  }

  toString() {
    return `Nome: ${this.nome}\nRaça: ${this.raca}\nIdade: ${this.idade} anos`;
  }
}

const gato = new Gato("Frokis", "Laranja", 2);
console.log(gato.toString());
console.log(gato.miar());