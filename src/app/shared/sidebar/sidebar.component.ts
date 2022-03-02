import { Component, OnInit } from '@angular/core';
import {GifsService} from "../../gifs/service/gifs.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  get historial(){
    return this.gifsService.historial
  }
  constructor(private gifsService: GifsService) { }

  buscar(tarjeta: string){
    this.gifsService.buscarGifs(tarjeta);
    console.log(tarjeta);
  }

  ngOnInit(): void {
  }

}
