import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  cpf: string = "106.523.608-58"
  nome: string = "Marco";
  idade: number = 55;
  salvo: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showData( $event: any){
    console.log("Button clicked");
    console.log( this.nome );

    if ($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  }

  alterarNome($event: any){
    this.nome = $event.target.value;
  }

  salvar(nome: string){
    this.nome = nome;
    this.salvo = true;

    console.log(`Cliente ${this.nome} salvo`);
  }
}
