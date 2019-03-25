import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { CustomerService } from '../customer.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('slideup', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 0 }),
        animate('100ms ease-out', style({ opacity: 0 }))
      ])
    ]),
  ]
  //animations: [
  //  trigger('openClose', [
  //    state('open', style({
  //      height: '200px',
  //      opacity: 1,
  //      backgroundColor: 'yellow'
  //    })),
  //    state('closed', style({
  //      height: '100px',
  //      opacity: 0.5,
  //      backgroundColor: 'green'
  //    })),
  //    transition('open => closed', [
  //      animate('1s')
  //    ]),
  //    transition('closed => open', [
  //      animate('0.5s')
  //    ]),
  //  ]),
  //  trigger('myAnimation', [
  //    transition(':enter', [
  //      style({ opacity: 0 }),
  //      animate('1s ease-in-out', style({ opacity: 1}))
  //    ])
  //  ]),
  //]
})

export class HomeComponent implements OnInit {

  animation: boolean = true;

  images = [1, 2, 3].map(() => 'https://picsum.photos/1000/500?random&t=${Math.random()}');
  obj: any = { title: 'No Sinh Hoat: Huynh Truong Conference', start: '2018-10-28' };
  eventsArray: any[];

  constructor(private customer: CustomerService, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {

    //http.get<any[]>(baseUrl + 'api/Admin/GetCalendarEvents').subscribe(result => {

    //  let array: any[] = result as any[];
    //  console.log(array);
    //  let newArray: any[] = [];

    //  let today: Date = new Date();

    //  for (let i: number = 0; i < array.length; i++) {

    //    let check: Date = new Date(array[i].start);
    //    if (today < check) {
    //      newArray.push(array[i]);
    //    }
    //  }

    //  this.eventsArray = newArray;

    //}, error => console.error(error));

  }

  ngOnInit() {

    $(document).ready(function () {

      //$.ajax({
      //  url: "api/Admin/GetCalendarEvents",
      //  dataType: "json",
      //  success: response => {

      //    $('#calendar').fullCalendar({
      //      editable: true,
      //      eventLimit: false,
      //      header: {
      //        left: '',
      //        center: 'title',
      //        right: ''
      //      },
      //      events: response,
      //      height: 'auto',
      //      contentHeight: 'auto',
      //      fixedWeekCount: false,
      //      eventRender: function (event, element) {
      //        element.popover({
      //          content: event.title,
      //          trigger: "hover",
      //          placement: "bottom"
      //        })
      //      },
      //      eventColor: '#068104',
      //      eventTextColor: '#FFFFFF'
      //    });

      //    let date = $('#calendar').fullCalendar('getDate');
      //    $('#calendarDateYear').html("<b>" + date.year().toString() + "</b>");

      //  },
      //  error: (response, errorMessage) => {
      //    console.log(errorMessage);
      //  }
      //});

    });
  }


  calendarDateYear: any = new Date().getFullYear();


  ChangeMonth(monthNumber) {

    $(function () {
      let newDate = $('#calendar').fullCalendar('getDate');
      newDate = newDate.month(monthNumber);
      $('#calendar').fullCalendar('gotoDate', newDate);
    });

  }

  MoveYearBackward() {
    $(function () {
      $('#calendar').fullCalendar('prevYear');

      let date = $('#calendar').fullCalendar('getDate');
      $('#calendarDateYear').html("<b>" + date.year().toString() + "</b>");
    });
  }

  MoveYearForward() {
    $(function () {
      $('#calendar').fullCalendar('nextYear');

      let date = $('#calendar').fullCalendar('getDate');
      $('#calendarDateYear').html("<b>" + date.year().toString() + "</b>");
    });
  }

  Logout() {
    this.customer.logout();
  }

}
