import { Component, OnInit } from '@angular/core';
import { UsuarioServices } from 'src/app/servicios/usuario.services';

@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css'],
  providers: [UsuarioServices]
})
export class LoginadminComponent implements OnInit {
  public us:string;
  public pass:string;
  constructor(public servicio:UsuarioServices) { }

  ngOnInit() {
  }

  enviar(){
    this.servicio.login(this.us,this.pass).subscribe(
      result =>{
        console.log(result);
        if(result.error == 0){
          sessionStorage.setItem("sesion",JSON.stringify(result.datos));
          location.href = "menu-admin";
        }else
          alert(result.m);
      },
      error=>{
        console.log(error);
      }
    );
  }

}
