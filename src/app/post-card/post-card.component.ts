import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.service';

type Style = 'portrait' | 'landscape';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {
  @Input() post: Post;
  @Input() orientation: Style = 'portrait';

  constructor() { }
}
