import { Component, Input } from '@angular/core';
import { PostDetail } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  @Input() post: PostDetail;

  constructor() { }

}
