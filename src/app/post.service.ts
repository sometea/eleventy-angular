import { Injectable } from '@angular/core'; 
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

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ListResponse>('api/posts/index.json').pipe(map(response => response.posts));
  }

  get(postSlug: string) {
    return this.http.get<PostDetail>(`api/posts/${postSlug}.json`);
  }
}
