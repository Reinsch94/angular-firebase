import { Component, OnInit } from '@angular/core';
import { PostService } from '@app/services/post.service';
import { Post } from '@app/models/post.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts!: Post[];
  postForm!: FormGroup;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data.map((post) => {
        return {
          ...(post.payload.doc.data() as Post),
        };
      });
    });
    this.postForm = new FormGroup({
      title: new FormControl('', {
        validators: [Validators.required],
      }),
      content: new FormControl('', { validators: [Validators.required] }),
    });
  }

  create() {
    console.log(this.postForm.value);
    this.postService.createPost(this.postForm.value);
  }
}
