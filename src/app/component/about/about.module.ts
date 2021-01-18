import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { MatCardModule } from '@angular/material/card';
import { AboutComponent } from './about.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, AboutRoutingModule, MatCardModule, MatIconModule],
})
export class AboutModule {}
