import { Component, OnInit } from '@angular/core';
import { PageService, PageDetail } from '../page.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-detail-routed',
  templateUrl: './page-detail-routed.component.html',
  styleUrls: ['./page-detail-routed.component.css']
})
export class PageDetailRoutedComponent implements OnInit {
  page: Observable<PageDetail>;

  constructor(private route: ActivatedRoute, private pageService: PageService) { }

  ngOnInit(): void {
    this.page = this.pageService.get(this.route.snapshot.paramMap.get('pageSlug'))
  }

}
