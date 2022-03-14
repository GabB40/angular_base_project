import { Injectable } from "@angular/core";
import { filter, map, tap } from "rxjs";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RouterNavigatedAction, routerNavigatedAction } from "@ngrx/router-store";
import { RouterState } from './routerSerializer';

@Injectable()
export class RouterEffects {

    routerNavigatedAction$ = createEffect(() => this.actions$.pipe(
        ofType<RouterNavigatedAction<RouterState>>(routerNavigatedAction),
        filter(routerNavigatedAction => routerNavigatedAction.payload.routerState.url.startsWith('/router')),
        map(routerNavigatedAction => routerNavigatedAction.payload.routerState),
        tap(routerState => console.log(
            'From routerNavigatedAction$ effect : routerState.url', routerState.url, 
            '\nFrom routerNavigatedAction$ effect : routerState.params', routerState.params,
            '\nFrom routerNavigatedAction$ effect : routerState.queryParams', routerState.queryParams
        )),
    ), { dispatch: false });

    constructor(private actions$: Actions) { }
}