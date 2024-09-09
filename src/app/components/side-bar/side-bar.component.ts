import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  public searchString:string

  constructor(
    private _router:Router
  ){
    this.searchString=''
  }
  busqueda(){
    this._router.navigate(['/search/'+ this.searchString])
    this.searchString=''
  }
}
