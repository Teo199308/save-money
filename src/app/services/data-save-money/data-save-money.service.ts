import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { finalize, map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataSaveMoneyService {
  private _generatedNumbers = new Set<{ randomNumber: number, date: string }>();
  private _totalNumbers = 10;

  randomNumber!: number;

  constructor() { }

  startNumberAnimation(): Observable<number> {
    return interval(50)
      .pipe(
        take(30),
        finalize(() => {
          if (this.randomNumber !== undefined) {
            this._generatedNumbers.add({ randomNumber: this.randomNumber, date: new Date().toDateString() });
          }
          console.log(this._generatedNumbers);
        }),
        map((() => this._generateRandomNumber()))
      );
  }

  private _generateRandomNumber() {
    if (this._generatedNumbers.size < this._totalNumbers) {
      const availableNumbers = Array.from({ length: this._totalNumbers }, (_, i) => i + 1)
        .filter(num => !this._generatedNumbersHasRandomNumber(num));

      const randomIndex = Math.floor(Math.random() * availableNumbers.length);
      this.randomNumber = availableNumbers[randomIndex];
    }
    return this.randomNumber;
  }

  private _generatedNumbersHasRandomNumber(randomNumber: number): boolean {
    return Array.from(this._generatedNumbers.values()).some(generatedNumber => generatedNumber.randomNumber === randomNumber);
  }
}
