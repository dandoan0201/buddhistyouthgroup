import { Component, ViewChild, Input, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PdfViewerComponent, PDFDocumentProxy } from '../../../node_modules/ng2-pdf-viewer';

@Component({
  selector: 'app-pdfViewer-syllabus',
  templateUrl: './pdfViewer-syllabus.component.html',
})

export class PDFViewerSyllabusComponent implements AfterViewInit, OnInit {

  @Input() public syllabus: string;


  pdfSrc: string = '';
  page: number = 1;
  totalPages: number;

  selectedRow: Number;

  pdfFiles: any[];

  hideElement: boolean = false;

  ngOnInit() {
    if (this.syllabus == "canhMem") {
      this.pdfSrc = "../../../assets/pdf/canhmem/Syllabus.pdf";
      //this.pdfFiles = [{ "Cours"../../../assets/pdf/canhmem/Syllabus.pdf"e": "Canh Mem", "pdfSrc": "../../../assets/pdf/canhmem/Syllabus.pdf" }];
    }
  }
  // good blog why not to use for a child component
  // https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
  ngAfterViewInit() {


  }


  constructor() { }

  //View(selectedPdf, rowSelected) {

  //  this.page = 1;
  //  this.selectedRow = rowSelected;
  //  this.pdfSrc = selectedPdf.pdfSrc
  //  this.hideElement = false;
  //}
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
