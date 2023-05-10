export class Matematica {
    private valor!: number

    constructor(valor: number){
      this.valor = valor;
    }

    somarValores(primeiroValor: number, segundoValor: number){
      return primeiroValor + segundoValor;
    }

    pegarValor(){
      return this.valor;
    }
}