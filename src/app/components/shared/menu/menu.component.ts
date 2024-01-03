import { Component, OnInit } from '@angular/core';
import { BreakpointService } from 'src/app/services/utilities/breakpoint/breakpoint.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  showSidenav = true;

  constructor(
    private readonly _breakpointservice: BreakpointService
  ) { }

  ngOnInit() {
    this._breakpointservice.resizeScreen()
      .subscribe((matches: boolean) => this.showSidenav = matches)
  }

}
