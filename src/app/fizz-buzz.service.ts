import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  number: number;
  constructor() { }

  getRandomNumberForLoop() {
    this.number = parseInt(((Math.random()*100)/2).toFixed(0));
    return this.number;
  }

  isFizz(number: number): boolean {
    return number % 5 == 0;
  }

  isBuzz(number: number): boolean {
    return number % 3 == 0;
  }



}
