import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent {
  constructor(private api: ApiService) { }


   name = ""
  image = ""
  category = ""
  description = ""
  price = ""



  readValue = () => {
    let data: any = {


      "name": this.name,
      "image": this.image,
      "category": this.category,
      "description": this.description,
      "price": this.price

    }
    console.log(data)
    this.api.addProduct(data).subscribe(
      (response: any) => {
        console.log(response)
      }
    )
  }

} 