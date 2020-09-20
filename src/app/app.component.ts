import { Component, OnInit } from '@angular/core';

import { PageService, Page } from './page.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'fluffy bunny adventures';
  pages: Observable<Page[]>

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
    this.pages = this.pageService.list();
  }
}
