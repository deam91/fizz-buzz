import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzComponent } from './fizz-buzz.component';
import { FizzBuzzService } from '../fizz-buzz.service';
import { setInjectImplementation } from '@angular/core/src/di/injector_compatibility';
import { isArray } from 'util';

describe('FizzBuzzComponent', () => {
  let component: FizzBuzzComponent;
  let fixture: ComponentFixture<FizzBuzzComponent>;

  //step one add the service provider that return to us a random number for loop
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FizzBuzzComponent ],
      providers: [ FizzBuzzService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create fizz-buzz', () => {
    expect(component).toBeTruthy();
  });

  it(`should result be an fizz-buzz array`,() => {
    expect(isArray(component.doProcess)).toBeFalsy();
  })



});
