import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageInputComponent } from './image-input/image-input.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContactsComponent,
    CreateContactComponent,
    ImageInputComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
