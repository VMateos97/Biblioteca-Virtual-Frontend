import { Component } from '@angular/core';
import { sesion } from './util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VirtualLibrary';
  public s;
  public tipo;

  constructor(){

  }

  ngOnInit(){
    if(sesion == null)
      this.tipo = 'inactivo';
    else
      this.tipo = sesion.tipo;
  }

  cerrar_sesion(){
    sessionStorage.removeItem("sesion");
    location.href = "login";
  }
}
