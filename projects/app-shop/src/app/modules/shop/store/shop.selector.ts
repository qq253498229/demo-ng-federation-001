import { Selector } from '@ngxs/store';
import { ShopState, ShopStateModel } from './shop.state';

export class ShopSelector {
  @Selector([ShopState])
  static form({form}: ShopStateModel) {
    return form?.model;
  }
}
