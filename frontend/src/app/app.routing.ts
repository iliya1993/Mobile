import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {Pages} from './pages/pages.component';

export const routes: Routes = [
  { path: '**', redirectTo: 'pages/clients' },
  { path: '', redirectTo: 'pages/clients' ,pathMatch: 'full'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
