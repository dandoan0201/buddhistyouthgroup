import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('myAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in-out', style({ opacity: 1}))
      ])
    ]),
  ]
})

export class HomeComponent {

  HomeMenu: boolean = true;

  isOpen: boolean = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor(private customer: CustomerService) { }

  Logout() {
    this.customer.logout();
  }

}
