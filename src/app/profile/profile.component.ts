import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public oktaAuth: OktaAuthService) {}

  ngOnInit(): void {
  }
  logout() {
    this.oktaAuth.signOut();
  }
}
