import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Post } from '../post.service';

type Style = 'portrait' | 'landscape';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
  @Input() post: Post;
  @Input() orientation: Style = 'portrait';

  effectiveOrientation: Style = 'portrait';

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall]).subscribe(result => {
      console.log(result);
      this.effectiveOrientation = result.matches ? 'portrait' : this.orientation;
    });
  }

}
