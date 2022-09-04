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
  showingContacts: Contact[] = [];
  query: string | null = '';
  private subscription: Subscription;

  constructor(public contactsService: ContactsService) {}

  //runs after the components mounts
  ngOnInit(): void {
    this.subscription = this.contactsService
      .getContacts()
      .subscribe((contacts) => {
        this.showingContacts = contacts;
        this.contacts = contacts;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); //don't forget to unsubscribe to avoid memory leaks
  }

  updateQueryResult = () => {
    const query = this.query;

    this.showingContacts =
      query === ''
        ? this.contacts
        : this.contacts.filter((c) =>
            c.name.toLowerCase().includes(query.toLowerCase())
          );
  };

  clearQuery() {
    this.query = '';
    this.showingContacts = this.contacts;
  }

  onRemoveContact(contact: Contact) {
    this.contactsService.removeContact(contact);
  }
}
