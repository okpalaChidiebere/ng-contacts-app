import { Component, OnInit } from '@angular/core';
import { ContactsApiService } from 'src/utils/contacts-api.service';

import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private contactsApi: ContactsApiService,
    private contactsService: ContactsService
  ) {}

  //runs after the components mounts
  ngOnInit(): void {
    /**
     * fetch the contacts from the remove server after the component mounts
     * which updates the local state, then updates the UI
     */
    this.contactsApi.getAll().subscribe((response) => {
      this.contactsService.setContacts(response.contacts);
    });
  }
}
