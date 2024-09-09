import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-pelicula-details',
  templateUrl: './pelicula-details.component.html',
  styleUrl: './pelicula-details.component.css'
})
export class PeliculaDetailsComponent {

  @Input() pelicula: Pelicula 
  @Input() i:number 
  @Output() marcarFavorita = new EventEmitter()
  public fecha: any = new Date()

  constructor(){
    this.pelicula={title:'', year:0, image:''}
    this.i=0
  }

  seleccionar(pelicula:any){
    this.marcarFavorita.emit({
      peliculaEmit: pelicula
    })
    
  }
}
