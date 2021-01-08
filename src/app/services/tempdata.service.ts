import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TempdataService {

  private usersDetails = new BehaviorSubject('')

  constructor() { }

  setUsersDetails(data) {
    this.usersDetails.next(data);
  }

  getUsersDetails() {
    return this.usersDetails.asObservable();
  }


}//End
