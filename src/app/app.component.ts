import { Component } from '@angular/core';
import { Contacts } from './list-contacts/list-contacts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-contacts-app';
  contacts: Contacts[] | null = [
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
}
