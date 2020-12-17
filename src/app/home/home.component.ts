import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean;
  username: string;
  constructor(public oktaAuth: OktaAuthService) {
    this.oktaAuth.$authenticationState.subscribe(isAuthenticated => this.isAuthenticated = isAuthenticated);
  }

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    const userClaims = await this.oktaAuth.getUser();
    this.username = userClaims.name;
  }
  login() {
    this.oktaAuth.signInWithRedirect();
    
  }
  logout() {
    this.oktaAuth.signOut();
  }
  
}
