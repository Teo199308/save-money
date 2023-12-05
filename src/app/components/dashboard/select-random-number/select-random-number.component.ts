import { Component } from '@angular/core';
import { DateTime } from "luxon";
import { Observable, interval } from 'rxjs';
import { finalize, map, take } from 'rxjs/operators';
import { DataSaveMoneyService } from 'src/app/services/data-save-money/data-save-money.service';


@Component({
  selector: 'app-select-random-number',
  templateUrl: './select-random-number.component.html',
  styleUrls: ['./select-random-number.component.scss']
})
export class SelectRandomNumberComponent {
  private _totalNumbers = 10;
  private _dt = DateTime;

  randomNumber!: number;
  numberAnimation$!: Observable<number>;

  currentDate = new Date();

  constructor(
    private readonly _dataSaveMoneyService: DataSaveMoneyService
  ) { }

  startNumberAnimation() {
    this.numberAnimation$ = interval(50)
      .pipe(
        take(30),
        map((() => this._generateRandomNumber())),
        finalize(() => {
          if (this.randomNumber !== undefined) {
            const dataRandomNumber = { number: this.randomNumber, date: this._dt.now().toFormat('dd/MM/yy') }
            this._dataSaveMoneyService.saveRandomNumber(dataRandomNumber);
          }
        })
      );
  }

  private _generateRandomNumber() {
    if (this._dataSaveMoneyService.generatedNumbers.size < this._totalNumbers) {
      const availableNumbers = Array.from({ length: this._totalNumbers }, (_, i) => i + 1)
        .filter(num => !this._generatedNumbersHasRandomNumber(num));

      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      this.randomNumber = availableNumbers[randomIndex];
    }
    return this.randomNumber;
  }

  private _generatedNumbersHasRandomNumber(randomNumber: number): boolean {
    return Array.from(this._dataSaveMoneyService.generatedNumbers.values()).some(generatedNumber => generatedNumber.number === randomNumber);
  }
}
