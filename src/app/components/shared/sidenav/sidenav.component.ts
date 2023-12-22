import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  isOpenMenu = false;
  isDarkThemeMode = false;

  constructor(
    private readonly _loginService: LoginService,
    private readonly _router: Router,
  ) { }

  toggleMenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  logout() {
    this._loginService.logout()
      .then(() => {
        this._router.navigate(['auth']);
        this._loginService.user = null;
      })
      .catch((e) => console.log(e));
  }

  toggleTheme() {
    this.isDarkThemeMode = !this.isDarkThemeMode;
  }

}
