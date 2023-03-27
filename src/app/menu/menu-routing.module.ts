import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent, title:'TwistedToppings | Menu'},
  { path: ':id',component:MenuDetailComponent, title:'TwistedToppings | Menu'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
