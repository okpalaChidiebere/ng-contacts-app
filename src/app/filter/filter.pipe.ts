import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../contacts.service';

@Pipe({
  name: 'filter',
  /**
   * By default its `pure` attribute is true which is fine for us because
   * we don't need the pipe to re-calculate everytime the contactsList is updated
   */
  // pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(contacts: Contact[], ...args: unknown[]): Contact[] {
    const query = args[0] as string;

    if (!contacts.length) {
      return [];
    }

    return query === ''
      ? contacts
      : contacts.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );
  }
}
