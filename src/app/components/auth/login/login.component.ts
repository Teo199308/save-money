import { Component } from '@angular/core';
import { UserCredential } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private _loginService: LoginService,
    private _router: Router
  ) { }


  loginWithGoogle() {
    this._loginService.loginWithGoogle()
      .then((resp: UserCredential) => {
        this._loginService.user = resp;
        this._router.navigate(['/dashboard']);
      })
      .catch((e) => {
        console.log(e)
      });
  }

}
