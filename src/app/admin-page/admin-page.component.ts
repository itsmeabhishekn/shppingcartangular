import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  userName=""
  password=""

  constructor(private router:Router){}

  readAdminValues=()=>
  {
    let adminData:any = {"username":this.userName,"password":this.password}
    console.log(adminData)
    if (this.userName =="admin" && this.password =="12345") {
      alert("Login succesfull")
      this.router.navigate(['/view'])
      
    }else
    {
      alert("Invalid Login")
      this.userName=""
      this.password=""
    }
  }

}
