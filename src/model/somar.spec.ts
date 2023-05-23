import { Somar } from './somar';

describe('Somar', () => {

  let somar = new Somar(10, 20);

  it('should get a valorUm = 10', () => {
    expect(somar.getValorUm()).toEqual(10);
  });

  it('shoud a type number', () => {
    expect(typeof somar.getValorDois() == typeof 10).toBeTruthy();
  });

  it('should get a somarvalores = 30', () => {
    expect(
      somar.somarValores(
        somar.getValorUm(),
        somar.getValorDois()
      )
    ).toEqual(30);
  });
});


