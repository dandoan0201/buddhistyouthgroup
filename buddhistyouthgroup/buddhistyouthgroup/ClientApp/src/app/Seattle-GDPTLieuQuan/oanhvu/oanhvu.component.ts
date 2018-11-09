import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-oanhvu',
  templateUrl: './oanhvu.component.html',
})

export class SeattleGDPTLieuQuanOanhVuComponent {


  constructor(private router: Router) {

    this.router.navigate([{ outlets: { NavBar: 'gdptlieuquan' } }]);
  }

}
