import { Component } from '@angular/core';
import { PostService, Post } from './post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-eleventy-blog';
  posts: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.postService.list();
  }
}
