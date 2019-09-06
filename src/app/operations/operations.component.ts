import { Component, OnInit } from '@angular/core';
import { ListesService } from '../listes.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  envoiData = {}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  envoiOp() {
    this._auth.envoiOp(this.envoiData)
    .subscribe(
      res =>console.log(res) ,
      err => console.log(err)
    )
  }

}
