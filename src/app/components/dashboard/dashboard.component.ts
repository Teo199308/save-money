import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: `./dashboard.component.html`,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  currentUserName = '';

  constructor(
    private readonly _loginService: LoginService,
    private readonly _router: Router
  ) { }

  ngOnInit(): void {

    this.currentUserName = this._loginService.user;
  }

  logout() {
    this._loginService.logout()
      .then(() => {
        this._router.navigate(['auth']);
      })
      .catch((e) => console.log(e));
  }
}
