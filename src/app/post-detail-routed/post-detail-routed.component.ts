import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail-routed',
  templateUrl: './post-detail-routed.component.html',
  styleUrls: ['./post-detail-routed.component.css']
})
export class PostDetailRoutedComponent implements OnInit {
  postSlug = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.postSlug = this.route.snapshot.paramMap.get('postSlug');
  }

}
