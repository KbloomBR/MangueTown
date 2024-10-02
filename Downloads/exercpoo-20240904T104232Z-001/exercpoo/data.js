class Data {
  constructor(dia, mes, ano) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;
  }

  getDia() {
    return this.dia;
  }

  setDia(dia) {
    this.dia = dia;
  }

  getMes() {
    return this.mes;
  }

  setMes(mes) {
    this.mes = mes;
  }

  getAno() {
    return this.ano;
  }

  setAno(ano) {
    this.ano = ano;
  }

  toString() {
    return `${this.dia}/${this.mes}/${this.ano}`;
  }
}

const data = new Data(3, 9, 2024);
console.log(data.toString());