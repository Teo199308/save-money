import { Injectable } from '@angular/core';
import { DataRandomNumber } from 'src/app/interfaces/data-random-number';
import { DataSaveMoneyService } from 'src/app/services/data-save-money/data-save-money.service';

@Injectable({
  providedIn: 'root',
})
export class SortNumberService {
  private _lastNumberSelected!: DataRandomNumber;

  get lastNumberSelected() {
    return this._lastNumberSelected;
  }

  constructor(
    private readonly _dataSaveMoneyService: DataSaveMoneyService
  ) {
    this._reloadLastNumber();
  }

  private _reloadLastNumber() {
    this._dataSaveMoneyService.reloadData$
      .subscribe(() => {
        this._getLastNumber();
      });
  }

  private _getLastNumber() {
    const currentData = Array.from(this._dataSaveMoneyService.dataRandomNumber);

    if (currentData.length) {
      const currentDate = currentData.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        return dateB.getTime() - dateA.getTime();
      });
      this._lastNumberSelected = currentDate[0];
    }
  }
}
