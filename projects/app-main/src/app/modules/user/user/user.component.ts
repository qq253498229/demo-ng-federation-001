import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ShopSelector } from '@shop/store/shop.selector';

@Component({
  selector: 'app-user',
  template: `
    <p>
      user works!
    </p>
    <textarea rows="5" [(ngModel)]="msg"></textarea>
    <br>
    <button (click)="test()">test</button>
  `,
  styles: [],
})
export class UserComponent implements OnInit {
  msg = '';

  constructor(
      private store: Store,
  ) {
  }

  ngOnInit(): void {
  }

  test() {
    this.msg = JSON.stringify(this.store.selectSnapshot(ShopSelector.form));
    console.log('msg', this.msg);
  }
}
