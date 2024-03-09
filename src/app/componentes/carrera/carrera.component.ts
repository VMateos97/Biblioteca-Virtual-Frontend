import { Component, OnInit } from '@angular/core';
import { CarreraServices } from 'src/app/servicios/carrera.services';
import { Carrera } from 'src/app/modelos/carrera.model';
import { Router } from '@angular/router';
import { sesion, host } from 'src/app/util';
//import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap'; 

declare var $:any;

@Component({
  selector: 'app-carrera',
  templateUrl: './carrera.component.html',
  styleUrls: ['./carrera.component.css'],
  providers: [CarreraServices/*,NgbPaginationConfig*/]
})
export class CarreraComponent implements OnInit {
  public s;
  public t: String;
  public carrera:Carrera;
  public g;
  public carreras: Array<any> = [];
  public _host;
  public f;
  totalItems: number;
  page: number;
  previousPage: number;
  showPagination: boolean;
  path: string[];
  order: number;
  constructor(public route: Router, public cs: CarreraServices/*, private config:NgbPaginationConfig*/) {
    //this.config.boundaryLinks = true;
    this.s = sesion;
    this.carrera = new Carrera("");
    this.t = "";
    this._host = host;
    if(this.s == null)
      this.route.navigate(["/login"]);
  }

  /*sortTable(prop: string) {
    this.path = prop.split('.');
    this.order = this.order * (-1); 
    return false; 
  }
  */

 mostrar(){
  this.cs.mostrar().subscribe(
    result=>{
      console.log(result);
      if(result.count > 0)
        this.carreras = result.carreras;
    },
    error=>{
      console.log(error);
    }
  );
}

  nuevo(){
    this.cs.addCarrera(this.carrera).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Carrera insertada correctamente");
          $("#exampleModal").modal('hide');

          this.carrera = new Carrera("");
          console.log(this.carrera);
        }else
          alert("Error al insertar la carrera");
      },
      error=>{
        console.log(error);
      }
    );
  }

  editar(){
    this.cs.editCarrera(this.carrera,this.f).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Carrera editada correctamente");
          $("#exampleModal").modal('hide');          
        }else
          alert("Error al editar la carrera");
      },
      error=>{
        console.log(error);
      }
    );
  }

  eliminar(idCarrera){
    let pregunta = confirm("¿Desea eliminar el registro?");
    if(pregunta)
      this.cs.deleteCarrera(idCarrera).subscribe(
        result=>{
          if(result.error == 0){
            this.mostrar();
            alert("Carrera eliminada correctamente");
          }else
            alert("Error al eliminar la carrera");
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
    this.carrera = new Carrera("");
    if(g == 0){
      this.t = "Nueva Carrera";
    }else{
      this.t = "Editar Carrera";
      this.f = d.idCarrera;
      this.carrera.nombre_carrera = d.nombre_carrera;
    }
  }

  ngOnInit() {
    this.mostrar();
    /*this.page =1;
    this.previousPage =1;
    this.fillCarrera(5);*/
  }

  /*
  fillCarrera(page : number) : void {
	  this.cs.mostrarPage(page).subscribe(
		  data => {
			if ((!data && !data.result) || (data && data.result && data.result.length ==0)) {
			  this.carreras = [];
			  this.showPagination = false;
			}
			else {
			  this.carreras = data.result;
			  this.totalItems = data.totalAmount;
			  this.showPagination = true;
			}

		  },
		  error => {
			// Aquí se debería tratar el error, bien mostrando un mensaje al usuario o de la forma que se desee.
		  }
		);
  }
  
  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.fillCarrera(this.page-1);
    }
  }*/

}
