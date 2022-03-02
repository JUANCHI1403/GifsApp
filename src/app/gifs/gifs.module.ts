import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsComponent } from './gifs/gifs.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [
    GifsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
