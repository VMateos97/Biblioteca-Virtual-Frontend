import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sesion, host } from '../util';
import { Periodo } from '../modelos/periodo.model';

@Injectable()
export class PeriodoServices{
    public for_data: FormData;

    constructor(public h:HttpClient){
        this.for_data = new FormData();
    }

    addPeriodo(periodos: Periodo):Observable<any>{
        this.rellenarFormData(periodos);
        this.for_data.append("accion","nuevo");
        this.for_data.append("token",sesion.token);
        return this.h.post(host + 'admin/periodos.php', this.for_data);
    }

    
    editPeriodo(periodos: Periodo, f):Observable<any>{
        this.rellenarFormData(periodos);
        this.for_data.append("accion","editar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("f",f);
        return this.h.post(host + 'admin/periodos.php', this.for_data);
    }
    
    deletePeriodo(idPeriodo):Observable<any>{
        this.for_data.append("accion","eliminar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("idPeriodo",idPeriodo);
        return this.h.post(host + 'admin/periodos.php', this.for_data);
    }

    rellenarFormData(periodos: Periodo){
        this.for_data = new FormData();
        this.for_data.append("nombre_periodo",periodos.nombre_periodo);        
    }
    

    mostrar():Observable<any>{
        this.for_data.append("token",sesion.token);
        this.for_data.append("accion","mostrar");
        return this.h.post(host + 'admin/periodos.php', this.for_data);
    }
}