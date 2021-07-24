import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthData } from '@app/models/auth-user.model';
import { User } from '@app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userId!: string;

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }

  createUser(authData: AuthData) {
    return this.firestore.collection('user').add({
      email: authData.email,
      id: this.userId,
    });
  }

  updateUser(user: User) {
    return this.firestore.doc('user' + user.id).update(user);
  }
}
