import { Component, OnInit } from '@angular/core';
import { AsesorInternoServices } from 'src/app/servicios/asesorinterno.services';
import { AsesorInterno } from 'src/app/modelos/asesorinterno.model';
import { Router } from '@angular/router';
import { sesion, host } from 'src/app/util';
declare var $:any;

@Component({
  selector: 'app-asesor-interno',
  templateUrl: './asesor-interno.component.html',
  styleUrls: ['./asesor-interno.component.css'],
  providers: [AsesorInternoServices]
})
export class AsesorInternoComponent implements OnInit {
  public s;
  public t: String;
  public interno:AsesorInterno;
  public g;
  public internos: Array<any> = [];
  public _host;
  public f;
  constructor(public route: Router, public as: AsesorInternoServices) { 
    this.s = sesion;
    this.interno = new AsesorInterno("");
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
          this.internos = result.internos;
      },
      error=>{
        console.log(error);
      }
    );
  }
  
  nuevo(){
    this.as.addAsesorInterno(this.interno).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Asesor agregado exitosamente");
          $("#exampleModal").modal('hide');

          this.interno = new AsesorInterno("");
          console.log(this.interno);
        }else
          alert("Error al agregar al asesor");
      },
      error=>{
        console.log(error);
      }
    );
  }

  editar(){
    this.as.editAsesorInterno(this.interno, this.f).subscribe(
      result=>{
        if(result.error == 0){
          this.mostrar();
          alert("Registro editado exitosamente");
          $("#exampleModal").modal('hide');          
        }else
          alert("Error al editar el registro");
      },
      error=>{
        console.log(error);
      }
    );
  }

  eliminar(idAsesorInterno){
    let pregunta = confirm("¿Desea eliminar el registro?");
    if(pregunta)
      this.as.deleteAsesorInterno(idAsesorInterno).subscribe(
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
    this.interno = new AsesorInterno("");
    if(g == 0){
      this.t = "Agregar Asesor";
    }else{
      this.t = "Editar Asesor";
      this.f = d.idAsesorInterno;
      this.interno.nombre_asesor_interno = d.nombre_asesor_interno;
      this.interno.puesto_asesor_interno = d.puesto_asesor_interno;
      this.interno.correo = d.correo;
    }
  }

  ngOnInit() {
    this.mostrar();
  }

}
