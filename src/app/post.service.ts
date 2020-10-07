import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Post {
  title: string;
  url: string;
  fileSlug: string;
  date: Date;
  draft: boolean;
  image: string;
  teaser: string;
}

export interface ListResponse {
  posts: Post[];
}

export interface PostDetail {
  title: string;
  url: string;
  content: string;
  date: Date;
  author: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  private getBaseUrl() {
    if (isPlatformBrowser(this.platformId)) {
      return '';
    }
    // for build-time prerendering, need absolute urls
    // this also means that the eleventy server needs to
    // be running while prerendering
    return 'http://localhost:8080/';
  }

  private parsePost(post: any): Post {
    return { ...post, date: new Date(post.date) };
  }

  private parsePostDetail(post: any): PostDetail {
    return { ...post, date: new Date(post.date) };
  }

  list() {
    return this.http.get<ListResponse>(`${this.getBaseUrl()}api/posts/index.json`)
      .pipe(
        map(response => response.posts),
        map(posts => posts.map(this.parsePost))
      );
  }

  get(postSlug: string) {
    return this.http.get<PostDetail>(`${this.getBaseUrl()}api/posts/${postSlug}.json`)
      .pipe(
        map(this.parsePostDetail)
      );
  }
}
