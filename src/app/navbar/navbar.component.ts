import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  numOfCartItems:number = 0;
  logOut() {
    this._authService.logOut();
  }
  isLogin: boolean = false;
  constructor(private _authService: AuthService , private  _cartService:CartService) {
    _authService.userData.subscribe({
      next: () => {
        if (_authService.userData.getValue() != null) {
          this.isLogin = true;
        }

        else {
          this.isLogin = false;
        }
      }
    })


   this._cartService.numOfCartItems.subscribe(res=>{
     this.numOfCartItems = res;
   })
  }






}
