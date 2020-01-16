import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() allUserInformation = []
  userName: string
  searchRecord = {}

  constructor() { }

  ngOnInit() {

  }

  getRecord() {
    this.searchRecord = {};
    this.searchRecord = (this.userName ? this.allUserInformation.filter((data) =>
      (data.name.toLowerCase().indexOf(this.userName) !== -1))[0] : {})
  }
}
