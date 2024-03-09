import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { sesion, host } from '../util';
import { AsesorExterno } from '../modelos/asesorexterno.model';

@Injectable()
export class AsesorExternoServices{
    public for_data: FormData;

    constructor(public h:HttpClient){
        this.for_data = new FormData();
    }

    addAsesorExterno(externos: AsesorExterno):Observable<any>{
        this.rellenarFormData(externos);
        this.for_data.append("accion","nuevo");
        this.for_data.append("token",sesion.token);
        return this.h.post(host + 'admin/externos.php', this.for_data);
    }
  
    editAsesorExterno(externos: AsesorExterno, f):Observable<any>{
        this.rellenarFormData(externos);
        this.for_data.append("accion","editar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("f",f);
        return this.h.post(host + 'admin/externos.php', this.for_data);
    }
    
    deleteAsesorExterno(idAsesorExterno):Observable<any>{
        this.for_data.append("accion","eliminar");
        this.for_data.append("token",sesion.token);
        this.for_data.append("idAsesorExterno",idAsesorExterno);
        return this.h.post(host + 'admin/externos.php', this.for_data);
    }

    rellenarFormData(externos: AsesorExterno){
        this.for_data = new FormData();
        this.for_data.append("nombre_asesor_externo",externos.nombre_asesor_externo);
        this.for_data.append("puesto_asesor_externo",externos.puesto_asesor_externo);
        this.for_data.append("correo",externos.correo);
        this.for_data.append("dependencia",externos.dependencia);        
    }

    mostrar():Observable<any>{
        this.for_data.append("token",sesion.token);
        this.for_data.append("accion","mostrar");
        return this.h.post(host + 'admin/externos.php', this.for_data);
    }
}