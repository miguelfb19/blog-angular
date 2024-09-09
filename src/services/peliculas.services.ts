import { Injectable } from "@angular/core";
import { Pelicula } from "../app/models/pelicula";

@Injectable()
export class peliculaService{
    public peliculas: Pelicula[]

    constructor(){
        this.peliculas=[
            new Pelicula(
              'Spiderman 4',
              2020,
              'https://backend.fueradefoco.com.mx/wp-content/uploads/2024/01/FUERA-DE-foco-17-1-3-1024x576.webp'
            ),
            new Pelicula(
              'Vengadores',
              2015,
              'https://hips.hearstapps.com/hmg-prod/images/vengadores-marvel-netflix-1554116074.jpg?crop=1.00xw:0.668xh;0,0&resize=1200:*'
            ),
            new Pelicula(
              'End Game',
              2022,
              'https://hips.hearstapps.com/hmg-prod/images/vengadores-endgame-poster-1556056595.jpg?crop=1xw:0.525xh;center,top&resize=1200:*'
            ),
            new Pelicula(
              'Los 4 fantasticos',
              2003,
              'https://lumiere-a.akamaihd.net/v1/images/cg_fantasticfour_summermovienights_mobile_19816_c1192e24.jpeg?region=0,20,640,360'
            ),
          ];
    }
    getPeliculas(){
        return this.peliculas
    }
}

