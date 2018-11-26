import { Component, Inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'SeattleGDPTLieuQuan-nav-bar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class SeattleGDPTLieuQuanNavBarComponent {
  isExpanded = false;

  username: string = "";
  
  password: string = "";

  IsLogin: boolean = false;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  Login() {
    let body = new HttpParams();
    body = body.set("username", this.username);
    body = body.set("password", this.password);

    this.http.post<any>(this.baseUrl + 'api/Admin/Login', body).subscribe(result => {

      console.log(result);
      this.IsLogin = result;
      if (result == false) {
        alert("Username and Password invalid");
      }

    }, error => console.log(error));
  }

  Logout() {
    this.IsLogin = false;
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
