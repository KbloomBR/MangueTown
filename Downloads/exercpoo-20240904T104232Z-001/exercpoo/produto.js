class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getPreco() {
    return this.preco;
  }

  setPreco(preco) {
    this.preco = preco;
  }

  getQuantidade() {
    return this.quantidade;
  }

  setQuantidade(quantidade) {
    this.quantidade = quantidade;
  }

  calcularTotal() {
    return this.preco * this.quantidade;
  }

  toString() {
    return `Produto: ${this.nome}\nPreço: R$ ${this.preco}\nQuantidade: ${this.quantidade}`;
  }
}

const produto = new Produto("TV", 2000, 2);
console.log(produto.toString());