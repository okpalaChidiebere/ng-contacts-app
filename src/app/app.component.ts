import { Component, OnInit } from '@angular/core';
import { Contact } from './list-contacts/list-contacts.component';
import * as ContactsAPI from '../utils/ContactsAPI';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  /**
   * Having the contacts inside of angular allows us to hook into an
   * angular state for our UI to be able to reflect the state changes
   */
  contacts: Contact[] = [];

  //runs after the components mounts
  ngOnInit(): void {
    /**
     * fetch the contacts from the remove server after the component mounts
     * which updates the local state, then updates the UI
     */
    ContactsAPI.getAll().then((contacts) => {
      this.contacts = contacts;
    });
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
