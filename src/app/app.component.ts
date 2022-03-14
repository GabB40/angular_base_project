import { RouterState } from './store/router/routerSerializer';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { selectRouterState } from './store/router/router.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  routerState!: RouterState;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectRouterState).subscribe(routerState => this.routerState = routerState);
  }

}
