import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css',
})
export class Pagina2Component {
  public title: string;
  public contador: number=0;

  constructor(private _route: ActivatedRoute, private _router: Router) {
    this.title = 'PÁGINA DE PRUEBAS';
  }

  redireccion() {
    this._router.navigate(['/formulario']);
  }

  sumarContador(){
    this.contador++
  }

  restarContador(){
    this.contador--
  }

  reiniciarContador(){
    this.contador=0
  }
}
