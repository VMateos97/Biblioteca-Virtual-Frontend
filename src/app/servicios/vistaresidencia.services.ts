import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { host, sesion } from "../util";

@Injectable()
export class VistaResidenciaServices{
    
    public for_data: FormData;
    constructor(
        public h:HttpClient
    ){
        this.for_data = new FormData();
    }

    mostrar(buscar): Observable<any>{
        this.for_data.append("accion","buscar-residencias");
        this.for_data.append("buscar",buscar);
        this.for_data.append("token",sesion.token);
        return this.h.post(host + 'usuario/vista.php',this.for_data);
    }

}