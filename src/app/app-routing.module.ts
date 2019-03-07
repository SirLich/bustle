import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {BasicSearchComponent} from './basic-search/basic-search.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, data: { title: 'Home Page' } },
  { path: 'search', component: BasicSearchComponent, data: { title: 'Get Started' } },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
