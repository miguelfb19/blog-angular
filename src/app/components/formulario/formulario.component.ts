import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  public title: string
  public saliderFormText:string
  public formEnviado:boolean=false

  public user:any

  constructor() {
    this.title = 'FORMULARIO'
    this.saliderFormText='FORMULARIO'
    this.user={
      nombre: '',
      apellidos:'',
      sexo:'',
      comentario:'',
    }
  }

  onSubmit(){
    alert('Formulario Enviado')
    console.log(this.user)
  }
}
