import { Component, OnInit } from "@angular/core";

import { PostService, Post } from "../post.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"],
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts();
  }

  getOrientation(index: number) {
    return index === 0 ? "landscape" : "portrait";
  }

  private getPosts() {
    this.posts = this.postService
      .list()
      .pipe(map((posts) => posts.filter((post) => !post.draft)));
  }
}
