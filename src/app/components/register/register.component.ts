import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private service: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.service
      .register(this.email, this.password)
      .then(res => {
        this.flashMessage.show('You are now Register and logged in', {
          cssClass: 'alert-success',
          timeout: 4000,
        });
        this.router.navigate(['/']);
      })
      .catch(err => {
        this.flashMessage.show(err.message, {
          cssClass: 'alert-danger',
          timeout: 4000,
        });
      });
  }
}
