import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sesion, host } from '../util';
import { Dependencia } from '../modelos/dependencia.model';

@Injectable()
export class DependenciaServices{
    public for_data: FormData;

    constructor(public h:HttpClient){
        this.for_data = new FormData();
    }

    addDependencia(dependencias: Dependencia):Observable<any>{
        this.rellenarFormData(dependencias);
        this.for_data.append("accion","nuevo");
        this.for_data.append("token",sesion.token);
        return this.h.post(host + 'admin/dependencias.php', this.for_data);
    }

    
    editDependencia(dependencias: Dependencia):Observable<any>{
        this.rellenarFormData(dependencias);
        this.for_data.append("accion","editar");
        this.for_data.append("token",sesion.token);
        return this.h.post(host + 'admin/dependencias.php', this.for_data);
    }
    
    deleteDependencia(rfc_dependencia):Observable<any>{
        this.for_data.append("accion","eliminar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("rfc_dependencia",rfc_dependencia);
        return this.h.post(host + 'admin/dependencias.php', this.for_data);
    }

    rellenarFormData(dependencias: Dependencia){
        this.for_data = new FormData();
        this.for_data.append("rfc_dependencia",dependencias.rfc_dependencia);
        this.for_data.append("nombre_dependencia",dependencias.nombre_dependencia);
        this.for_data.append("domicilio_dependencia",dependencias.domicilio_dependencia);
        this.for_data.append("colonia_dependencia",dependencias.colonia_dependencia);
        this.for_data.append("cp_dependencia",dependencias.cp_dependencia);
        this.for_data.append("fax_dependencia",dependencias.fax_dependencia);
        this.for_data.append("ciudad_dependencia",dependencias.ciudad_dependencia);
        this.for_data.append("tel_dependencia",dependencias.tel_dependencia);
        this.for_data.append("mision",dependencias.mision);
        this.for_data.append("giro",dependencias.giro);
        this.for_data.append("titular_dependencia",dependencias.titular_dependencia);
        this.for_data.append("puesto_titular",dependencias.puesto_titular);        
    }
    

    mostrar():Observable<any>{
        this.for_data.append("token",sesion.token);
        this.for_data.append("accion","mostrar");
        return this.h.post(host + 'admin/dependencias.php', this.for_data);
    }
}