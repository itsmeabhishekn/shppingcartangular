import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent {

  data:any=[]
  constructor(private api:ApiService){
    this.api.fetchProducts().subscribe(
      (response:any)=>{
this.data=response;
      }
    )
    console.log(this.data)

  }

}
