import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse } from '@angular/common/http';
import { PdfViewerComponent, PDFDocumentProxy } from '../../../node_modules/ng2-pdf-viewer';

@Component({
  selector: 'upload-component',
  templateUrl: './upload.component.html'
})

export class UploadComponent implements OnInit {

  public progress: number;
  public message: string;

  pdfSrc: string = '';
  page: number = 1;
  totalPages: number;

  selectedRow: Number;

  pdfFiles: any[];

  hideElement: boolean = true;

  ngOnInit() {

    let list: any[];
    this.http.get<any[]>(this.baseUrl + 'api/Admin/GetFile').subscribe(result => {

      list = result as any[];

      var pdf = new Uint8Array(list[0].fileData);
      //https://github.com/VadimDez/ng2-pdf-viewer/issues/88
      var raw = window.atob(list[0].fileData);
      var rawLength = raw.length;
      var array = new Uint8Array(new ArrayBuffer(rawLength));
      console.log(rawLength);
      for (var i = 0; i < rawLength; i++) {
        array[i] = raw.charCodeAt(i);
      }
      console.log(array);
  
      //pdf = list[0].fileData;
      this.pdfFiles = [
        { "File": list[0].fileName, "Date": "5/13/2018", "pdfSrc": array },
      ];

    }, error => console.error(error));


    //this.pdfFiles = [
    //  { "File": "Lecture 1", "Date": "5/13/2018", "pdfSrc": "../../../assets/pdf/canhmem/Lecture 1.pdf" },
    //];
  }

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  upload(files) {

    if (files.length === 0) {
      return;
    }

    const formData = new FormData();

    for (let file of files) {
      formData.append(file.name, file);
    }


    const uploadReq = new HttpRequest('POST', 'api/Admin/UploadFile', formData, {
      reportProgress: true,
    });

    this.http.request(uploadReq).subscribe(event => {

      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      }
      else if (event.type === HttpEventType.Response) {
        this.message = event.body.toString();
      }

    });
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
