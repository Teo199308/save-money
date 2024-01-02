import { Component, OnInit } from '@angular/core';
import { DataRandomNumber } from 'src/app/interfaces/data-random-number';
import { DataSaveMoneyService } from 'src/app/services/data-save-money/data-save-money.service';

@Component({
  selector: 'app-last-number',
  templateUrl: './last-number.component.html',
  styleUrls: ['./last-number.component.scss']
})
export class LastNumberComponent implements OnInit {
  lastNumberSelected!: number;

  constructor(
    private readonly _dataSaveMoneyService: DataSaveMoneyService
  ) { }

  ngOnInit() {
    this._dataSaveMoneyService.reloadData$
      .subscribe(() => {
        this._getLastNumber();
      });
  }

  private _getLastNumber() {
    const currentData = Array.from(this._dataSaveMoneyService.dataRandomNumber);

    if (currentData.length) {
      const currentDate: { date: Date; number: number; value: number; }[] = currentData.map((data: DataRandomNumber) => {
        const { date, ...curr } = data;
        const currentDate = date as string;
        const [day, month, year] = currentDate.split('/');
        return { ...curr, date: new Date(`${year}/${month}/${day}`) }
      });

      currentDate.sort((a, b) => b.date.getTime() - a.date.getTime());
      this.lastNumberSelected = currentDate[0].number;
    }
  }
}
