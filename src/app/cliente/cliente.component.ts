import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  ultimoId : number = 1;
  salvo : Boolean;
  cpf : String;
  nome : string;
  idade : Number;

  clientes : any[] = [];

  constructor() { }

  ngOnInit() {
      this.salvo = false;
      this.cpf = '106.523.608-58';
      this.idade = 55;
      this.nome = 'Jéssica';

  }


  salvar( nome : string ){
          this.salvo = true;

          this.nome = nome;

          this.clientes.push({  id : ++this.ultimoId,
                              nome : this.nome});

          console.log(`Cliente ${this.nome} salvo!!!`);
      }
}
