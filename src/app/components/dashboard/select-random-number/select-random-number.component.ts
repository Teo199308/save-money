import { Component } from '@angular/core';
import confetti from 'canvas-confetti';

import { DateTime } from "luxon";
import { Observable, interval } from 'rxjs';
import { finalize, map, take } from 'rxjs/operators';
import { DataRandomNumber } from 'src/app/interfaces/data-random-number';
import { DataSaveMoneyService } from 'src/app/services/data-save-money/data-save-money.service';

@Component({
  selector: 'app-select-random-number',
  templateUrl: './select-random-number.component.html',
  styleUrls: ['./select-random-number.component.scss']
})
export class SelectRandomNumberComponent {
  private _totalNumbers = 10;
  private _dt = DateTime;

  private _defaultConffeti = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  };

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
            const dataRandomNumber: DataRandomNumber = this._createDataRandomNumber();

            this._saveDataRandomNumber(dataRandomNumber);
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
    return Array.from(this._dataSaveMoneyService.generatedNumbers.values()).some(number => number === randomNumber);
  }

  private _createDataRandomNumber(): DataRandomNumber {
    return {
      number: this.randomNumber,
      date: this._dt.now().toFormat('dd/MM/yy'),
      value: this._calculateValue()
    };
  }

  private _saveDataRandomNumber(dataRandomNumber: DataRandomNumber) {
    this._dataSaveMoneyService.saveRandomNumber(dataRandomNumber)
      .then(() => {
        this._showConffeti();
        this._dataSaveMoneyService.getSelectedNumbers();
      })
      .catch((e) => console.log(e));
  }

  private _showConffeti() {
    confetti({
      ...this._defaultConffeti,
      particleCount: 100,
      origin: { y: 0.6 },
      scalar: 1.2,
      shapes: ['star']
    });
  }

  private _calculateValue() {
    return this.randomNumber <= 60
      ? this.randomNumber * 1000
      : this.randomNumber * 100;
  }

}
