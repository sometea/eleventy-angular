import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Post {
  title: string;
  url: string;
  fileSlug: string;
}

export interface ListResponse {
  posts: Post[];
}

export interface PostDetail {
  title: string;
  url: string;
  content: string;
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
    return 'http://localhost:4200/';
  }

  list() {
    return this.http.get<ListResponse>(`${this.getBaseUrl()}api/posts/index.json`).pipe(map(response => response.posts));
  }

  get(postSlug: string) {
    return this.http.get<PostDetail>(`${this.getBaseUrl()}api/posts/${postSlug}.json`);
  }
}
