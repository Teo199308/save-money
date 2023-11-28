import { Component } from '@angular/core';
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
      .then((res) => {
        console.log(res);
        this._router.navigate(['']);
      })
      .catch((e) => {
        console.log(e)
      });
  }

}
