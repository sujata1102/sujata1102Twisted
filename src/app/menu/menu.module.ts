import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { StarComponent } from './star/star.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    MenuComponent,
    MenuDetailComponent,
    StarComponent,
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class MenuModule { }
