import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LayoutComponent } from './layout/layout.component';
import { NavListItemComponent } from './layout/nav-list-item/nav-list-item.component';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AuthenticationRoutingModule } from '../authentication/authentication-routing.module';
import { AgGridViewComponent } from './ag-grid/ag-grid-view/ag-grid-view.component';

@NgModule({
  declarations: [LayoutComponent, NavListItemComponent, AgGridViewComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatButtonModule,
    AuthenticationModule,
    AuthenticationRoutingModule,
    MatIconModule,
  ],
  exports: [LayoutComponent, AgGridViewComponent],
})
export class SharedModule {}
