import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it(`should have as result 10`,() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.somar(5, 5)).toEqual(10);
  })

  it(`should have as result 2`,() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.somar(1, 1)).toEqual(2);
  })

  it(`should have as result 500`,() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.calcularDesconto(1000, 50)).toEqual(500);
  })

  it('should have as result 3', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.minimoCaracteres('ele')).toEqual(3);
  })
});

describe('Matematica', () => {
  it(`Matematica.somarValores() retornará 4`,() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.matematica.somarValores(1, 3)).toEqual(4);
  })

  it(`Matematica.getVapegarValorlue() retornará number`,() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.matematica.pegarValor()).toBeTruthy();
  })
})

