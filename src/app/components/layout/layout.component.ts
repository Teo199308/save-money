import { Component } from '@angular/core';
import { BreakpointService } from 'src/app/services/breakpoint/breakpoint.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  isSidenav = true;

  constructor(
    private readonly _breakpointService: BreakpointService
  ) { }

  ngOnInit() {
    this._breakpointService.resizeScreen()
      .subscribe((matches: boolean) => this.isSidenav = matches);
  }

}
