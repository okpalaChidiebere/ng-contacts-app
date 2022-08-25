import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ListContactsComponent, CreateContactComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
