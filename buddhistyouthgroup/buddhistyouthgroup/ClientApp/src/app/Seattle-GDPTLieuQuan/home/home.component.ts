import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'SeattleGDPTLieuQuan-home',
  templateUrl: './home.component.html',
})

export class SeattleGDPTLieuQuanHomeComponent implements OnInit {


  images = [1, 2, 3].map(() => `https://picsum.photos/1000/500?random&t=${Math.random()}`);
  obj: any = { title: 'No Sinh Hoat: Huynh Truong Conference', start: '2018-10-28' };
  eventsArray: any[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {


    this.router.navigate([{ outlets: { NavBar: 'gdptlieuquan' } }]);

    http.get<any[]>(baseUrl + 'api/SampleData/GetEvents').subscribe(result => {

      let array: any[] = result as any[];

      let newArray: any[] = [];

      let today: Date = new Date();

      for (let i: number = 0; i < array.length; i++) {

        let check: Date = new Date(array[i].start);
        if (today < check) {
          newArray.push(array[i]);
        }
      }

      this.eventsArray = newArray;

    }, error => console.error(error));

  }

  ngOnInit() {

    //this.router.navigate([{ outlets: { NavBar: 'gdptlieuquan' } }]);

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
                trigger: "hover",
                placement: "bottom"
              })
            },
            eventColor: '#068104',
            eventTextColor: '#FFFFFF'
          });

          let date = $('#calendar').fullCalendar('getDate');
          $('#calendarDateYear').html("<b>" + date.year().toString() + "</b>");

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

  ChangeMonth(monthNumber) {

    $(function () {
      let newDate = $('#calendar').fullCalendar('getDate');
      newDate = newDate.month(monthNumber);
      $('#calendar').fullCalendar('gotoDate', newDate);
    });

    //let newDate = this.ucCalendar.fullCalendar('getDate');
    //newDate = newDate.month(monthNumber);

    //this.ucCalendar.fullCalendar('gotoDate', newDate);
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

}
