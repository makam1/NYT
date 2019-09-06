import { Component, OnInit } from '@angular/core';
import { ListesService } from '../listes.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {

  contrats= []

  constructor(private _contratservice: ListesService,
    private _auth: AuthService) { }

  ngOnInit() {
    this._contratservice.contrat()
    .subscribe(
      res => {console.log(res);
         this.contrats =res },
      err => console.log(err)
    )
  }

  bloquer(id:number){
    console.log(id)
    this._contratservice.bloquer(id)
    .subscribe(
      res => {console.log(res);
         this.contrats =res },
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
