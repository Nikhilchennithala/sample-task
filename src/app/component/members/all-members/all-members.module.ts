import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

import { AllMembersRoutingModule } from './all-members-routing.module';
import { AgGridModule } from 'ag-grid-angular';
import { AllMembersComponent } from './all-members.component';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '../../shared/shared.module';
import { AgGridViewComponent } from '../../shared/ag-grid/ag-grid-view/ag-grid-view.component';
import { from } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [AllMembersComponent],
  imports: [
    CommonModule,
    AllMembersRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatNativeDateModule,
    AgGridModule.withComponents([AgGridViewComponent]),
  ],
})
export class AllMembersModule {}
