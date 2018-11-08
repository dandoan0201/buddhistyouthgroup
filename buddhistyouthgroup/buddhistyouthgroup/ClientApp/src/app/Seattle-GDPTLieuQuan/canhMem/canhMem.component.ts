import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PdfViewerComponent, PDFDocumentProxy } from '../../../../node_modules/ng2-pdf-viewer';


@Component({
  selector: 'app-home-canhMem',
  templateUrl: './canhMem.component.html',
})

export class SeattleGDPTLieuQuanCanhMemComponent {
  pdfSrc: string = '../../../assets/pdf/Lecture.pdf';
  page: number = 1;


  //@ViewChild(PdfViewerComponent) private pdfComponent: PdfViewerComponent;

  constructor() { }

  ngOnInit() {

  }

  callBackFn(pdf: PDFDocumentProxy): void {
    console.log("IM here");
    console.log(pdf.numPages);
  }

  Next() {
    this.page++;
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
