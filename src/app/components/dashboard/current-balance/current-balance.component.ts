import { Component } from '@angular/core';
import { interval, map, takeWhile } from 'rxjs';
import { DataSaveMoneyService } from 'src/app/services/data-save-money/data-save-money.service';

@Component({
  selector: 'app-current-balance',
  templateUrl: './current-balance.component.html',
  styleUrls: ['./current-balance.component.scss']
})
export class CurrentBalanceComponent {
  currentBalance = 0;
  counter = 0;

  constructor(
    private readonly _dataSaveMoneyService: DataSaveMoneyService
  ) { }

  ngOnInit() {
    this._dataSaveMoneyService.reloadData$
      .subscribe(() => {
        this._calculateCurrentBalance();
      });
  }

  private _calculateCurrentBalance() {
    const currentData = Array.from(this._dataSaveMoneyService.dataRandomNumber);

    this.currentBalance = currentData.length ? currentData.reduce((acc, curr) => acc + curr.value, 0) : 0;
  }

  private _animationCurrentBalance() {
    const startValue = 0;
    const endValue = this.currentBalance;
    const animationDuration = 50;
    const intervalTime = animationDuration / (endValue - startValue);

    interval(intervalTime)
      .pipe(
        takeWhile(value => value <= endValue),
        map(value => startValue + value)
      )
      .subscribe(value => {
        this.counter = value;
      });
  }


}
