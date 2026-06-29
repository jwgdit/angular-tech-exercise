import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // Keep in mind these should behave asynchronusly

  constructor() {}

  // The following method should return a key:value object for any static text needed for the view
  // Ex. 'form.label.title': 'Contact'
  getMessageBundle(): Observable<Record<string, string>> {
    return of({
      'form.label.title': 'Contact',
      'form.label.name': 'Name',
      'form.label.address': 'Address',
      'form.label.city': 'City',
      'form.label.state': 'State',
      'form.label.zip': 'Zip Code',
    });
  }

  // The following method should return a list of states used in the select input
  getStates() {}

  // The following method should accept the form values and return a success msg
  saveContacts() {}
}
