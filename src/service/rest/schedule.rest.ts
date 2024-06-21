
import api from '../rxjs'

export class ContactsRest {
  
  getSchedule() {
    return api.get(`/contacts`);
  }

  getContactById(id: string) {
    return api.get(`/contacts/${id}`);
  }
}