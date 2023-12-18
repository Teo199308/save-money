import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const totalDias = 334;
    const arrayDeDias = Array.from({ length: totalDias }, (_, index) => index + 1);

    const arrayValoresMonetarios = arrayDeDias.map((valor) => {
      return valor <= 60
        ? valor * 1000
        : valor * 100;
    });

    // Sumar los valores en el array
    const sumaTotal = arrayValoresMonetarios.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

    console.log("El valor total en miles es:", sumaTotal);
  }
}
