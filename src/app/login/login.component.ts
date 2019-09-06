import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {}

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        let jwt= res.body;
        console.log(jwt);
        this._auth.saveToken(jwt);
        this._router.navigate(['/partenaire'])
      },
      err => console.log(err)
    )
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
}
