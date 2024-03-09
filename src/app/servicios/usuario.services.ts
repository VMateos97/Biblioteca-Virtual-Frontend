import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";
import { host } from "../util";

@Injectable()

export class UsuarioServices{
    constructor(public h:HttpClient){
        
    }

    login(usuario:string,pass:string): Observable<any>{
        let f = new FormData();
        f.append("usuario",usuario);
        f.append("password",pass);
        return this.h.post(host ,f );
    }
}