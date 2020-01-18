import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  allUserInformation = []
  userName: string
  searchRecord = {}

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.currentUserInformation.subscribe(users => this.allUserInformation = users)
  }

  getRecord() {
    this.searchRecord = {};
    this.searchRecord = (this.userName ? this.allUserInformation.filter((data) =>
      (data.name.toLowerCase().indexOf(this.userName) !== -1))[0] : {})
  }
}
