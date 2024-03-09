import { Component, OnInit } from '@angular/core';
import { AsesorExternoServices } from 'src/app/servicios/asesorexterno.services';
import { DependenciaServices } from 'src/app/servicios/dependencia.services';
import { AsesorExterno } from 'src/app/modelos/asesorexterno.model';
import { Router } from '@angular/router';
import { sesion, host } from 'src/app/util';
declare var $:any;

@Component({
  selector: 'app-asesor-externo',
  templateUrl: './asesor-externo.component.html',
  styleUrls: ['./asesor-externo.component.css'],
  providers: [AsesorExternoServices,DependenciaServices]
})
export class AsesorExternoComponent implements OnInit {
  public s;
  public t: String;
  public externo:AsesorExterno;
  public g;
  public externos: Array<any> = [];
  public dependencias: Array<any> = [];
  public _host;
  public f;
  constructor(public route: Router, public as: AsesorExternoServices, public ds: DependenciaServices) {
    this.s = sesion;
    this.externo = new AsesorExterno("");
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
          this.externos = result.externos;
      },
      error=>{
        console.log(error);
      }
    );
  }
  
  nuevo(){
    this.as.addAsesorExterno(this.externo).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Registro agregado exitosamente");
          $("#exampleModal").modal('hide');

          this.externo = new AsesorExterno("");
          console.log(this.externo);
        }else
          alert("Error al agregar el registro");
      },
      error=>{
        console.log(error);
      }
    );
  }

  editar(){
    this.as.editAsesorExterno(this.externo, this.f).subscribe(
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

  eliminar(idAsesorExterno){
    let pregunta = confirm("¿Desea eliminar el registro?");
    if(pregunta)
      this.as.deleteAsesorExterno(idAsesorExterno).subscribe(
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
    this.externo = new AsesorExterno("");
    if(g == 0){
      this.t = "Agregar Asesor";
      if(this.dependencias.length > 0){
        this.externo.dependencia = this.dependencias[0].rfc_dependencia;
      }
    }else{
      this.t = "Editar Asesor";
      this.f = d.idAsesorExterno;
      this.externo.nombre_asesor_externo = d.nombre_asesor_externo;
      this.externo.puesto_asesor_externo = d.puesto_asesor_externo;
      this.externo.correo = d.correo;
      this.externo.dependencia = d.dependencia.rfc_dependencia;
    }
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
  }

}
