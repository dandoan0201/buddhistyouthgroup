import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpParams } from '@angular/common/http';
import { PdfViewerComponent, PDFDocumentProxy } from '../../../node_modules/ng2-pdf-viewer';
import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'adminOanhvu-component',
  templateUrl: './adminOanhvu.component.html'
})

export class AdminOanhVuComponent implements OnInit {

  IsMoMat: boolean = false;
  IsCanhMem: boolean = false;
  IsChanCung: boolean = false;
  IsTungBay: boolean = false;

  public progress: number;
  public message: string;

  public course: string;

  pdfSrc: string = '';
  page: number = 1;
  totalPages: number;

  selectedRow: Number;

  pdfFiles: any[];

  hideElement: boolean = true;

  fileToUpload: File = null;

  private modalRef: NgbModalRef;

  Date: any;
  FileName: any;
  Course: any;

  public Courses_View: string[] = ['Mở Mắt', 'Cánh Mềm', 'Chân Cứng', 'Tung Bay'];
  public Courses: string[] = ['Mo Mat', 'Canh Mem', 'Chan Cung', 'Tung Bay'];

  public CourseSelected: any;

  form: FormGroup;

  ViewMoMat() {
    this.course = "moMat";
    this.IsMoMat = true;
    this.IsCanhMem = false;
    this.IsChanCung = false;
    this.IsTungBay = false;
  }

  ViewCanhMem() {
    this.course = "canhMem";
    this.CourseSelected = this.Courses_View[1];
    this.IsMoMat = false;
    this.IsCanhMem = true;
    this.IsChanCung = false;
    this.IsTungBay = false;
    this.LoadFiles();
  }

  ViewChanCung() {
    this.course = "chanCung";
    this.IsMoMat = false;
    this.IsCanhMem = false;
    this.IsChanCung = true;
    this.IsTungBay = false;
  }

  ViewTungBay() {
    this.course = "tungBay";
    this.IsMoMat = false;
    this.IsCanhMem = false;
    this.IsChanCung = false;
    this.IsTungBay = true;
  }

  LoadFiles() {
    if (this.course == "canhMem") {
      let body = new HttpParams();
      body = body.set('Course', this.course);

      let list: any[];
      this.http.post<any[]>(this.baseUrl + 'api/Admin/GetCourseFiles', body).subscribe(result => {

        list = result as any[];
        console.log(list);

        let files: any[] = [];
        for (var i = 0; i < list.length; i++) {

          var raw = window.atob(list[i].fileData);

          var rawLength = raw.length;
          var array = new Uint8Array(new ArrayBuffer(rawLength));
          for (var j = 0; j < rawLength; j++) {
            array[j] = raw.charCodeAt(j);
          }
          var date = new Date(list[i].date);
          let object: any = { "File": list[i].fileName, "Date": this.datePipe.transform(date, "MM/dd/yyyy"), "pdfSrc": array };
          files.push(object);
        }
        this.pdfFiles = files;

      }, error => console.error(error));
    }
  }

  ngOnInit() {

    let list: any[];
    //this.http.get<any[]>(this.baseUrl + 'api/Admin/GetFile').subscribe(result => {

    //  list = result as any[];

    //  var pdf = new Uint8Array(list[0].fileData);
    //  //https://github.com/VadimDez/ng2-pdf-viewer/issues/88
    //  var raw = window.atob(list[0].fileData);
    //  var rawLength = raw.length;
    //  var array = new Uint8Array(new ArrayBuffer(rawLength));
    //  console.log(rawLength);
    //  for (var i = 0; i < rawLength; i++) {
    //    array[i] = raw.charCodeAt(i);
    //  }
    //  console.log(array);

    //  //pdf = list[0].fileData;
    //  this.pdfFiles = [
    //    { "File": list[0].fileName, "Date": "5/13/2018", "pdfSrc": array },
    //  ];

    //}, error => console.error(error));


    //this.pdfFiles = [
    //  { "File": "Lecture 1", "Date": "5/13/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 1.pdf" },
    //];

    // javascript is needed to change bootstrap group button to active color
    $(document).ready(function () {
      $(".btn-group > .btn").click(function () {
        $(".btn-group > .btn").removeClass("active");
        $(this).button('toggle');
      });

    });
  }


  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private modalService: NgbModal, private datePipe: DatePipe) { }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  CreateUploadFile(content) {
    this.modalRef = this.modalService.open(content);
    //  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
    //  this.closeResult = `Closed with: ${result}`;
    //}, (reason) => {
    //  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //});
  }

  UploadFile() {
    if (this.FileName === undefined) {
      alert("You didn't include a File Name!");
      return;
    }

    if (this.Date === undefined) {
      alert("You didn't include a Date!");
      return;
    }

    if (this.fileToUpload == null) {
      alert("You didn't include a file!");
      return;
    }

    const formData = new FormData();
    formData.append(this.fileToUpload.name, this.fileToUpload);
    let index = this.Courses_View.indexOf(this.CourseSelected);
    formData.append("Course", this.Courses[index]);
    formData.append("FileName", this.FileName);
    formData.append("Date", this.Date.year + "-" + this.Date.month + "-" + this.Date.day);

    this.http.post<any>(this.baseUrl + 'api/Admin/UploadFile', formData).subscribe(result => {

      this.FileName = null;
      this.Date = null;

      let body = new HttpParams();
      body = body.set('Course', this.course);

      let list: any[];
      this.http.post<any[]>(this.baseUrl + 'api/Admin/GetCourseFiles', body).subscribe(result => {

        list = result as any[];
        console.log(list);

        let files: any[] = [];
        for (var i = 0; i < list.length; i++) {

          var raw = window.atob(list[i].fileData);

          var rawLength = raw.length;
          var array = new Uint8Array(new ArrayBuffer(rawLength));
          for (var j = 0; j < rawLength; j++) {
            array[j] = raw.charCodeAt(j);
          }
          var date = new Date(list[i].date);
          let object: any = { "File": list[i].fileName, "Date": this.datePipe.transform(date, "MM/dd/yyyy"), "pdfSrc": array };
          files.push(object);
        }
        this.pdfFiles = files;

      }, error => console.error(error));
      this.modalRef.close();
    }, error => console.error(error));
  }

  public onSelectCourse(item) {
    this.CourseSelected = item;
  }

  View(selectedPdf, rowSelected) {
    this.page = 1;
    this.selectedRow = rowSelected;
    this.pdfSrc = selectedPdf.pdfSrc
    this.hideElement = false;
  }

  callBackFunction(pdf: PDFDocumentProxy): void {
    this.totalPages = pdf.numPages;
  }

  Previous() {
    if (this.page != 1) {
      this.page--;
    }
  }

  Next() {
    if (this.page != this.totalPages) {
      this.page++;
    }
  }

}
