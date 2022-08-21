import { Component, OnInit } from '@angular/core';

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
export class ListContactsComponent implements OnInit {
  contacts: Contact[] | null = null;
  onDeleteContact: (contact: Contact) => void | null;
  constructor() {}

  ngOnInit(): void {
    //verify our contacts props is gotten
    console.log(this.contacts);
  }
}
