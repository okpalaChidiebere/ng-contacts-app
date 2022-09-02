import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { ContactsApiService } from 'src/utils/contacts-api.service';

export type Contact = {
  id: string;
  name: string;
  handle: string;
  avatarURL: string;
};

/**
 * `providedIn: 'root'` will make the contact service to be available through out the application
 * that why we added it here. This class will be initialized once through out
 * our application lifecycle and will be pass down to the child components
 *
 * NOTE: If we wanted the Contacts service to be only available to the
 * ListContact Component, we would have just added it specifically to
 * that component and not here
 */
@Injectable({
  providedIn: 'root', //shortcut for adding a service to the providers array of the app.module
})
export class ContactsService {
  private contactsEmitter: BehaviorSubject<Array<Contact>> =
    new BehaviorSubject(Array());

  public readonly contacts: Observable<Array<Contact>> =
    this.contactsEmitter.asObservable();

  constructor(private contactsApi: ContactsApiService) {}

  getContacts() {
    return this.contacts;
  }

  setContacts(contacts: Contact[]) {
    this.contactsEmitter.next(contacts);
  }

  removeContact(contact: Contact) {
    //assign a new array removing the specific contact passed in
    this.contactsEmitter.next(
      this.contactsEmitter.getValue().filter((c) => {
        return c.id !== contact.id;
      })
    );

    //remove the contact from the server as well
    this.contactsApi.remove(contact);
  }

  createContact(contact: Contact) {
    this.contactsApi.create(contact).subscribe((contact) => {
      this.contactsEmitter.next(
        this.contactsEmitter.getValue().concat([contact])
      );
    });
  }
}
