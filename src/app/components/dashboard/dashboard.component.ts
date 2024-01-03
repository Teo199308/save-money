import { Component, OnInit } from '@angular/core';
import { DataSaveMoneyService } from 'src/app/services/data-save-money/data-save-money.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  currentUserName: string | null = '';

  constructor(
    private readonly _loginService: LoginService,
    private readonly _dataSaveMoneyService: DataSaveMoneyService
  ) { }

  ngOnInit(): void {
    this.currentUserName = this._loginService.user.user.displayName;
  }


}
