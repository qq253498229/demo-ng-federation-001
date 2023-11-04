import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { SystemAction } from './system.action';

export interface SystemStateModel {
  /**
   * 临时数据
   */
  tempData?: any;
}

@State<SystemStateModel>({
  name: 'system',
  defaults: {},
})
@Injectable({
  providedIn: 'root',
})
export class SystemState {

  constructor(
  ) {
  }

  @Action(SystemAction.SaveTempData)
  saveTempData(ctx: StateContext<SystemStateModel>, {data}: SystemAction.SaveTempData) {
    ctx.patchState({tempData: data});
  }
}
