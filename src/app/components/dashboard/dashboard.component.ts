import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataRandomNumber } from 'src/app/interfaces/data-random-number';
import { DataSaveMoneyService } from 'src/app/services/data-save-money/data-save-money.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  loading = false;

  currentUserName: string | null = '';

  constructor(
    private readonly _loginService: LoginService,
    private readonly _router: Router,
    private readonly _dataSaveMoneyService: DataSaveMoneyService
  ) { }

  ngOnInit(): void {
    this.currentUserName = this._loginService.user.user.displayName;
    this._getSelectedNumbers();
  }

  private _getSelectedNumbers() {
    this.loading = true;

    this._dataSaveMoneyService.getSelectedNumbers()
      .then((response) => {
        const selectedNumbers = response.docs.map(doc => doc.data() as DataRandomNumber);

        this._dataSaveMoneyService.generatedNumbers = new Set(selectedNumbers);
        console.log(this._dataSaveMoneyService.generatedNumbers);
        this.loading = false;

      });
  }

  logout() {
    this._loginService.logout()
      .then(() => {
        this._router.navigate(['auth']);
        this._loginService.user = null;
      })
      .catch((e) => console.log(e));
  }
}
