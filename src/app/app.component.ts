import { Component } from '@angular/core';
import { Contact } from './list-contacts/list-contacts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  /**
   * Having the contacts inside of angular allows us to hook into an
   * angular state for our UI to be able to reflect the state changes
   */
  contacts: Contact[] | null = [
    {
      id: 'karen',
      name: 'Karen Isgrigg',
      handle: 'karen_isgrigg',
      avatarURL: 'http://localhost:5001/karen.jpg',
    },
    {
      id: 'richard',
      name: 'Richard Kalehoff',
      handle: 'richardkalehoff',
      avatarURL: 'http://localhost:5001/richard.jpg',
    },
    {
      id: 'tyler',
      name: 'Tyler McGinnis',
      handle: 'tylermcginnis',
      avatarURL: 'http://localhost:5001/tyler.jpg',
    },
  ];

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
  };
}
