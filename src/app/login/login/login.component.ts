import { Component, OnInit } from '@angular/core';
// import { AuthServiceService } from 'src/app/shared/auth-service.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  // loginFlag = false;
  constructor(private login: LoginService) { }

  ngOnInit(): void {
  }

  onLogIn(){
    this.login.changState();
  }

}
