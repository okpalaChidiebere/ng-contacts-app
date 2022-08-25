import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import * as ContactsAPI from '../../utils/ContactsAPI';

export type Contact = {
  id: string;
  name: string;
  handle: string;
  avatarURL: string;
};

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent implements OnInit, OnChanges {
  contacts: Contact[] = [];
  showingContacts: Contact[] = [];
  query: string | null = '';

  constructor() {}

  //runs after the component mounts
  ngOnInit(): void {
    /**
     * fetch the contacts from the remove server after the component mounts
     * which updates the local state, then updates the UI
     */
    ContactsAPI.getAll().then((contacts) => {
      this.contacts = contacts;
      this.showingContacts = this.contacts;
    });
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

  /** The contacts data we want to update lives here.
   * So it makes sense that the method to modify the contacts list
   * lives here.
   *
   * This method will be passed down to the child component to be
   * later on invoked when each item is clicked after we bind this
   * method to the button of each element
   * */
  removeContact = (contact: Contact): void => {
    //assign a new array removing the specific contact passed in
    this.contacts = this.contacts.filter((c) => {
      return c.id !== contact.id;
    });

    //remove the contact from the server as well
    ContactsAPI.remove(contact);
  };
}
