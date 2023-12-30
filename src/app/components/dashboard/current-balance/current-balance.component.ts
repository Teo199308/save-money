import { Component } from '@angular/core';
import { DataSaveMoneyService } from 'src/app/services/data-save-money/data-save-money.service';

@Component({
  selector: 'app-current-balance',
  templateUrl: './current-balance.component.html',
  styleUrls: ['./current-balance.component.scss']
})
export class CurrentBalanceComponent {
  currentBalance = 0;

  constructor(
    private readonly _dataSaveMoneyService: DataSaveMoneyService
  ) { }

  ngOnInit() {
    this._calculateCurrentBalance();
  }

  private _calculateCurrentBalance() {
    const currentData = Array.from(this._dataSaveMoneyService.dataRandomNumber);

    this.currentBalance = currentData.reduce((acc, curr) => acc + curr.value, 0);
  }


}
