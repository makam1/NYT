import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imageUrl:string='/assets/images/photo.png';
  fileToUpload: File=null;

  creerUserData={}

  constructor(private _auth: AuthService,
    private _router: Router,
   ) { }

  ngOnInit() {
  }

 creerUser () {
  this._auth.creerUser(this.creerUserData,this.fileToUpload)
  .subscribe(
    res =>console.log(res) ,
    err => console.log(err)
  )
}


handleInputFile(file: FileList){
  this.fileToUpload= file.item(0);

  var reader = new FileReader();

  reader.onload = (event:any)=>{
    this.imageUrl=event.target.result
  }
  reader.readAsDataURL(this.fileToUpload)
}



}
