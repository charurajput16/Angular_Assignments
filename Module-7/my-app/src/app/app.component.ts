import { Component, HostListener } from '@angular/core';
import { TestPipe } from './test.pipe';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  clickCount = 0;
  constructor(private _testPipe: TestPipe, private _testService: TestService) {
    this.addMessage();
  }

  addMessage() {
    this._testService.add("Hello");
  }

  clearMessage() {
    this._testService.clear();
  }

}
