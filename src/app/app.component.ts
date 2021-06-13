import { Component } from '@angular/core';
import { RouterDataResolved } from '@ngxs/router-plugin';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wookie-movies';
  private destroy$ = new Subject<void>();

  constructor(actions$: Actions) {
    actions$.pipe(
      ofActionSuccessful(RouterDataResolved),
      takeUntil(this.destroy$)
    ).subscribe((action: RouterDataResolved) => { });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
