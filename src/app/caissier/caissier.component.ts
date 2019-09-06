import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.css']
})
export class CaissierComponent implements OnInit {
  imageUrl:string='/assets/images/photo.png';
  fileToUpload: File=null;

  caissierData={}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  addCaissier() {
    this._auth.addCaissier(this.caissierData,this.fileToUpload)
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
