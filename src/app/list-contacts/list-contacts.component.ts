import { Component, OnInit } from '@angular/core';

export type Contacts = {
  id: string;
  name: string;
  handle: string;
  avatarURL: string;
};

@Component({
  selector: 'app-list-contacts',
  inputs: ['contacts'],
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent implements OnInit {
  contacts: Contacts[] | null = null;
  constructor() {}

  ngOnInit(): void {
    //verify our contacts props is gotten
    console.log(this.contacts);
  }
}
