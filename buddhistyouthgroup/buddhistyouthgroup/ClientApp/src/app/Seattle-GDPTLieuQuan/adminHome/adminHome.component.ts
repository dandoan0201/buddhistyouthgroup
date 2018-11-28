import { Component, Inject } from '@angular/core';
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

  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  private modalRef: NgbModalRef;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private modalService: NgbModal) {

    http.get<any[]>(baseUrl + 'api/Admin/GetCalendarEvents').subscribe(result => {

      let array: any[] = result as any[];
      console.log(array);

      this.CalendarEvents = array;

    }, error => console.error(error));
  }

  Create(content) {
    this.modalRef = this.modalService.open(content);
    //  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    //  this.closeResult = `Closed with: ${result}`;
    //}, (reason) => {
    //  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //});
  }

  Save()
  {
    console.log(this.EventName);
    console.log(this.StartDate);
    console.log(this.EndDate);
    console.log(this.StartTime);
    console.log(this.EndTime);

    let body = new HttpParams();
    body = body.set("eventname", this.EventName);
    body = body.set("startdate", this.StartDate);
    body = body.set("enddate", this.EndDate);
    body = body.set("starttime", this.StartTime);
    body = body.set("endtime", this.EndTime);

    this.http.post<any>(this.baseUrl + 'api/Admin/IsCalendarEventAdded', body).subscribe(result => {

      console.log(result);
      if (result == true) {
        alert("New Event was successfully made.");
      }
    }, error => console.log(error));

    this.modalRef.close();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
