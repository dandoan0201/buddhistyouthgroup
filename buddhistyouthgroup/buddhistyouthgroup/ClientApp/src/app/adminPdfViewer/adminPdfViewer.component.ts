import { Component, ViewChild, Input, EventEmitter, AfterViewInit, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PdfViewerComponent, PDFDocumentProxy } from '../../../node_modules/ng2-pdf-viewer';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-adminPdfViewer',
  templateUrl: './adminPdfViewer.component.html',
})


export class AdminPDFViewerComponent implements AfterViewInit, OnInit {

  @Input() public course: string;

  pdfSrc: string = '';
  page: number = 1;
  totalPages: number;

  selectedRow: Number;

  pdfFiles: any[];

  hideElement: boolean = true;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private datePipe: DatePipe) { }

  public Refresh(course) {
    if (course == "canhMem") {

      let body = new HttpParams();
      body = body.set('Course', course);

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
    if (this.course == "canhMem") {

      let body = new HttpParams();
      body = body.set('Course', this.course);

      let list: any[];
      this.http.post<any[]>(this.baseUrl + 'api/Admin/GetCourseFiles', body).subscribe(result => {

        //var pdf = new Uint8Array(list[0].fileData);
        ////https://github.com/VadimDez/ng2-pdf-viewer/issues/88
        //var raw = window.atob(list[0].fileData);
        //var rawLength = raw.length;
        //var array = new Uint8Array(new ArrayBuffer(rawLength));
        //for (var i = 0; i < rawLength; i++) {
        //  array[i] = raw.charCodeAt(i);
        //}

        list = result as any[];
        console.log(list);

        let files: any[] = [];
        for (var i = 0; i < list.length; i++) {

          //var pdf = new Uint8Array(list[0].fileData);
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

      //this.pdfFiles = [
      //  { "File": "Lecture 1", "Date": "5/13/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 1.pdf" },
      //  { "File": "Lecture 2", "Date": "7/8/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 2.pdf" },
      //  { "File": "Lecture 3", "Date": "9/16/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 3.pdf" },
      //  { "File": "Lecture 4", "Date": "9/30/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 4.pdf" },
      //  { "File": "Lecture 5", "Date": "10/7/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 5.pdf" },
      //  { "File": "Lecture 6", "Date": "10/14/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 6.pdf" },
      //  { "File": "Lecture 7", "Date": "10/21/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 7.pdf" },
      //  { "File": "Bai Sam Hoi Slides", "Date": "11/8/2018", "pdfSrc": "../../../assets/pdf/canhmem/Bai Sam Hoi Slides.pdf" },
      //  { "File": "Lecture 8", "Date": "11/11/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 8.pdf" },
      //  { "File": "Lecture 9", "Date": "11/18/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 9.pdf" },
      //  { "File": "Lecture 10", "Date": "12/2/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 10.pdf" },
      //];
    }
  }
  // good blog why not to use for a child component
  // https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
  ngAfterViewInit() {


  }


  View(selectedPdf, rowSelected) {

    this.page = 1;
    this.selectedRow = rowSelected;
    this.pdfSrc = selectedPdf.pdfSrc
    this.hideElement = false;
  }

  Delete(selectedPdf, rowSelected) {
    var IsDelete = confirm("Are you sure you want to delete this file?");
    if (IsDelete !== false) {
      return;
    }
    console.log("DELETE SUCCESSFULLY!");
    this.selectedRow = rowSelected;
    console.log(selectedPdf);
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


  //onFileSelected() {
  //  let img: any = document.querySelector('#file');

  //  if (typeof (FileReader) !== 'undefined') {
  //    let reader = new FileReader();

  //    reader.onload = (e: any) => {
  //      this.pdfSrc = e.target.result;
  //    };

  //    reader.readAsArrayBuffer(img.files[0]);
  //  }
  //}
}
