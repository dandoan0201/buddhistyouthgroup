import { Component, Inject, OnInit, HostBinding } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  selector: 'app-oanhvu',
  templateUrl: './oanhvu.component.html',
  animations: [
    trigger('slideup', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 0 }),
        animate('100ms ease-out', style({ opacity: 0 }))
      ])
    ]),
  ]
})

export class OanhVuComponent implements OnInit {


  animation: boolean = true;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private router: Router) {

    //this.router.navigate([{ outlets: { NavBar: 'gdptlieuquan' } }]);
  }

  ngOnInit() { }

}
