import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {MainComponent} from './main/main.component';
import {Page404Component} from './page404/page404.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: '', redirectTo: '/main/home', pathMatch: 'full'},
      { path: 'home', component: HomeComponent}
    ]
  },
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
