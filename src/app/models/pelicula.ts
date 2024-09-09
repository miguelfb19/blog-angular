export class Pelicula{
    // public title: string;  
    // public year: number;
    // public image: string;
    
    // constructor(titulo:string, año:number, imagen:string){

    //     this.title=titulo;
    //     this.year=año;
    //     this.image=imagen;
    // }
    //PUEDO DEFINIR MI CLASE SIMPLEMENTE IMPLEMENTANDO LAS VARIABLES DENTRO DEL CONSTRUCTOR
    constructor(
        public title: string,
        public year: number,
        public image: string,
    ){}
}