import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  setToken(token: string): void {
    sessionStorage.setItem(TOKEN, token);
  }

  isLoggged() {
    return sessionStorage.getItem(TOKEN) != null;
  }

  logout() {
    sessionStorage.removeItem(TOKEN);
  }

}
