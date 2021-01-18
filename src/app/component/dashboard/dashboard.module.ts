import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, MatDialogModule, MatCardModule, SharedModule, MatTabsModule],
})
export class DashboardModule {}
