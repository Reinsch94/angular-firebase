import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from '../models/auth-user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './user.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private userService: UserService
  ) {}

  initAuthListener() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        console.log('user', user.uid);
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
    console.log(authData);
    this.afAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.userService.createUser(authData);
        this.router.navigate(['/pages']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  login(authData: AuthData) {
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(() => {
        console.log('logged in');
        this.router.navigate(['/pages']);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  logout() {
    this.afAuth
      .signOut()
      .then(() => {
        console.log('logged out');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  isAuth() {
    return this.afAuth.authState;
  }
}
