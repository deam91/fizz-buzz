import {Component, OnInit} from '@angular/core';
import {FizzBuzzService} from '../fizz-buzz.service';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {

  results: any = [];

  constructor(private service: FizzBuzzService) {
  }

  ngOnInit() {
    this.doProcess();
  }

  doProcess() {
    const number = this.service.getRandomNumberForLoop();
    for (let i = 0; i < number; i++) {
      if (this.service.isFizzBuzz(i)) {
        this.results.push('Fizz-Buzz');
      } else if (this.service.isBuzz(i) && !this.service.isFizz(i)) {
        this.results.push('Buzz');
      } else if (this.service.isFizz(i) && !this.service.isBuzz(i)) {
        this.results.push('Fizz');
      } else {
        this.results.push('shitti..');
      }
    }
  }
}
