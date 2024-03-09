import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sesion, host } from '../util';
import { Alumno } from '../modelos/alumno.model';

@Injectable()
export class AlumnoServices{
    public for_data: FormData;

    constructor(public h:HttpClient){
        this.for_data = new FormData();
    }

    addAlumno(alumnos: Alumno):Observable<any>{
        this.rellenarFormData(alumnos);
        this.for_data.append("accion","nuevo");
        this.for_data.append("token",sesion.token);
        return this.h.post(host + 'admin/alumnos.php', this.for_data);
    }
  
    editAlumno(alumnos: Alumno, f):Observable<any>{
        this.rellenarFormData(alumnos);
        this.for_data.append("accion","editar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("f",f);
        return this.h.post(host + 'admin/alumnos.php', this.for_data);
    }
    
    deleteAlumno(no_de_control):Observable<any>{
        this.for_data.append("accion","eliminar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("no_de_control",no_de_control);
        return this.h.post(host + 'admin/alumnos.php', this.for_data);
    }

    rellenarFormData(alumnos: Alumno){
        this.for_data = new FormData();
        this.for_data.append("no_de_control",alumnos.no_de_control);
        this.for_data.append("nip",alumnos.nip);
        this.for_data.append("nombre_alumno",alumnos.nombre_alumno);
        this.for_data.append("apPaterno",alumnos.apPaterno);
        this.for_data.append("apMaterno",alumnos.apMaterno);
        this.for_data.append("residencia",alumnos.residencia);
        this.for_data.append("asesorinterno",alumnos.asesorinterno);
        this.for_data.append("carrera",alumnos.carrera);        
    }

    mostrar():Observable<any>{
        this.for_data.append("token",sesion.token);
        this.for_data.append("accion","mostrar");
        return this.h.post(host + 'admin/alumnos.php', this.for_data);
    }
}