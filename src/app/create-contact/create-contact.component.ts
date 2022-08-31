import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  form: FormGroup;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [''],
      handle: [''],
      avatarURL: [''],
    });
  }

  onSubmit() {
    const { value } = this.form;
    this.contactsService.createContact(value);
    this.router.navigate(['']);
  }

  onFileSelected(url: string) {
    this.form.patchValue({ avatarURL: url });
  }
}
