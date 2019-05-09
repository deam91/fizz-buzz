import { Component, OnInit } from '@angular/core';
import { FizzBuzzService } from '../fizz-buzz.service';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.css']
})
export class FizzBuzzComponent implements OnInit {

  numbers: any = [];

  constructor(private service: FizzBuzzService) { }

  ngOnInit() {
  }

  getNumbers():any{

  }

}
