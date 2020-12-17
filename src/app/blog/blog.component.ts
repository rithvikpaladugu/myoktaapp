import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  username: string;
  constructor(public oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    const userClaims = await this.oktaAuth.getUser();
    this.username = userClaims.name;
  }
  logout() {
    this.oktaAuth.signOut();
  }
}
