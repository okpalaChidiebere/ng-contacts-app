import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  query: string | null = '';
  private subscription: Subscription;

  constructor(public contactsService: ContactsService) {}

  //runs after the components mounts
  ngOnInit(): void {
    this.subscription = this.contactsService
      .getContacts()
      .subscribe((contacts) => {
        this.contacts = contacts;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); //don't forget to unsubscribe to avoid memory leaks
  }

  clearQuery() {
    this.query = '';
  }

  onRemoveContact(contact: Contact) {
    this.contactsService.removeContact(contact);
  }
}
