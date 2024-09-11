import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit{
  alert(){
    Swal.fire({
      title: 'Bienvenido!',
      text: 'Por el momento, la carga y subida de imagenes esta deshabilitada debido al desarrollo del Back-End en producción. Las demás funcionalidades responden correctamente!!!',
      icon: 'info',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#b71c1c'
    });
  }

  ngOnInit() {
    this.alert();
  }
}
