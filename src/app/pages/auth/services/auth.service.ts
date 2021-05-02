import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from '../models/auth-user.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  initAuthListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/pages']);
      } else {
        this.authChange.next(false);
        // this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    this.afAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  login(authData: AuthData) {
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result: any) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.afAuth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
