import { Component } from '@angular/core';
import { TOTAL_BALANCE } from 'src/app/constants/shared.consts';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent {
  readonly goal = TOTAL_BALANCE;

}
