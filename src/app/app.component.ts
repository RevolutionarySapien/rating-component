import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'rating-component';
  constructor() {}
  toggle: boolean = true;
  number: number = 0;

  on1() {
    this.number = 1;
    console.log(this.number);
  }

  on2() {
    this.number = 2;
    console.log(this.number);
  }

  on3() {
    this.number = 3;
    console.log(this.number);
  }

  on4() {
    this.number = 4;
    console.log(this.number);
  }

  on5() {
    this.number = 5;
    console.log(this.number);
  }

  onClick() {
    this.toggle = false;
  }
}
