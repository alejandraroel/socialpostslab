import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts: Post[] = [
    {
      title: "Welcome",
      thought: "example post"
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

  deletePost = (index: number): void => {
    this.posts.splice(index, 1);
  };

  addPost = (post: Post): void => {
    this.posts.push(post);
  };

}
