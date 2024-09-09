import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { peliculaService } from '../../../services/peliculas.services';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css',
  providers: [peliculaService]
})
export class PeliculasComponent implements OnInit {
  public pageTitle: string;
  public peliculas: Array<Pelicula>;
  public peliculaFavorita: Pelicula = {title:'', year:0, image:''}
  
  constructor(
    private _peliculasService: peliculaService
  ) {
    
    this.pageTitle = 'PELÍCULAS';
    this.peliculas = _peliculasService.getPeliculas()
  }

  mostrarFavorita(event:any){
    console.log(event);
    this.peliculaFavorita=event.peliculaEmit
    setTimeout(()=>this.peliculaFavorita={title:'', year:0, image:''} , 1000)
  }

  ngOnInit(): void {}

}
