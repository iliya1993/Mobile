import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import {ClientsComponent} from './customers/customers.component';
import {ManagersComponent} from './users/users.component';
import {MobilesComponent} from './products/products.component';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'clients', pathMatch: 'full' },
      { path: 'clients', component: ClientsComponent },
      { path: 'mobiles', component: MobilesComponent },
      { path: 'managers', component: ManagersComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
