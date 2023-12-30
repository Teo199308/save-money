import { Component, OnInit } from '@angular/core';
import { DocumentData, QuerySnapshot } from '@angular/fire/firestore';
import { DataRandomNumber } from 'src/app/interfaces/data-random-number';
import { DataSaveMoneyService } from 'src/app/services/data-save-money/data-save-money.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  loading = false;

  currentUserName: string | null = '';

  constructor(
    private readonly _loginService: LoginService,
    private readonly _dataSaveMoneyService: DataSaveMoneyService
  ) { }

  ngOnInit(): void {
    this.loading = true;

    this.currentUserName = this._loginService.user.user.displayName;

    this._dataSaveMoneyService.reloadData$
      .subscribe(() => {
        this._getSelectedNumbers();
      });

    this._dataSaveMoneyService.reloadData$.next();
  }

  private _getSelectedNumbers() {

    this._dataSaveMoneyService.getSelectedNumbers()
      .then((response: QuerySnapshot<DocumentData>) => {
        const selectedNumbers: DataRandomNumber[] = response.docs.map(doc => doc.data() as DataRandomNumber);

        this._dataSaveMoneyService.generatedNumbers = new Set(selectedNumbers.map(({ number }: { number: number }) => number));

        this._dataSaveMoneyService.dataRandomNumber = new Set(selectedNumbers);

        console.log(this._dataSaveMoneyService.generatedNumbers);
        this.loading = false;

      });
  }


}
