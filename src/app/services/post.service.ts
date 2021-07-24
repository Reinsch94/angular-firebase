import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from '../models/post.model';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class PostService {
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

  getPosts() {
    return this.firestore.collection('posts').snapshotChanges();
  }

  createPost(post: Post) {
    return this.firestore.collection('posts').add({
      creationDate: Timestamp.now(),
      title: post.title,
      content: post.content,
      authorId: this.userId,
    });
  }

  updatePost(post: Post) {
    return this.firestore.doc('posts/' + post.postId).update(post);
  }

  deletePost(postId: string) {
    return this.firestore.doc('posts/' + postId).delete();
  }
}
