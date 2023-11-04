import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopModule } from '@shop/shop.module';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { IconsProviderModule } from '../../../app-main/src/app/icons-provider.module';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShopModule,
    IconsProviderModule,
  ],
  providers: [
    {provide: NZ_I18N, useValue: zh_CN},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
