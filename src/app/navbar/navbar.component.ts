import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logOut() {
    this._authService.logOut();
  }
  isLogin: boolean = false;
  constructor(private _authService: AuthService) {
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

  }




}
