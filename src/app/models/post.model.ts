import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

export interface Post {
  postId: string;
  creationDate: Timestamp;
  title?: string;
  content: string;
  authorId: string;
}
