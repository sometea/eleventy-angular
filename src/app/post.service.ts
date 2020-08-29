import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Post {
  title: string;
  url: string;
}

export interface ListResponse {
  posts: Post[];
}


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<ListResponse>('api/posts/index.json').pipe(map(response => response.posts));
  }
}
