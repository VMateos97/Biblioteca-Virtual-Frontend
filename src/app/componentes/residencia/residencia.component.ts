import { Component, OnInit } from '@angular/core';
import { ResidenciaServices } from 'src/app/servicios/residencia.services';
import { Residencia } from 'src/app/modelos/residencia.model';
import { Router } from '@angular/router';
import { sesion, host } from 'src/app/util';
import { DependenciaServices } from 'src/app/servicios/dependencia.services';
import { PeriodoServices } from 'src/app/servicios/periodo.services';

declare var $:any;

@Component({
  selector: 'app-residencia',
  templateUrl: './residencia.component.html',
  styleUrls: ['./residencia.component.css'],
  providers: [ResidenciaServices,DependenciaServices,PeriodoServices]
})
export class ResidenciaComponent implements OnInit {
  public s;
  public t: String;
  public residencia:Residencia;
  public g;
  public residencias: Array<any> = [];
  public dependencias: Array<any> = [];
  public periodos: Array<any> = [];
  public _host;
  public f;
  constructor(public route: Router, public rs: ResidenciaServices, public ds: DependenciaServices, public ps: PeriodoServices) {
    this.s = sesion;
    this.residencia = new Residencia("","");
    this.t = "";
    this._host = host;
    if(this.s == null)
      this.route.navigate(["/login"]);
  }

  mostrar(){
    this.rs.mostrar().subscribe(
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
  
  nuevo(){
    this.rs.addResidencia(this.residencia).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Residencia insertada correctamente");
          $("#exampleModal").modal('hide');

          this.residencia = new Residencia("","");
          console.log(this.residencia);
        }else
          alert("Error al insertar la residencia");
      },
      error=>{
        console.log(error);
      }
    );
  }

  editar(){
    this.rs.editResidencia(this.residencia,this.f).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Residencia editada correctamente");
          $("#exampleModal").modal('hide');          
        }else
          alert("Error al editar la residencia");
      },
      error=>{
        console.log(error);
      }
    );
  }

  eliminar(idResidencia){
    let pregunta = confirm("¿Desea eliminar el registro?");
    if(pregunta)
      this.rs.deleteResidencia(idResidencia).subscribe(
        result=>{
          if(result.error == 0){
            this.mostrar();
            alert("Residencia eliminada correctamente");
          }else
            alert("Error al eliminar la residencia");
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
    this.residencia = new Residencia("","");
    if(g == 0){
      this.t = "Nuevo Proyecto de Residencia";
      if(this.dependencias.length > 0 && this.periodos.length > 0){
        this.residencia.dependencia = this.dependencias[0].rfc_dependencia;
        this.residencia.periodo = this.periodos[0].idPeriodo;
      }
    }else{
      this.t = "Editar Proyecto de Residencia";
      this.f = d.idResidencia;
      this.residencia.titulo = d.titulo;
      this.residencia.fecha_de_entrega = d.fecha_de_entrega;
      this.residencia.caratula = d.caratula;
      this.residencia.num_residentes = d.num_residentes;
      this.residencia.archivo = d.archivo;
      this.residencia.dependencia = d.dependencia.rfc_dependencia;
      this.residencia.periodo = d.periodo.idPeriodo;
      //this.juego.imagen = j.imagen;
    }
  }

  changeImg(ev){
    let img:any = ev.target;
    if(img.files.length > 0)
      this.residencia.caratula = img.files[0];
  }



  changePdf(ev){
    let pdf:any = ev.target;
    if(pdf.files.length > 0)
      this.residencia.archivo = pdf.files[0];
  }

  ngOnInit() {
    this.mostrar();
    this.ds.mostrar().subscribe(
      result => {
        if(result.count > 0){
          this.dependencias = result.dependencias;
          
        }
      },
      error=>{
        console.log(error);
      }
    );
    this.ps.mostrar().subscribe(
      result => {
        if(result.count > 0){
          this.periodos = result.periodos;
          
        }
      },
      error=>{
        console.log(error);
      }
    );
  }

}
