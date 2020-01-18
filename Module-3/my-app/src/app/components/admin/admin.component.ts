import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userInformation = {
    name: 'ABC',
    email: 'abc@gmail.com',
    phoneNumber: 12345678
  }

  allUserInformation = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this.allUserInformation.push(JSON.parse(JSON.stringify(this.userInformation)));
    this._data.updateUsers(this.allUserInformation)

  }

  storeUserInformation() {
    this.allUserInformation.push(JSON.parse(JSON.stringify(this.userInformation)))
    this._data.updateUsers(this.allUserInformation)

  }

}
