import { Component } from '@angular/core';
import { Router,Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {

constructor(private api:ApiService,private route:Router){}

emailId=" "
password = ""

readValues =()=>
{

  let data:any = {
    "emailId":this.emailId,
    "password":this.password
  }

  this.api.loginUser(data).subscribe(
    (response:any)=> {
      this.emailId=""
      this.password=""

      if(response.status=="success")
      {
        let id = response.userid
        console.log(id);
        localStorage.setItem("userInfo",id)
        this.route.navigate(["/viewprofile"])
      }
      else
      {
        alert(response.message)
      }
    }
  )

}

}
