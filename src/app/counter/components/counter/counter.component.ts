import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ numerito }}</h1>
    <hr />
    <p>Hola</p>

    <button (click)="aumentar(-1)">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="aumentar(+1)">+1</button>
  `,
})
export class CounterComponent implements OnInit {
  constructor() {}

  public numerito: number = 10;

  aumentar = (value: number): void => {
    console.log('ejecutando metodo');
    this.numerito += value;
  };
  reset = (): void => {
    console.log('ejecutando metodo');
    this.numerito = 10;
  };

  ngOnInit() {}
}
