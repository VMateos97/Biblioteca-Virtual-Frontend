import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sesion, host } from '../util';
import { AsesorInterno } from '../modelos/asesorinterno.model';

@Injectable()
export class AsesorInternoServices{
    public for_data: FormData;

    constructor(public h:HttpClient){
        this.for_data = new FormData();
    }

    addAsesorInterno(internos: AsesorInterno):Observable<any>{
        this.rellenarFormData(internos);
        this.for_data.append("accion","nuevo");
        this.for_data.append("token",sesion.token);
        return this.h.post(host + 'admin/internos.php', this.for_data);
    }
  
    editAsesorInterno(internos: AsesorInterno, f):Observable<any>{
        this.rellenarFormData(internos);
        this.for_data.append("accion","editar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("f",f);
        return this.h.post(host + 'admin/internos.php', this.for_data);
    }
    
    deleteAsesorInterno(idAsesorInterno):Observable<any>{
        this.for_data.append("accion","eliminar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("idAsesorInterno",idAsesorInterno);
        return this.h.post(host + 'admin/internos.php', this.for_data);
    }

    rellenarFormData(internos: AsesorInterno){
        this.for_data = new FormData();
        this.for_data.append("nombre_asesor_interno",internos.nombre_asesor_interno);
        this.for_data.append("puesto_asesor_interno",internos.puesto_asesor_interno);
        this.for_data.append("correo",internos.correo);        
    }

    mostrar():Observable<any>{
        this.for_data.append("token",sesion.token);
        this.for_data.append("accion","mostrar");
        return this.h.post(host + 'admin/internos.php', this.for_data);
    }
}