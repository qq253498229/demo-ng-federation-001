import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { ShopAction } from '../store/shop.action';

@Component({
  selector: 'app-list',
  template: `
    <p>
      shop works!
    </p>
    <form [formGroup]="myForm" (ngSubmit)="submit()" ngxsForm="shop.form">
      <table border="1">
        <tr>
          <td>名称</td>
          <td>
            <input type="text" formControlName="name">
          </td>
        </tr>
        <tr>
          <td>简介</td>
          <td>
            <input type="text" formControlName="desc">
          </td>
        </tr>
        <tr>
          <td>
            <button type="submit">提交</button>
          </td>
          <td>
            <button type="reset">重置</button>
          </td>
        </tr>
      </table>
    </form>
  `,
  styles: [],
})
export class ListComponent {
  myForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private store: Store,
  ) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      desc: [''],
    });
  }

  submit() {
    this.store.dispatch(new ShopAction.Submit());
  }
}
