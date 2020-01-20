import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fixedDate: Date;
  inputDate: any;
  info = {
    passedYears: '',
    passedDays: '',
    passedHours: ''
  };

  constructor() {
    this.fixedDate = new Date('13 March 2018');
  }

  show(dateFormat) {
    if (moment(this.inputDate).format(dateFormat) == moment().format(dateFormat)) {
      let fixedDate = moment(this.fixedDate);
      this.info.passedYears = (Math.abs(fixedDate.diff(moment(this.inputDate), 'years'))).toString();
      this.info.passedDays = (Math.abs(fixedDate.diff(moment(this.inputDate), 'days'))).toString();
      this.info.passedHours = (Math.abs(fixedDate.diff(moment(this.inputDate), 'hours'))).toString();
    }
  }
}
