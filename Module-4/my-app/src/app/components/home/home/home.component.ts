import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data = [{
    'name': 'My experiments with Truth',
    'author': 'M.K.Gandhi ',
    'price': '$145',
    'date': '1 January 2020'
  }, {
    'name': 'The Merchant of venice',
    'author': 'William shakespeare',
    'price': '$543',
    'date': '8 September 2020'
  }, {
    'name': 'A Tale of Two Cities',
    'author': 'Charles Dickens ',
    'price': '$64',
    'date': '11 January 2020'
  }, {
    'name': 'Origin of species ',
    'author': ' charles Darwin ',
    'price': '$283',
    'date': '16 January 2020'
  }, {
    'name': 'Time Machine ',
    'author': 'H.G. Wells ',
    'price': '$12',
    'date': '15 January 2020'
  }, {
    'name': 'Mein Kampf ',
    'author': ' Adolf Hitler ',
    'price': '$384',
    'date': '12 Februrary 2020'
  }, {
    'name': 'Invisible Man ',
    'author': 'H.G. Wells',
    'price': '$123',
    'date': '10 January 2020'
  }]

  constructor() { }

  ngOnInit() {
  }

}
