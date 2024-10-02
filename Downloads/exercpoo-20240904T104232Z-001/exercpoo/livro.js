class Livro {
  constructor(titulo, autor, editora, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.editora = editora;
    this.anoPublicacao = anoPublicacao;
  }

  getTitulo() {
    return this.titulo;
  }

  setTitulo(titulo) {
    this.titulo = titulo;
  }

  getAutor() {
    return this.autor;
  }

  setAutor(autor) {
    this.autor = autor;
  }

  getEditora() {
    return this.editora;
  }

  setEditora(editora) {
    this.editora = editora;
  }

  getAnoPublicacao() {
    return this.anoPublicacao;
  }

  setAnoPublicacao(anoPublicacao) {
    this.anoPublicacao = anoPublicacao;
  }

  toString() {
    return `Livro: ${this.titulo}\nAutor: ${this.autor}\nEditora: ${this.editora}\nAno de Publicação: ${this.anoPublicacao}`;
  }
}

const livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Editora Abril", 1954);
console.log(livro.toString());