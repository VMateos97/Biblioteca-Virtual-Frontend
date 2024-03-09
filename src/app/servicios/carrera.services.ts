import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sesion, host } from '../util';
import { Carrera } from '../modelos/carrera.model';

@Injectable()
export class CarreraServices{
    public for_data: FormData;

    constructor(public h:HttpClient){
        this.for_data = new FormData();
    }

    addCarrera(carreras: Carrera):Observable<any>{
        this.rellenarFormData(carreras);
        this.for_data.append("accion","nuevo");
        this.for_data.append("token",sesion.token);
        return this.h.post(host + 'admin/carreras.php', this.for_data);
    }

    
    editCarrera(carreras: Carrera, f):Observable<any>{
        this.rellenarFormData(carreras);
        this.for_data.append("accion","editar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("f",f);
        return this.h.post(host + 'admin/carreras.php', this.for_data);
    }
    
    deleteCarrera(idCarrera):Observable<any>{
        this.for_data.append("accion","eliminar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("idCarrera",idCarrera);
        return this.h.post(host + 'admin/carreras.php', this.for_data);
    }

    rellenarFormData(carreras: Carrera){
        this.for_data = new FormData();
        this.for_data.append("nombre_carrera",carreras.nombre_carrera);        
    }
    

    mostrar():Observable<any>{
        this.for_data.append("token",sesion.token);
        this.for_data.append("accion","mostrar");
        return this.h.post(host + 'admin/carreras.php', this.for_data);
    }

    /*mostrarPage(page):Observable<any>{
        this.for_data.append("token",sesion.token);
        this.for_data.append("page",page);
        this.for_data.append("accion","mostrar");
        return this.h.post(host + 'admin/carreras.php', this.for_data);
    }*/
}