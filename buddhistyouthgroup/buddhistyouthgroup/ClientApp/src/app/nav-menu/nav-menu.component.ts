import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { MemberService } from '../member.service';
  
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;

  username: string = "";

  password: string = "";

  IsLogin: boolean = false;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router, private member: MemberService) { }

  Login() {
    let body = new HttpParams();
    body = body.set("username", this.username);
    body = body.set("password", this.password);

    //const redirectUrl = this.route['_routerState']['url'];

    this.http.post<any>(this.baseUrl + 'api/Admin/Login', body).subscribe(result => {
      ;
      this.IsLogin = result;
      if (this.IsLogin == false) {
        alert("Username and Password invalid");
      }
      else if (this.IsLogin == true) {
        this.member.setToken("token");
        this.router.navigateByUrl(
          this.router.createUrlTree(
            ['/adminHome'], {
            }
          )
        );
      }



    }, error => console.log(error));
  }

  Logout() {
    this.IsLogin = false;

    this.member.logout();

    this.router.navigateByUrl(
      this.router.createUrlTree(
        ['/'], {
        }
      )
    );
  }


  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
