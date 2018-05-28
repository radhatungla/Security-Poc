import { Component, OnInit } from '@angular/core';
import { User, AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css',
]
})
export class LoginComponent  {

 
  public user = new User('','');
  public errorMsg = '';
 public activePath ;
  constructor(
      private _service:AuthenticationService) {
       this.activePath = 'login'
      }

      login() {
      if(!this._service.login(this.user)){
          this.errorMsg = 'Failed to login';
      }
  }
}
