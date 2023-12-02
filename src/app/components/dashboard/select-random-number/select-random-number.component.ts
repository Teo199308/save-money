import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSaveMoneyService } from 'src/app/services/data-save-money/data-save-money.service';


@Component({
  selector: 'app-select-random-number',
  templateUrl: './select-random-number.component.html',
  styleUrls: ['./select-random-number.component.scss']
})
export class SelectRandomNumberComponent {
  numberAnimation$!: Observable<number>;

  constructor(
    private readonly _dataSaveMoneyService: DataSaveMoneyService
  ) { }

  startNumberAnimation() {
    this.numberAnimation$ = this._dataSaveMoneyService.startNumberAnimation();
  }
}
