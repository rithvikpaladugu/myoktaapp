import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(public oktaAuth: OktaAuthService) {}

  ngOnInit(): void {
  }
  logout() {
    this.oktaAuth.signOut();
  }
}
