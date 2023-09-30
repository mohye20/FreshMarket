import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _productService: ProductsService) {
  }

  products: Product[] = [];
  searchTerm:string  = '';
  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res.data;


      }
    })

  }

}
