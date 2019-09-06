import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-retrait',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.css']
})
export class RetraitComponent implements OnInit {

  retraitData = {}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  retraitOp() {
    this._auth.retraitOp(this.retraitData)
    .subscribe(
      res =>console.log(res) ,
      err => console.log(err)
    )
  }

}
