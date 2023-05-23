export class Somar {
  private valorUm!: number;
  private valorDois!: number

  constructor(valorUm: number,valorDois: number){
    this.valorUm = valorUm;
    this.valorDois = valorDois;
  }

  public getValorUm(): number {
    return this.valorUm;
  }
  public setValorUm(value: number) {
    this.valorUm = value;
  }

  public getValorDois(): number {
    return this.valorDois;
  }
  public setValorDois(value: number) {
    this.valorDois = value;
  }

  somarValores(primeiroValor: number, segundoValor: number){
    return primeiroValor + segundoValor;
  }
}
