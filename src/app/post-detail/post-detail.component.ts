import { Component, OnInit, Input } from '@angular/core';
import { PostService, PostDetail } from '../post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  @Input() postSlug: string;
  post: Observable<PostDetail>;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.post = this.postService.get(this.postSlug);
  }

}
