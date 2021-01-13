import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

import { LayoutComponent } from './layout/layout.component';
import { NavListItemComponent } from './layout/nav-list-item/nav-list-item.component';
import { from } from 'rxjs';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, NavListItemComponent],
  imports: [CommonModule, MatToolbarModule, RouterModule],
  exports: [LayoutComponent],
})
export class SharedModule {}
