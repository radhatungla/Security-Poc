import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('admin','admin'),
  new User('user','user')
];
 
@Injectable()
export class AuthenticationService {

  constructor(
    private _router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this._router.navigateByUrl('/Login');
    //this._router.navigate(['Login']);
  }
 
  login(user){
    let authenticatedUser ;
    authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem('user', authenticatedUser);
      this._router.navigateByUrl('/main');
     // this._router.navigate(['Home']);      
      return true;
    }
    return false;
 
  }
 

   checkCredentials(){
    //this._router.navigateByUrl('login');
      this._router.navigate(['Home']);
    }
  } 

