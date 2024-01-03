import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import confetti from 'canvas-confetti';

import { DateTime } from "luxon";
import { Observable, interval } from 'rxjs';
import { finalize, map, take } from 'rxjs/operators';
import { AlertModalComponent } from 'src/app/components/shared/alert-modal/alert-modal.component';
import { MAXIMUN_SAVE, MINIMUN_SAVE, TOTAL_DAYS } from 'src/app/constants/shared.consts';
import { DataRandomNumber } from 'src/app/interfaces/data-random-number';
import { DataSaveMoneyService } from 'src/app/services/data-save-money/data-save-money.service';
import { SortNumberService } from 'src/app/services/utilities/sort-number/sort-number.service';

@Component({
  selector: 'app-select-random-number',
  templateUrl: './select-random-number.component.html',
  styleUrls: ['./select-random-number.component.scss']
})
export class SelectRandomNumberComponent {
  private _totalNumbers = TOTAL_DAYS;
  private _dt = DateTime;

  private _defaultConffeti = {
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.95,
    startVelocity: 30,
    colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
  };

  randomNumber!: number;
  numberAnimation$!: Observable<number>;

  currentDate = new Date();

  constructor(
    private readonly _dataSaveMoneyService: DataSaveMoneyService,
    private readonly _sortNumberService: SortNumberService,
    private readonly _matDialog: MatDialog
  ) { }

  startNumberAnimation() {
    if (this._validateSelectedNumberIsAlready()) {
      this._openAlertModal();
      return;
    }

    this._initialSelectionNumber();
  }

  private _validateSelectedNumberIsAlready() {
    const currentDate = this._dt.now().toFormat('dd/MM/yy');
    return currentDate === this._sortNumberService.lastNumberSelected.date;
  }

  private _openAlertModal() {
    this._matDialog.open(AlertModalComponent, {
      data: {
        title: 'Lo sentimos!',
        content: 'Ya haz elegido un número hoy. Vuelve mañana'
      },
      autoFocus: false
    });
  }

  private _initialSelectionNumber() {
    this.numberAnimation$ = interval(50)
      .pipe(
        take(30),
        map((() => this._generateRandomNumber())),
        finalize(() => {
          if (this.randomNumber !== undefined) {
            const dataRandomNumber: DataRandomNumber = this._createDataRandomNumber();
            this._showConffeti();

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

  private _calculateValue() {
    return this.randomNumber <= 60
      ? this.randomNumber * MAXIMUN_SAVE
      : this.randomNumber * MINIMUN_SAVE;
  }

  private _showConffeti() {
    confetti({
      ...this._defaultConffeti,
      particleCount: 1000,
      origin: { y: 0.6 },
      scalar: 1.2,
      shapes: ['star']
    });
  }

  private _saveDataRandomNumber(dataRandomNumber: DataRandomNumber) {
    this._dataSaveMoneyService.saveRandomNumber(dataRandomNumber)
      .then(() => {
        this._dataSaveMoneyService.getSelectedNumbers();
      })
      .catch((e) => console.log(e));
  }
}
