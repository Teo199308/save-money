import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'save-money';

  ngOnInit(): void {
    const totalDias = 183;
    const arrayDeDias = Array.from({ length: totalDias }, (_, index) => index + 1);

    // Multiplicar cada elemento por 1000 para obtener el valor en miles
    const arrayValoresMonetarios = arrayDeDias.map((valor) => valor * 1000);

    // Sumar los valores en el array
    const sumaTotal = arrayValoresMonetarios.reduce((acumulador, valorActual) => acumulador + valorActual, 0);

    console.log("El valor total en miles es:", sumaTotal);
  }
}
