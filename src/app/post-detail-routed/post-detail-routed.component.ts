import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService, PostDetail } from '../post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-detail-routed',
  templateUrl: './post-detail-routed.component.html',
  styleUrls: ['./post-detail-routed.component.css']
})
export class PostDetailRoutedComponent implements OnInit {
  post: Observable<PostDetail>;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.post = this.postService.get(this.route.snapshot.paramMap.get('postSlug'));
  }

}
