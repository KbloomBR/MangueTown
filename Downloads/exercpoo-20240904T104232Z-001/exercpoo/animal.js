class Animal {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getTipo() {
    return this.tipo;
  }

  setTipo(tipo) {
    this.tipo = tipo;
  }

  emitirSom() {
    throw new Error("Tem que colocar algo");
  }
}

class Cachorro extends Animal {
  emitirSom() {
    return "Au au";
  }
}

class Gato extends Animal {
  emitirSom() {
    return "Miau";
  }
}

class Pássaro extends Animal {
  emitirSom() {
    return "Piu piu";
  }
}

const gato = new Gato("Fropinho", "Gato");
console.log(gato.emitirSom());