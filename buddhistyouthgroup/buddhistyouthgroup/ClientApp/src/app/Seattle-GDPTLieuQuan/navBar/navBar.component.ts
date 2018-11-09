import { Component } from '@angular/core';

@Component({
  selector: 'SeattleGDPTLieuQuan-nav-bar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})
export class SeattleGDPTLieuQuanNavBarComponent {
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
