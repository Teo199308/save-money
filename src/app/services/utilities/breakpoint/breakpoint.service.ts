import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointService {
  constructor(
    private readonly breakpointObserver: BreakpointObserver
  ) { }

  resizeScreen() {
    return this.breakpointObserver.observe([
      '(min-width: 768px)'
    ]).pipe(map(({ matches }: { matches: boolean }) => matches));
  }

}
