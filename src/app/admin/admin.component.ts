import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  imageUrl:string='/assets/images/photo.png';
  fileToUpload: File=null;

  adminData={}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  addAdmin() {
    this._auth.addAdmin(this.adminData,this.fileToUpload)
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
