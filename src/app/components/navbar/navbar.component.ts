import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  directives: [AppRoutingModule],
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
