import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'api/SampleData/Login', {
      email: email,
      password: password
    });
  }

}
