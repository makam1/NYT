import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {

  imageUrl:string='/assets/images/photo.png';
  fileToUpload: File=null;

  addPartenaireData={}
  constructor(private _auth: AuthService,
    private _router: Router,
   ) { }

  ngOnInit() {
  }
  
  isAdmin(){
    return this. _auth.isAdmin();
  }

 addPartenaire () {
  this._auth.addPartenaire(this.addPartenaireData,this.fileToUpload)
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
