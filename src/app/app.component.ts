import { Component, OnInit} from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'ngApp';
  constructor(private _auth: AuthService){}
  ngOnInit(){
    this.loadToken();
  }
  isAdmin(){
    return this. _auth.isAdmin();
  }
  isCaissier(){
    return this. _auth.isCaissier();
  }
  isPartenaire(){
    return this. _auth.isPartenaire();
  }
  isUser(){
    return this. _auth.isUser();
  }
  isConnecter(){
    return this. _auth.isConnecter();
  }
  loadToken(){
    return this. _auth.loadToken();
  }

}
