import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    this.allUserInformation.push(JSON.parse(JSON.stringify(this.userInformation)));
  }

  storeUserInformation() {
    this.allUserInformation.push(JSON.parse(JSON.stringify(this.userInformation)))
  }

}
