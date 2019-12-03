import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../../services/auth.service';
import Client from '../../models/Client';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean;
  currentUser: string;
  showRegister: boolean;

  constructor(
    private service: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) {}

  ngOnInit() {
    this.service.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.currentUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
  }

  onLogout() {
    this.service.logout();
    this.flashMessage.show('You have logged out', {
      cssClass: 'alert-success',
      timeout: 4000,
    });
    this.router.navigate(['/login']);
  }
}
