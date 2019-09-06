import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Router } from '@angular/router'
import { ListesService } from './listes.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _creerUrl = "http://localhost:8000/api/creer";

  private _admin = "http://localhost:8000/api/admin";

  private _user = "http://localhost:8000/api/user";

  private _caissier = "http://localhost:8000/api/caissier";

  private _addpartenaire = "http://localhost:8000/api/partenaire/new";

  private _loginUrl = "http://localhost:8000/api/login";

  private _envoi = "http://localhost:8000/api/operation/envoi";

  private _retrait = "http://localhost:8000/api/operation/retrait";

  jwt:string;
  username:string;
  statut:string;
  roles:Array<string>;
  info:false;


  constructor(private http: HttpClient,
    private _router: Router,
    private _listeservice:ListesService
    ) { }

  loginUser(user: any){
    return this.http.post<any>(this._loginUrl, user, {observe:'response'})
  }

  envoiOp(info:any){
    const formData: FormData= new FormData();
    formData.append('nomenvoyeur',info.nomenvoyeur);
    formData.append('prenomenvoyeur',info.prenomenvoyeur);
    formData.append('telephoneenvoyeur',info.telephoneenvoyeur);
    formData.append('ncienvoyeur',info.ncienvoyeur);
    formData.append('nombeneficiaire',info.nombeneficiaire);
    formData.append('prenombeneficiaire',info.prenombeneficiaire);
    formData.append('telephonebeneficiaire',info.telephonebeneficiaire);
    formData.append('type',info.type);
    formData.append('montant',info.montant);
    console.log(info)
    return this.http.post<any>(this._envoi, formData)
  }

  retraitOp(info:any){
    const formData: FormData= new FormData();
    formData.append('code',info.code);
    formData.append('ncibeneficiaire',info.ncibeneficiaire);
    console.log(info)
    return this.http.post<any>(this._retrait, formData)
  }


  creerUser(user,fileToUpload: any){
    const formData: FormData= new FormData();
    formData.append('imageFile',fileToUpload,fileToUpload.name);
    formData.append('username',user.username);
    formData.append('password',user.password);
    formData.append('nom',user.nom);
    formData.append('email',user.email);
    formData.append('telephone',user.telephone);
    return this.http.post<any>(this._creerUrl,formData)
  }

  addAdmin(user,fileToUpload: any){
    const formData: FormData= new FormData();
    formData.append('imageFile',fileToUpload,fileToUpload.name);
    formData.append('username',user.username);
    formData.append('password',user.password);
    formData.append('nom',user.nom);
    formData.append('email',user.email);
    formData.append('telephone',user.telephone);
    return this.http.post<any>(this._admin,formData)
  }

  addUser(user,fileToUpload: any){
    const formData: FormData= new FormData();
    formData.append('imageFile',fileToUpload,fileToUpload.name);
    formData.append('username',user.username);
    formData.append('password',user.password);
    formData.append('nom',user.nom);
    formData.append('email',user.email);
    formData.append('telephone',user.telephone);
    return this.http.post<any>(this._user,formData)
  }

  addCaissier(user,fileToUpload: any){
    const formData: FormData= new FormData();
    formData.append('imageFile',fileToUpload,fileToUpload.name);
    formData.append('username',user.username);
    formData.append('password',user.password);
    formData.append('nom',user.nom);
    formData.append('email',user.email);
    formData.append('telephone',user.telephone);
    return this.http.post<any>(this._caissier,formData)
  }

  addPartenaire(user,fileToUpload: any){
    const formData: FormData= new FormData();
    formData.append('imageFile',fileToUpload,fileToUpload.name);
    formData.append('username',user.username);
    formData.append('password',user.password);
    formData.append('nom',user.nom);
    formData.append('email',user.email);
    formData.append('telephone',user.telephone);
    formData.append('raisonsociale',user.raisonsociale);
    formData.append('ninea',user.ninea);
    formData.append('adresse',user.adresse);
    return this.http.post<any>(this._addpartenaire,formData)
  }

  loggedIn() {
    return localStorage.getItem('token')
  }

  logout(){
    this._router.navigate(['/login'])
    return localStorage.removeItem('token')

  }

  saveToken(jwt: string){
    localStorage.setItem('token', jwt['token']);
    this.jwt=jwt['token'];
    this.parseJWT();
  }

  parseJWT(){
    let jwtHelper= new JwtHelperService();
    let objJWT=jwtHelper.decodeToken(this.jwt);
    this.username=objJWT.username;
    this.statut=objJWT.statut;
    this.roles= objJWT.roles;
    console.log(this.roles);
    console.log(this.username);
    console.log(this.statut);
  }

  isAdmin(){
    return this.roles.indexOf("ROLE_SUPERADMIN")>=0;
  }
  isPartenaire(){
    return this.roles.indexOf("ROLE_ADMIN")>=0;
  }
  isCaissier(){
    return this.roles.indexOf("ROLE_CAISSIER")>=0;
  }
  isUser(){
    return this.roles.indexOf("ROLE_USER")>=0;
  }
  isConnecter(){
    return this.roles && (this.isAdmin() || this.isCaissier() || this.isPartenaire() || this.isUser());
  }

  isActif(){
    return this.statut
  }

  loadToken(){
    this.jwt= localStorage.getItem('token');
    this.parseJWT();
  }

}
