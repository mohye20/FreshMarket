import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _productService: ProductsService,
    private _cartService: CartService) {

  }

  categories: any[] = [];


  addToCart(productId: string) {
    this._cartService.addToCart(productId).subscribe({
      next: (res) => {
        console.log(res);

      },
      error: (err) => {
        console.log(err);

      },
    })
  }

  

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 7
      },

    },
    nav: true
  }


  products: Product[] = [];
  searchTerm: string = '';
  ngOnInit(): void {
    this._productService.getProducts().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res.data;


      }
    })

    this._productService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.data
      }
    })
  }

  

}
