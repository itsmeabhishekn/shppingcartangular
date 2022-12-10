import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

  name = ""
  address = ""
  phNo = ""
  emailId = ""
  password = ""
  username = ""

  constructor(private api:ApiService){}

  readValue=()=>
  {
    let data:any = {
      
      "name":this.name,
      "address":this.address,
      "phNo":this.phNo,
      "emailId":this.emailId,
      "password":this.password,
      "username":this.username

    }
    console.log(data)
    this.api.addUser(data).subscribe(
      (response:any)=>
      {
        console.log(response)
      }
    )
  }

}





