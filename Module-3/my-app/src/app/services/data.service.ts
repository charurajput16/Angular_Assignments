import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private allUserInformation = new BehaviorSubject([])
  currentUserInformation = this.allUserInformation.asObservable();

  constructor() { }

  updateUsers(_allUserInformation: Array<object>) {
    this.allUserInformation.next(_allUserInformation);
  }
}
