import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  submitted = false;
  private userInformation = {
    'userName': '',
    'password': ''
  }

  constructor(private _router: Router) { }

  ngOnInit() { }

  onSubmit() {
    if (this.userInformation.userName.trim() != '' && this.userInformation.password.trim() != '') {
      this._router.navigateByUrl('/home');
    } else {
      alert('Please enter user name and password')
    }
  }

}
