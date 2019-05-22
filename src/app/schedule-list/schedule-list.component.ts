import {Component, ViewChild} from '@angular/core';
import {ModalDirective} from 'angular-bootstrap-md';
import {FormControl} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

export class Schedule {
  constructor(public id: number, public time: string, public subject: string, public location?: string,
              public description?: string, public state: string = 'inactive') {
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css'],
  animations: [
    trigger('scheduleState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.02)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class ScheduleListComponent {
  @ViewChild(ModalDirective) modal: ModalDirective;

  selectedSchedule: Schedule;
  items: Array<Schedule>;
  index: number;
  timeInput: FormControl;
  subjectInput: FormControl;
  locationInput: FormControl;
  descriptionInput: FormControl;

  idInputEdit: FormControl;
  timeInputEdit: FormControl;
  subjectInputEdit: FormControl;
  locationInputEdit: FormControl;
  descriptionInputEdit: FormControl;

  constructor() {
    this.index = 0;
    this.timeInput = new FormControl();
    this.subjectInput = new FormControl();
    this.locationInput = new FormControl();
    this.descriptionInput = new FormControl();

    this.idInputEdit = new FormControl();
    this.timeInputEdit = new FormControl();
    this.subjectInputEdit = new FormControl();
    this.locationInputEdit = new FormControl();
    this.descriptionInputEdit = new FormControl();

    this.items = [];
  }

  addNewItem() {
    const value: Schedule = new Schedule(
      this.index++,
      this.timeInput.value,
      this.subjectInput.value,
      this.locationInput.value,
      this.descriptionInput.value
    );
    if (!this.items.includes(value)) {
      this.items.push(value);
    }
    this.resetFormAdd();
    this.modal.hide();
  }

  editSchedule(item: Schedule, frame: any) {
    const elem = this.items.find(sch => sch.id === item.id);
    if (elem) {
      this.idInputEdit.setValue(elem.id);
      this.timeInputEdit.setValue(elem.time);
      this.subjectInputEdit.setValue(elem.subject);
      this.locationInputEdit.setValue(elem.location);
      this.descriptionInputEdit.setValue(elem.description);
      frame.show();
    }
  }

  saveEditSchedule(frame: any) {
    const elem = this.items.find(sch => sch.id === this.idInputEdit.value);
    if (elem) {
      elem.time = this.timeInputEdit.value;
      elem.subject = this.subjectInputEdit.value;
      elem.location = this.locationInputEdit.value;
      elem.description = this.descriptionInputEdit.value;
      frame.hide();
    }
    this.resetFormEdit();
  }

  deleteSchedule(item: Schedule) {
    if (this.items.includes(item)) {
      this.items = this.items.filter(todo => todo.id !== item.id);
      return this;
    }
  }

  onSelect(schedule: Schedule) {
    this.selectedSchedule = schedule;
  }

  resetFormAdd() {
    this.timeInput.reset();
    this.subjectInput.reset();
    this.locationInput.reset();
    this.descriptionInput.reset();
  }

  resetFormEdit() {
    this.idInputEdit.reset();
    this.timeInputEdit.reset();
    this.subjectInputEdit.reset();
    this.locationInputEdit.reset();
    this.descriptionInputEdit.reset();
  }

  toggleState(item) {
    for (const elem of this.items) {
      if (elem.id === item.id) {
        item.toggleState();
      } else {
        elem.state = 'inactive';
      }
    }
  }
}
