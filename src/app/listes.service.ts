import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ListesService {

  private _listes = "http://localhost:8000/api/partenaire/liste";
  private _operations = "http://localhost:8000/api/partenaire/operation";
  private _contrat = "http://localhost:8000/api/utilisateur";

  private _bloquer="http://localhost:8000/api/";

  private _bloc="http://localhost:8000/api/partenaire/";

  private _info="http://localhost:8000/api/info";

  
  constructor(private http: HttpClient,
    private _router: Router) { }

  listes(){
    return this.http.get<any>(this._listes)
  }

  listesoparations(){
    return this.http.get<any>(this._operations)
  }

  contrat(){
    return this.http.get<any>(this._contrat)
  }

  bloquer(id){
    return this.http.get<any>(this._bloquer+id+'/bloquer')
  }

  bloc(id){
    return this.http.get<any>(this._bloc+id+'/bloquer')
  }

  info(){
    return this.http.get<any>(this._info)
  }


}

