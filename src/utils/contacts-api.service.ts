import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Contact } from 'src/app/contacts.service';

const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:5001';

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
  Accept: 'application/json',
  Authorization: token,
};

/**
 * Also we will be injecting the http service into the Service.
 * So we have to add the Injectable. Otherwise its optional
 */
@Injectable({
  providedIn: 'root',
})
export class ContactsApiService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<{ contacts: Contact[] }>(`${api}/contacts`, {
      headers,
    });
  }

  remove(contact: Contact) {
    this.http.delete<{ contact: Contact }>(`${api}/contacts/${contact.id}`, {
      headers,
    });
    // .subscribe({
    //   next: (response) => console.log(response.contact),
    //   error: (e) => console.error(e),
    //   complete: () => console.info('complete'),
    // });
  }

  create(contact: Contact) {
    return this.http.post<Contact>(`${api}/contacts`, JSON.stringify(contact), {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
    });
  }
}
