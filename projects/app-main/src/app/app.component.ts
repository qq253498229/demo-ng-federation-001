import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { environment } from '../environments/environment';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
  selector: 'app-root',
  template: `
    <button routerLink="/user">user</button>
    <button routerLink="/shop">shop</button>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent implements OnInit {

  constructor(
      private router: Router,
  ) {
  }

  ngOnInit(): void {
    let routes: Routes = [
      {path: '', redirectTo: 'user', pathMatch: 'full'},
      {path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
      {
        path: `shop`,
        loadChildren: () => loadRemoteModule({
          type: 'module',
          remoteEntry: environment.production ? '/assets/shop/remoteEntry.js' : 'http://localhost:4201/remoteEntry.js',
          exposedModule: './ShopModule',
        }).then(m => m.ShopModule),
      },
      {path: '**', component: NotFoundComponent},
    ];
    this.router.resetConfig(routes);
  }
}
