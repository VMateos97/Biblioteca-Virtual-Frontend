import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sesion, host } from '../util';
import { Residencia } from '../modelos/residencia.model';

@Injectable()
export class ResidenciaServices{
    public for_data: FormData;

    constructor(public h:HttpClient){
        this.for_data = new FormData();
    }

    addResidencia(residencias: Residencia):Observable<any>{
        this.rellenarFormData(residencias);
        this.for_data.append("accion","nuevo");
        this.for_data.append("token",sesion.token);
        return this.h.post(host + 'admin/residencias.php', this.for_data);
    }

    
    editResidencia(residencias: Residencia, f):Observable<any>{
        this.rellenarFormData(residencias);
        this.for_data.append("accion","editar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("f",f);
        return this.h.post(host + 'admin/residencias.php', this.for_data);
    }
    
    deleteResidencia(idResidencia):Observable<any>{
        this.for_data.append("accion","eliminar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("idResidencia",idResidencia);
        return this.h.post(host + 'admin/residencias.php', this.for_data);
    }

    rellenarFormData(residencias: Residencia){
        this.for_data = new FormData();
        this.for_data.append("idResidencia",residencias.idResidencia);
        this.for_data.append("titulo",residencias.titulo);
        this.for_data.append("fecha_de_entrega",residencias.fecha_de_entrega);
        this.for_data.append("caratula",residencias.caratula);
        this.for_data.append("num_residentes",residencias.num_residentes);
        this.for_data.append("archivo",residencias.archivo);
        this.for_data.append("dependencia",residencias.dependencia);
        this.for_data.append("periodo",residencias.periodo);       
    }
    

    mostrar():Observable<any>{
        this.for_data.append("token",sesion.token);
        this.for_data.append("accion","mostrar");
        return this.h.post(host + 'admin/residencias.php', this.for_data);
    }
}