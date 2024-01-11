import { Component, OnInit } from '@angular/core';
import { MAXIMUN_SAVE, MINIMUN_SAVE, TOTAL_BALANCE, TOTAL_DAYS } from 'src/app/constants/shared.consts';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  goal = TOTAL_BALANCE;

  ngOnInit(): void {
    const arrayDeDias = Array.from({ length: TOTAL_DAYS }, (_, index) => index + 1);

    const arrayValoresMonetarios = arrayDeDias.map((valor) => {
      return valor <= 60
        ? valor * MAXIMUN_SAVE
        : valor * MINIMUN_SAVE;
    });

    // Sumar los valores en el array
    this.goal = arrayValoresMonetarios.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  }
}
