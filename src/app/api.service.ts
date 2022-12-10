import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addProduct=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/add",dataToSend)
  }

  addUser=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/register",dataToSend)
  }
  fetchProducts=()=>{
    return this.http.get('http://localhost:8080/viewall')
  }

  loginUser = (data:any)=>{
    return this.http.post("http://localhost:8080/userSearch", data)
  }

  getUserById = (data:any)=>{
    return this.http.post("http://localhost:8080/getUID", data)
  }
}
