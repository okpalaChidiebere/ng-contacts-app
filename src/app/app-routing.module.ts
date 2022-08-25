import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ListContactsComponent } from './list-contacts/list-contacts.component';

// sets up routes constant where you define your routes
const routes: Routes = [
  { path: 'create', component: CreateContactComponent },
  { path: '', component: ListContactsComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
