import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
  num1 = 10;
  num2 = 5;

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }

}
