import { TestBed } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FizzBuzzService = TestBed.get(FizzBuzzService);
    expect(service).toBeTruthy();
  });

  let service = new FizzBuzzService();
  let number = 30

//step two generate the random number
it(`should get a random number for loop`, () => {
  // expect(service.getRandomNumberForLoop).not.toBeNaN();
  // expect(service.getRandomNumberForLoop).toBeGreaterThan(0);
  // number = service.getRandomNumberForLoop;
})

  //checking if it is divisible by 3.. buzz
  it(`testing if number ${number} is buzz`, () => {  
    expect(service.isBuzz(number)).toBe(true,`number ${number} is buzz`);
  })

  //checking if it is divisible by 5.. fizz
  it(`testing if number ${number} is fizz`, () => {
    expect(service.isFizz(number)).toBe(true,`number ${number} is fizz`);
  })

});

