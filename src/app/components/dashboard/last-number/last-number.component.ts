import { Component } from '@angular/core';
import { SortNumberService } from 'src/app/services/utilities/sort-number/sort-number.service';

@Component({
  selector: 'app-last-number',
  templateUrl: './last-number.component.html',
  styleUrls: ['./last-number.component.scss']
})
export class LastNumberComponent {

  constructor(
    public readonly _sortNumberService: SortNumberService
  ) { }

}
