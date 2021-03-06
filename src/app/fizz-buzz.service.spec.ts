import {TestBed} from '@angular/core/testing';

import {FizzBuzzService} from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
  });

  it('should be created', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    expect(service).toBeTruthy();
  });

  const service = new FizzBuzzService();
  const number = service.getRandomNumberForLoop();

  // step two generate the random number
  it(`should get a random number for loop`, () => {
    expect(service.getRandomNumberForLoop()).toBeGreaterThan(1);
  });

  // get current number
  it(`should get a random number for loop`, () => {
    expect(service.getCurrentNumber()).toBeGreaterThan(1);
    expect(service.getCurrentNumber()).not.toBeNaN();
  });

  // checking if it is divisible by 3.. buzz
  it(`testing if number ${number} is buzz`, () => {
    expect(service.isBuzz(number)).toBe(true, `number ${number} is buzz`);
  });

  // checking if it is divisible by 5.. fizz
  it(`testing if number ${number} is fizz`, () => {
    expect(service.isFizz(number)).toBe(true, `number ${number} is fizz`);
  });

  // checking if it is fizz and buzz
  it(`testing if number ${number} is fizz-buzz`, () => {
    expect(() => {
      return service.isFizz(number) && service.isBuzz(number);
    }).toBe(true, `number ${number} is fizz-buzz`);
  });
});
