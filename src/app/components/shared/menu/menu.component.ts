import { Component } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint/breakpoint.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  showSidenav = true;

  constructor(
    private readonly breakpointservice: BreakpointService
  ) { }

  ngOnInit() {
    this.breakpointservice.resizeScreen()
      .subscribe((matches: boolean) => this.showSidenav = matches)
  }

}
