import { Component, OnInit } from '@angular/core';
import { AsesorInternoServices } from 'src/app/servicios/asesorinterno.services';
import { ResidenciaServices } from 'src/app/servicios/residencia.services';
import { CarreraServices } from 'src/app/servicios/carrera.services';
import { Alumno } from 'src/app/modelos/alumno.model';
import { Router } from '@angular/router';
import { AlumnoServices } from 'src/app/servicios/alumno.services';
import { sesion, host } from 'src/app/util';
declare var $:any;

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
  providers: [ResidenciaServices,AsesorInternoServices,CarreraServices,AlumnoServices]
})
export class AlumnoComponent implements OnInit {
  public s;
  public t: String;
  public alumno:Alumno;
  public g;
  public alumnos: Array<any> = [];
  public residencias: Array<any> = [];
  public internos: Array<any> = [];
  public carreras: Array<any> = [];
  public _host;
  public f;
  constructor(public route: Router, public as:AlumnoServices, public rs:ResidenciaServices, public ais:AsesorInternoServices, public cs:CarreraServices) { 
    this.s = sesion;
    this.alumno = new Alumno("");
    this.t = "";
    this._host = host;
    if(this.s == null)
      this.route.navigate(["/login"]);
  }

  mostrar(){
    this.as.mostrar().subscribe(
      result=>{
        console.log(result);
        if(result.count > 0)
          this.alumnos = result.alumnos;
      },
      error=>{
        console.log(error);
      }
    );
  }
  
  nuevo(){
    this.as.addAlumno(this.alumno).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Registro insertado correctamente");
          $("#exampleModal").modal('hide');

          this.alumno = new Alumno("");
          console.log(this.alumno);
        }else
          alert("Error al insertar el registro");
      },
      error=>{
        console.log(error);
      }
    );
  }

  editar(){
    this.as.editAlumno(this.alumno,this.f).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Registro editado correctamente");
          $("#exampleModal").modal('hide');          
        }else
          alert("Error al editar el registro");
      },
      error=>{
        console.log(error);
      }
    );
  }

  eliminar(no_de_control){
    let pregunta = confirm("¿Desea eliminar el registro?");
    if(pregunta)
      this.as.deleteAlumno(no_de_control).subscribe(
        result=>{
          if(result.error == 0){
            this.mostrar();
            alert("Registro eliminado correctamente");
          }else
            alert("Error al eliminar el registro");
        },
        error=>{
          console.log(error);
        }
      );
  }

  gestion(){
    if(this.g == 0){
      this.nuevo();
    }else{
      this.editar();
    }
  }

  setG(g:number,d){
    this.g = g;
    this.alumno = new Alumno("");
    if(g == 0){
      this.t = "Nuevo Alumno";
      if(this.residencias.length > 0 && this.internos.length > 0 && this.carreras.length > 0){
        this.alumno.residencia = this.residencias[0].idResidencia;
        this.alumno.asesorinterno = this.internos[0].idAsesorInterno;
        this.alumno.carrera = this.carreras[0].idCarrera;
      }
    }else{
      this.t = "Editar Registro de Alumno";
      this.f = d.no_de_control;
      this.alumno.no_de_control = d.no_de_control;
      this.alumno.nip = d.nip;
      this.alumno.nombre_alumno = d.nombre_alumno;
      this.alumno.apPaterno = d.apPaterno;
      this.alumno.apMaterno = d.apMaterno;
      this.alumno.residencia = d.residencia.idResidencia;
      this.alumno.asesorinterno = d.asesorinterno.idAsesorInterno;
      this.alumno.carrera = d.carrera.idCarrera;
    }
  }

  ngOnInit() {
    this.mostrar();
    this.rs.mostrar().subscribe(
      result => {
        if(result.count > 0){
          this.residencias = result.residencias;
          
        }
      },
      error=>{
        console.log(error);
      }
    );
    this.ais.mostrar().subscribe(
      result => {
        if(result.count > 0){
          this.internos = result.internos;
          
        }
      },
      error=>{
        console.log(error);
      }
    );
    this.cs.mostrar().subscribe(
      result => {
        if(result.count > 0){
          this.carreras = result.carreras;
          
        }
      },
      error=>{
        console.log(error);
      }
    );
  }

}
