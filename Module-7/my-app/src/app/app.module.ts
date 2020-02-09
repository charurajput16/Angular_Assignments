import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestPipe } from './test.pipe';
import { TestService } from './test.service';


@NgModule({
  declarations: [
    AppComponent,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TestService, TestPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
