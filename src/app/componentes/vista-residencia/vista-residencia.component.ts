import { Component, OnInit } from '@angular/core';
import { ResidenciaServices } from 'src/app/servicios/residencia.services';
import { AlumnoServices } from 'src/app/servicios/alumno.services';
import { Router } from '@angular/router';
import { sesion, host } from 'src/app/util';
import { VistaResidenciaServices } from 'src/app/servicios/vistaresidencia.services';
declare var $:any;

@Component({
  selector: 'app-vista-residencia',
  templateUrl: './vista-residencia.component.html',
  styleUrls: ['./vista-residencia.component.css'],
  providers: [ResidenciaServices,AlumnoServices,VistaResidenciaServices]
})
export class VistaResidenciaComponent implements OnInit {
  public s;
  public t: String;
  public g;
  public residencias: Array<any> = [];
  public alumnos: Array<any> = [];
  public _host;
  public f;
  constructor(public route: Router, public rs: ResidenciaServices, public as: AlumnoServices, public vrs: VistaResidenciaServices) {
    this.s = sesion;
    this.t = "";
    this._host = host;
    if(this.s == null)
      this.route.navigate(["/login"]);
  }

  mostrar(){
    var buscar = $("#buscar").val();
    this.vrs.mostrar(buscar).subscribe(
      result=>{
        console.log(result);
        if(result.count > 0)
          this.residencias = result.residencias;
      },
      error=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.mostrar();
  }

}
