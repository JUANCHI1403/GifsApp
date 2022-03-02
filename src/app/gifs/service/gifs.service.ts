import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Gif, SearchGifsResponse} from "../interface/gifs.interface";

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
    //if (localStorage.getItem('historial')){
    //}

  }
  private apiKey : string = 'h1HmKYQ4wL9Eb7l8hbtaD6pCbs3j650m'
  private _historial: string[] = []
  private  servicioUrl: string ='https://api.giphy.com/v1/gifs'
  public resultados: Gif[] = []

  get historial(){

    return [...this._historial];
  }

  buscarGifs(query: string= '') {

    query = query.trim().toLocaleLowerCase();

    if( !this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,9);
      console.log(this._historial);
      localStorage.setItem('historial', JSON.stringify(this._historial) )
    }

    const params = new HttpParams()
      .set('apikey', this.apiKey)
      .set('limit', '9')
      .set('q', query);

    console.log(params.toString());

    this.http.get<SearchGifsResponse>(`${ this.servicioUrl }/search`, {params} )
      .subscribe((resp)=> {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('resultados', JSON.stringify(this.resultados))
        })
  }

}
