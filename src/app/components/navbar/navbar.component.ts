import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

import { AuthService } from '../../services/auth.service';
import { SettingsService } from '../../services/settings.service';
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
    private authService: AuthService,
    private settingService: SettingsService,
    private router: Router,
    private flashMessage: FlashMessagesService,
  ) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.isLoggedIn = true;
        this.currentUser = auth.email;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.showRegister = this.settingService.getSettings().isRegistrationEnabled;
  }

  onLogout() {
    this.authService.logout();
    this.flashMessage.show('You have logged out', {
      cssClass: 'alert-success',
      timeout: 4000,
    });
    this.router.navigate(['/login']);
  }
}
