import {Component, Input, OnInit} from '@angular/core';
import {Schedule} from '../schedule-list/schedule-list.component';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.css']
})
export class ScheduleItemComponent implements OnInit {
  @Input() value: Schedule;

  constructor() {
  }

  ngOnInit() {
  }

}
