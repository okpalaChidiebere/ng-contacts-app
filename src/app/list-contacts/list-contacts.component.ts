import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

export type Contact = {
  id: string;
  name: string;
  handle: string;
  avatarURL: string;
};

@Component({
  selector: 'app-list-contacts',
  inputs: ['contacts', 'onDeleteContact'],
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent implements OnInit, OnChanges {
  contacts: Contact[] | null = null;
  showingContacts: Contact[] | null = null;
  onDeleteContact: (contact: Contact) => void | null;
  query: string | null = '';

  constructor() {}

  ngOnInit(): void {
    //verify our contacts props is gotten
    console.log(this.contacts);
    this.showingContacts = this.contacts;
  }

  ngOnChanges(changes: SimpleChanges) {
    /**
     * Here we listen for when the `contacts` input(props) from the parent
     * component changes as of the remove button clicked
     */
    this.showingContacts = this.contacts;
    // console.log(changes);
  }

  updateQueryResult = () => {
    //this will update the Ui based on the `query` from data
    this.showingContacts =
      this.query === ''
        ? this.contacts
        : this.contacts.filter((c) =>
            c.name.toLowerCase().includes(this.query.toLowerCase())
          );
  };

  clearQuery() {
    this.query = '';
    this.showingContacts = this.contacts;
  }
}
