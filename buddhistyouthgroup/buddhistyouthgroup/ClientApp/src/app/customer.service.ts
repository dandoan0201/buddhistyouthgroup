import { Injectable } from '@angular/core';

const TOKEN = 'TOKEN';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  // set the token to validate the user is logged in
  setToken(token: string): void {
    sessionStorage.setItem(TOKEN, token);
  }

  // a boolean to check whether the user is login 
  isLoggged() {
    return sessionStorage.getItem(TOKEN) != null;
  }

  // remove the token to indicate the user is logged out
  logout() {
    sessionStorage.removeItem(TOKEN);
  }

}
