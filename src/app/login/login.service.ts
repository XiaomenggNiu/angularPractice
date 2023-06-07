import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn = false;
  constructor() { }
  changState(){
    this.isLoggedIn = true;
  }
  isAuthorized(){
    return this.isLoggedIn;
  }
}
