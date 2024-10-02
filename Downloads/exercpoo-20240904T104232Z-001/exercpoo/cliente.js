class Cliente {
  constructor(nome, cpf, dataNascimento, endereco, email, ocupacao, rendaAnual, nivelEscolaridade) {
    this.nome = nome;
    this.cpf = cpf;
    this.dataNascimento = dataNascimento;
    this.endereco = endereco;
    this.email = email;
    this.ocupacao = ocupacao;
    this.rendaAnual = rendaAnual;
    this.nivelEscolaridade = nivelEscolaridade;
  }

  getNome() {
    return this.nome;
  }

  setNome(nome) {
    this.nome = nome;
  }

  getCpf() {
    return this.cpf;
  }

  setCpf(cpf) {
    this.cpf = cpf;
  }

  getDataNascimento() {
    return this.dataNascimento;
  }

  setDataNascimento(dataNascimento) {
    this.dataNascimento = dataNascimento;
  }

  getEndereco() {
    return this.endereco;
  }

  setEndereco(endereco) {
    this.endereco = endereco;
  }

  getEmail() {
    return this.email;
  }

  setEmail(email) {
    this.email = email;
  }

  getOcupacao() {
    return this.ocupacao;
  }

  setOcupacao(ocupacao) {
    this.ocupacao = ocupacao;
  }

  getRendaAnual() {
    return this.rendaAnual;
  }

  setRendaAnual(rendaAnual) {
    this.rendaAnual = rendaAnual;
  }

  getNivelEscolaridade() {
    return this.nivelEscolaridade;
  }

  setNivelEscolaridade(nivelEscolaridade) {
    this.nivelEscolaridade = nivelEscolaridade;
  }

  toString() {
    return `Cliente: ${this.nome}\nCPF: ${this.cpf}\nData de Nascimento: ${this.dataNascimento}\nEndereço: ${this.endereco}\nEmail: ${this.email}\nOcupação: ${this.ocupacao}\nRenda Anual: R$ ${this.rendaAnual}\nNível de Escolaridade: ${this.nivelEscolaridade}`;
  }
}

const cliente = new Cliente("Arthur Neemias", "77777777777", "25/07/2007", "Rua Orea Seca, 123", "arthur@gmail.com", "Garoto de Progama", 12, "Ensino Médio Completo");
console.log(cliente.toString());