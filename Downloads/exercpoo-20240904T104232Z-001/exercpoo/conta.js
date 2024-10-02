class ContaCorrente {
  constructor(numeroConta, saldo) {
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

  getSaldo() {
    return this.saldo;
  }

  setSaldo(saldo) {
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (valor > this.saldo) {
      throw new Error("Saldo insuficiente");
    }
    this.saldo -= valor;
  }

  toString() {
    return `Conta: ${this.numeroConta}\nSaldo: R$ ${this.saldo}`;
  }
}

const conta = new ContaCorrente(325642, 1000.0);
console.log(conta.toString());

conta.depositar(750.0);
console.log(conta.toString()); 

conta.sacar(800.0);
console.log(conta.toString());