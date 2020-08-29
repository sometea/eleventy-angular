import { Component, OnInit } from '@angular/core';

import { PostService, Post } from '../post.service';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;
  cols = 2;


  constructor(private postService: PostService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.getPosts();
    this.breakpointObserver.observe([Breakpoints.XSmall]).subscribe(result => {
      if (result.matches) {
        this.cols = 1;
      } else {
        this.cols = 2;
      }
    })
  }

  getPosts() {
    this.posts = this.postService.list();
  }

}
