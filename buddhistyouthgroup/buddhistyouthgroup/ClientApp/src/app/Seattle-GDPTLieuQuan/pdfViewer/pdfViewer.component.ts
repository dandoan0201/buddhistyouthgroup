import { Component, ViewChild, Input, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PdfViewerComponent, PDFDocumentProxy } from '../../../../node_modules/ng2-pdf-viewer';


@Component({
  selector: 'app-GDPTLieuQuan-pdfViewer',
  templateUrl: './pdfViewer.component.html',
})

export class PDFViewerComponent implements AfterViewInit, OnInit {

  @Input() public course: string;


  pdfSrc: string = '';
  page: number = 1;
  totalPages: number;

  selectedRow: Number;

  pdfFiles: any[];

  hideElement: boolean = true;

  ngOnInit() {
    if (this.course == "canhMem") {
      this.pdfFiles = [{ "File": "Lecture 1", "Date": "5/13/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 1.pdf" },
      { "File": "Lecture 2", "Date": "7/8/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 2.pdf" },
      { "File": "Lecture 3", "Date": "9/16/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 3.pdf" },
      { "File": "Lecture 4", "Date": "9/30/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 4.pdf" },
      { "File": "Lecture 5", "Date": "10/7/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 5.pdf" },
      { "File": "Lecture 6", "Date": "10/14/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 6.pdf" },
      { "File": "Lecture 7", "Date": "10/21/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 7.pdf" },
      { "File": "Bai Sam Hoi Slides", "Date": "11/8/2018", "pdfSrc": "../../../assets/pdf/canhmem/Bai Sam Hoi Slides.pdf" },
      { "File": "Lecture 8", "Date": "11/11/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 8.pdf" },
      ];
    }
  }
  // good blog why not to use for a child component
  // https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
  ngAfterViewInit() {


  }
  

  constructor() { }

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
