import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  somar(primeiroValor: number, segundoValor: number):number {
    return primeiroValor + segundoValor;
  }

  calcularDesconto(valor: number, desconto: number): number {
    let retornaDesconto = desconto / 100;
    return valor * retornaDesconto;
  }

  minimoCaracteres(texto: string): number {
    return texto.length;
  }

  
}
