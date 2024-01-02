import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/components/shared/menu/menu';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent extends Menu {

  constructor(
    _router: Router,
    _loginService: LoginService,
  ) {
    super(
      _loginService,
      _router,
    );
  }

}
