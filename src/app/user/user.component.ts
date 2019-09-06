import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  imageUrl:string='/assets/images/photo.png';
  fileToUpload: File=null;

  userData={}
  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  addUser() {
    this._auth.addUser(this.userData,this.fileToUpload)
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
