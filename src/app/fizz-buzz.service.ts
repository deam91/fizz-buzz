import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FizzBuzzService {

  number: number;
  constructor() { }



  isFizz(number: number): boolean {
    return number % 5 == 0;
  }

  isBuzz(number: number): boolean {
    return number % 3 == 0;
  }



}
