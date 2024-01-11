import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.scss']
})
export class SharedCardComponent {

  @Input() title!: string;
  @Input() data!: string | number | null;
  @Input() class!: string[] | string;

}
