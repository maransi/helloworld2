import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title = 'app';
  cpf : String;
  nome : String;
  idade : Number;

  constructor() { }

  ngOnInit() {
      this.cpf = '106.523.608-58';
      this.idade = 55;
      this.nome = 'MARCO ANTONIO SILVA';

  }

  getIdade() : Number{
      return this.idade;
  }

}
