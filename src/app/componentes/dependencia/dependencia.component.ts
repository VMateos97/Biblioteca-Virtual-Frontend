import { Component, OnInit } from '@angular/core';
import { DependenciaServices } from 'src/app/servicios/dependencia.services';
import { Dependencia } from 'src/app/modelos/dependencia.model';
import { Router } from '@angular/router';
import { sesion, host } from 'src/app/util';
declare var $:any;


@Component({
  selector: 'app-dependencia',
  templateUrl: './dependencia.component.html',
  styleUrls: ['./dependencia.component.css'],
  providers: [DependenciaServices]
})
export class DependenciaComponent implements OnInit {
  public s;
  public t: String;
  public dependencia:Dependencia;
  public g;
  public dependencias: Array<any> = [];
  public _host;
  public f;
  constructor(public route: Router, public ds: DependenciaServices) {

    this.s = sesion;
    this.dependencia = new Dependencia("","");
    this.t = "";
    this._host = host;
    if(this.s == null)
      this.route.navigate(["/login"]);

  }

  mostrar(){
    this.ds.mostrar().subscribe(
      result=>{
        console.log(result);
        if(result.count > 0)
          this.dependencias = result.dependencias;
      },
      error=>{
        console.log(error);
      }
    );
  }

  seleccionar(dep){
    this.dependencia.rfc_dependencia = dep.rfc_dependencia;
    this.dependencia.nombre_dependencia = dep.nombre_dependencia;
    this.dependencia.domicilio_dependencia = dep.domicilio_dependencia;
    this.dependencia.colonia_dependencia = dep.colonia_dependencia;
    this.dependencia.cp_dependencia = dep.cp_dependencia;
    this.dependencia.fax_dependencia = dep.fax_dependencia;
    this.dependencia.ciudad_dependencia = dep.ciudad_dependencia;
    this.dependencia.tel_dependencia = dep.tel_dependencia;
    this.dependencia.mision = dep.mision;
    this.dependencia.giro = dep.giro;
    this.dependencia.titular_dependencia = dep.titular_dependencia;
    this.dependencia.puesto_titular = dep.puesto_titular;
  }
  
  nuevo(){
    this.ds.addDependencia(this.dependencia).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Dependencia insertada correctamente");
          $("#exampleModal").modal('hide');

          this.dependencia = new Dependencia("","");
          console.log(this.dependencia);
        }else
          alert("Error al insertar la dependencia");
      },
      error=>{
        console.log(error);
      }
    );
  }

  editar(){
    this.ds.editDependencia(this.dependencia).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Dependencia editada correctamente");
          $("#exampleModal2").modal('hide');          
        }else
          alert("Error al editar la dependencia");
      },
      error=>{
        console.log(error);
      }
    );
  }

  eliminar(rfc_dependencia){
    let pregunta = confirm("¿Desea eliminar el registro?");
    if(pregunta)
      this.ds.deleteDependencia(rfc_dependencia).subscribe(
        result=>{
          if(result.error == 0){
            this.mostrar();
            alert("Dependencia eliminada correctamente");
          }else
            alert("Error al eliminar la dependencia");
        },
        error=>{
          console.log(error);
        }
      );
  }

  gestion(){
    if(this.g == 0){
      this.nuevo();
    }else if(this.g == 1){
      this.editar();
    }else{
      this.mostrar();
    }
  }

  setG(g:number,d){
    this.g = g;
    this.dependencia = new Dependencia("","");
    if(g == 0){
      this.t = "Nueva Dependencia";
    }else if(g == 1){
      this.t = "Editar Dependencia";
      this.dependencia.rfc_dependencia = d.rfc_dependencia;
      this.dependencia.nombre_dependencia = d.nombre_dependencia;
      this.dependencia.domicilio_dependencia = d.domicilio_dependencia;
      this.dependencia.colonia_dependencia = d.colonia_dependencia;
      this.dependencia.cp_dependencia = d.cp_dependencia;
      this.dependencia.fax_dependencia = d.fax_dependencia;
      this.dependencia.ciudad_dependencia = d.ciudad_dependencia;
      this.dependencia.tel_dependencia = d.tel_dependencia;
      this.dependencia.mision = d.mision;
      this.dependencia.giro = d.giro;
      this.dependencia.titular_dependencia = d.titular_dependencia;
      this.dependencia.puesto_titular = d.puesto_titular;
    }else{
      this.t = "Detalles de la dependencia";
    }
  }

  ngOnInit() {
    this.mostrar();
  }

}
