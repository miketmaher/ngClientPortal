import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private service: AngularFireAuth) {}

  getAuth() {
    return this.service.authState;
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.service.auth.signInWithEmailAndPassword(email, password).then(
        data => resolve(data),
        err => reject(err),
      );
    });
  }

  logout() {
    this.service.auth.signOut();
  }
}
