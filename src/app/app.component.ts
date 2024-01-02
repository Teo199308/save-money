import { Component, OnInit } from '@angular/core';
import { MAXIMUN_SAVE, MINIMUN_SAVE, TOTAL_DAYS } from 'src/app/constants/shared.consts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const totalDias = TOTAL_DAYS;
    const arrayDeDias = Array.from({ length: totalDias }, (_, index) => index + 1);

    const arrayValoresMonetarios = arrayDeDias.map((valor) => {
      return valor <= 60
        ? valor * MAXIMUN_SAVE
        : valor * MINIMUN_SAVE;
    });

    // Sumar los valores en el array
    const sumaTotal = arrayValoresMonetarios.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
  }
}
