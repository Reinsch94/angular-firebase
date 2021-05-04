import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private firestore: AngularFirestore) {}

  getPosts() {
    return this.firestore.collection('posts').snapshotChanges();
  }

  createPost(post: Post) {
    return this.firestore.collection('posts').add(post);
  }

  updatePost(post: Post) {
    return this.firestore.doc('posts/' + post.id).update(post);
  }

  deletePost(postId: string) {
    return this.firestore.doc('posts/' + postId).delete();
  }
}
