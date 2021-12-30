import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { FormsModule } from '@angular/forms';
import { ClienteCardComponent } from '../cliente-card/cliente-card.component';

@NgModule({
  exports: [
      ClienteComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ClienteComponent, ClienteCardComponent],
})
export class ClienteModule {
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
