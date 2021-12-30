import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  exports: [CursoComponent,
            BemVindoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CursoComponent,
                BemVindoComponent]
})
export class CursoModule { }
