import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{nome}}</h1>`


})

export class HelloComponent {
  nome = 'Marco';
}
