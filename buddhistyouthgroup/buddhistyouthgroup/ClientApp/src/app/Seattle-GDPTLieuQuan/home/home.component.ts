import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class SeattleGDPTLieuQuanHomeComponent implements OnInit {


  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  obj: any = { title: 'No Sinh Hoat: Huynh Truong Conference', start: '2018-10-28' };
  eventsArray: any[] = [{ title: 'No Sinh Hoat: Huynh Truong Conference', start: '2018-10-28', month: 'Oct', day: '10', weekday:'Sun', time: '12:00 PM'}];


  ngOnInit() {
    $(document).ready(function () {

      $.ajax({
        url: "api/SampleData/GetEvents",
        dataType: "json",
        success: response => {

          $('#calendar').fullCalendar({
            editable: true,
            eventLimit: false,
            header: {
              left: '',
              center: 'title',
              right: ''
            },
            events: response,
            height: 'auto',
            contentHeight: 'auto',
            fixedWeekCount: false,
            eventRender: function (event, element) {
              element.popover({
                content: event.title,
                placement: "top",
                trigger: "click"
              })
            }
          });

        },
        error: (response, errorMessage) => {
          console.log(errorMessage);
        }
      });


    });
  }

  //calendarOptions: Options;

  //@ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  calendarDateYear: any = new Date().getFullYear();

  //constructor() { }

  //ngOnInit() {
  //  this.calendarOptions = {
  //    editable: true,
  //    eventLimit: false,
  //    header: {
  //      left: '',
  //      center: 'title',
  //      right: ''
  //    },
  //    events: this.eventsArray,
  //    height: 'auto',
  //    contentHeight: 'auto',
  //    fixedWeekCount: false,
     
  //  };
  //}


  //ChangeMonth(monthNumber) {

  //  let newDate = this.ucCalendar.fullCalendar('getDate');
  //  newDate = newDate.month(monthNumber);

  //  this.ucCalendar.fullCalendar('gotoDate', newDate);
  //}

  //MoveYearBackward() {
  //  this.ucCalendar.fullCalendar('prevYear');
  //  this.calendarDateYear = this.ucCalendar.fullCalendar('getDate').get('year');
  //}

  //MoveYearForward() {
  //  this.ucCalendar.fullCalendar('nextYear');
  //  this.calendarDateYear = this.ucCalendar.fullCalendar('getDate').get('year');
  //}

}
