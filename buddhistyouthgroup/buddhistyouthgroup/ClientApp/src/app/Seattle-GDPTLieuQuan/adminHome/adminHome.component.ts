import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'SeattleGDPTLieuQuan-adminHome',
  templateUrl: './adminHome.component.html',
})


export class SeattleGDPTLieuQuanAdminHomeComponent {


  closeResult: string;
  CalendarEvents: any[];

  EventName: any;
  StartDate: any;
  EndDate: any;
  StartTime: any;
  EndTime: any;

  CalendarEventSelected_Edit: any;

  EventName_Edit: any;
  StartDate_Edit: any;
  EndDate_Edit: any;
  StartTime_Edit: any;
  EndTime_Edit: any;

  meridian = true; 

  time: any;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  private modalRef: NgbModalRef;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private modalService: NgbModal) {

    http.get<any[]>(baseUrl + 'api/Admin/GetCalendarEvents').subscribe(result => {

      let array: any[] = result as any[];

      this.CalendarEvents = array;

    }, error => console.error(error));
  }

  CreateCalendarEvent(content) {
    this.modalRef = this.modalService.open(content);
    //  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    //  this.closeResult = `Closed with: ${result}`;
    //}, (reason) => {
    //  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //});
  }

  EditCalendarEvent(content, CalendarEvent) {
    this.CalendarEventSelected_Edit = CalendarEvent;

    this.EventName_Edit = CalendarEvent.eventName;
    this.StartDate_Edit = { year: CalendarEvent.startYear, month: CalendarEvent.startMonth, day: CalendarEvent.startDay };

    this.EndDate_Edit = { year: CalendarEvent.endYear, month: CalendarEvent.endMonth, day: CalendarEvent.endDay };

    if (CalendarEvent.startTime != "") {
      this.StartTime_Edit = { hour: CalendarEvent.startTimeHour, minute: CalendarEvent.startTimeMinute }; 
    }

    if (CalendarEvent.endTime != "") {
      this.EndTime_Edit = { hour: CalendarEvent.endTimeHour, minute: CalendarEvent.endTimeMinute }; 
    }

    console.log(CalendarEvent);
    this.modalRef = this.modalService.open(content);
    //  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    //  this.closeResult = `Closed with: ${result}`;
    //}, (reason) => {
    //  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //});
  }

  AddCalendarEvent()
  {
    if (this.EventName == undefined || this.StartDate == undefined) {
      alert("You are required to fill out the Event Name and Start Date");
      return;
    }

    let body = new HttpParams();
    body = body.set("eventname", this.EventName);
    body = body.set("startdate", this.StartDate.year + "-" + this.StartDate.month + "-" + this.StartDate.day);

    if (this.EndDate == undefined) {
      body = body.set("enddate", "");
    }
    else {
      body = body.set("enddate", this.EndDate.year + "-" + this.EndDate.month + "-" + this.EndDate.day);
    }

    if (this.StartTime == undefined) {
      body = body.set("starttime", "");
    }
    else {
      body = body.set("starttime", this.StartTime.hour + ":" + this.StartTime.minute);
    }

    if (this.EndTime == undefined) {
      body = body.set("endtime", "");
    }
    else {
      body = body.set("endtime", this.EndTime.hour + ":" + this.EndTime.minute);
    }
    
    this.http.post<any>(this.baseUrl + 'api/Admin/IsCalendarEventAdded', body).subscribe(result => {

      console.log(result);
      if (result == true) {
        //alert("New Event was made successfully");
        this.EventName = null;
        this.StartDate = null;
        this.EndDate = null;
        this.StartTime = null;
        this.EndTime = null;

        this.http.get<any[]>(this.baseUrl + 'api/Admin/GetCalendarEvents').subscribe(result => {

          let array: any[] = result as any[];

          this.CalendarEvents = array;

        }, error => console.error(error));

      }
      else {
        alert("New Event was made unsuccesfully");
        return;
      }
    }, error => console.log(error));

    this.modalRef.close();
  }

  UpdateCalendarEvent()
  {
    let body = new HttpParams();
    body = body.set("ID", this.CalendarEventSelected_Edit.id);
    body = body.set("eventname", this.EventName_Edit);
    body = body.set("startdate", this.StartDate_Edit.year + "-" + this.StartDate_Edit.month + "-" + this.StartDate_Edit.day);

    console.log(this.EndDate_Edit);

    if (this.EndDate_Edit.year == null) {
      body = body.set("enddate", "");
    }
    else {
      body = body.set("enddate", this.EndDate_Edit.year + "-" + this.EndDate_Edit.month + "-" + this.EndDate_Edit.day);
    }

    if (this.StartTime_Edit == undefined) {
      body = body.set("starttime", "");
    }
    else {
      body = body.set("starttime", this.StartTime_Edit.hour + ":" + this.StartTime_Edit.minute);
    }

    if (this.EndTime_Edit == undefined) {
      body = body.set("endtime", "");
    }
    else {
      body = body.set("endtime", this.EndTime_Edit.hour + ":" + this.EndTime_Edit.minute);
    }
 
    console.log(this.CalendarEventSelected_Edit);
    console.log(body);

    this.http.post<any>(this.baseUrl + 'api/Admin/IsCalendarEventUpdated', body).subscribe(result => {

      console.log(result);
      if (result == true) {
        //alert("Event update was made successfully");

        this.http.get<any[]>(this.baseUrl + 'api/Admin/GetCalendarEvents').subscribe(result => {

          let array: any[] = result as any[];

          this.CalendarEvents = array;

        }, error => console.error(error));

      }

      else {
        alert("Event update was made unsuccesfully");
        return;
      }

    }, error => console.log(error));

    this.modalRef.close();
  }

  DeleteCalendarEvent(CalendarEvent) {
    var response = confirm("Are you sure you want to delete this?");

    if (response == false) {
      return;
    }

    let body = new HttpParams();
    body = body.set("ID", CalendarEvent.id);

    this.http.post<any>(this.baseUrl + 'api/Admin/IsCalendarEventDeleted', body).subscribe(result => {

      this.http.get<any[]>(this.baseUrl + 'api/Admin/GetCalendarEvents').subscribe(result => {

        let array: any[] = result as any[];

        this.CalendarEvents = array;

      }, error => console.error(error));

    }, error => console.log(error));
    
  }

}
