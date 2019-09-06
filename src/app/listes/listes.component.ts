import { Component, OnInit } from '@angular/core';
import { ListesService } from '../listes.service';

@Component({
  selector: 'app-listes',
  templateUrl: './listes.component.html',
  styleUrls: ['./listes.component.css']
})
export class ListesComponent implements OnInit {

  listes= []

  constructor(private _listeservice: ListesService) { }

  ngOnInit() {
    this._listeservice.listes()
    .subscribe(
      res => {console.log(res);
         this.listes =res },
      err => console.log(err)
    )
  }

  bloc(id:number){
    console.log(id)
    this._listeservice.bloc(id)
    .subscribe(
      res => {console.log(res);
         this.listes =res },
      err => console.log(err)
    )
  }

}
