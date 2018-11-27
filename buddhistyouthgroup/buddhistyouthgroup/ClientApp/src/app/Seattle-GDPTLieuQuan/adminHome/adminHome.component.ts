import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'SeattleGDPTLieuQuan-adminHome',
  templateUrl: './adminHome.component.html',
})


export class SeattleGDPTLieuQuanAdminHomeComponent {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {

    http.get<any[]>(baseUrl + 'api/Admin/GetCalendarEvents').subscribe(result => {

      let array: any[] = result as any[];
      console.log(array);

    }, error => console.error(error));
  }

}
