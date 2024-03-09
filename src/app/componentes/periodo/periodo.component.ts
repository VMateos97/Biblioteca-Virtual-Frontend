import { Component, OnInit } from '@angular/core';
import { PeriodoServices } from 'src/app/servicios/periodo.services';
import { Periodo } from 'src/app/modelos/periodo.model';
import { Router } from '@angular/router';
import { host, sesion } from 'src/app/util';
declare var $:any;


@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css'],
  providers: [PeriodoServices]
})
export class PeriodoComponent implements OnInit {
  public s;
  public t: String;
  public periodo:Periodo;
  public g;
  public periodos: Array<any> = [];
  public _host;
  public f;
  constructor(public route: Router, public ps: PeriodoServices) { 
    this.s = sesion;
    this.periodo = new Periodo("");
    this.t = "";
    this._host = host;
    if(this.s == null)
      this.route.navigate(["/login"]);
  }

  mostrar(){
    this.ps.mostrar().subscribe(
      result=>{
        console.log(result);
        if(result.count > 0)
          this.periodos = result.periodos;
      },
      error=>{
        console.log(error);
      }
    );
  }

  nuevo(){
    this.ps.addPeriodo(this.periodo).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Periodo insertado correctamente");
          $("#exampleModal").modal('hide');

          this.periodo = new Periodo("");
          console.log(this.periodo);
        }else
          alert("ERROR AL INSERTAR EL PERIODO");
      },
      error=>{
        console.log(error);
      }
    );
  }

  editar(){
    this.ps.editPeriodo(this.periodo,this.f).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Periodo editado correctamente");
          $("#exampleModal").modal('hide');          
        }else
          alert("Error al editar el periodo");
      },
      error=>{
        console.log(error);
      }
    );
  }

  eliminar(idPeriodo){
    let pregunta = confirm("¿Desea eliminar el registro?");
    if(pregunta)
      this.ps.deletePeriodo(idPeriodo).subscribe(
        result=>{
          if(result.error == 0){
            this.mostrar();
            alert("Periodo eliminado correctamente");
          }else
            alert("Error al eliminar el periodo");
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
    this.periodo = new Periodo("");
    if(g == 0){
      this.t = "Nuevo Periodo";
    }else{
      this.t = "Editar Periodo";
      this.f = d.idPeriodo;
      this.periodo.nombre_periodo = d.nombre_periodo;
    }
  }

  ngOnInit() {
    this.mostrar();
  }

}
