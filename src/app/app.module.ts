import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './component/shared/shared.module';
import { AboutComponent } from './component/about/about.component';
import { MembersComponent } from './component/members/members.component';
import { ContactsComponent } from './component/contacts/contacts.component';
@NgModule({
  declarations: [AppComponent, AboutComponent, MembersComponent, ContactsComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
