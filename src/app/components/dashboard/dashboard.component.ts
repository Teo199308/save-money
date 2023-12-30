import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUserName: string | null = '';

  constructor(
    private readonly _loginService: LoginService
  ) { }

  ngOnInit(): void {

    this.currentUserName = this._loginService.user.user.displayName;
  }


}
