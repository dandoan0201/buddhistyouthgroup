import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class SeattleGDPTLieuQuanHomeComponent implements OnInit {

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  calendarOptions: Options;

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  calendarDateYear: any = new Date().getFullYear();

  constructor() { }

  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: '',
        center: 'title',
        right: ''
      },
      events: [],
      height: 'auto',
      contentHeight: 'auto',
      fixedWeekCount: false
     
    };
  }


  ChangeMonth(monthNumber) {

    let newDate = this.ucCalendar.fullCalendar('getDate');
    newDate = newDate.month(monthNumber);

    this.ucCalendar.fullCalendar('gotoDate', newDate);
  }

  MoveYearBackward() {
    this.ucCalendar.fullCalendar('prevYear');
    this.calendarDateYear = this.ucCalendar.fullCalendar('getDate').get('year');
  }

  MoveYearForward() {
    this.ucCalendar.fullCalendar('nextYear');
    this.calendarDateYear = this.ucCalendar.fullCalendar('getDate').get('year');
  }

}
