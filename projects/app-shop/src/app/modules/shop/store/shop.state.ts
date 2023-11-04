import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { ShopAction } from './shop.action';

export interface ShopStateModel {
  form: any;
}

@State<ShopStateModel>({
  name: 'shop',
  defaults: {
    form: {},
  },
})
@Injectable({
  providedIn: 'root',
})
export class ShopState {

  constructor() {
  }

  @Action(ShopAction.Submit)
  Submit(ctx: StateContext<ShopStateModel>) {
    console.log('Submit form', ctx.getState().form);
  }
}
