import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {

  constructor(private customer: CustomerService) { }

  Logout() {
    this.customer.logout();
  }

}
