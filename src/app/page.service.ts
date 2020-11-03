import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Page {
  title: string;
  url: string;
  fileSlug: string;
  date: Date;
}

export interface PageListResponse {
  pages: Page[];
}

export interface PageDetail {
  title: string;
  url: string;
  content: string;
  date: Date;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  private parsePage(page: any): Page {
    return { ...page, date: new Date(page.date) };
  }

  private parsePageDetail(page: any): PageDetail {
    return { ...page, date: new Date(page.date) };
  }

  list() {
    return this.http.get<PageListResponse>('api/pages/index.json')
      .pipe(
        map(response => response.pages),
        map(pages => pages.map(this.parsePage))
      );
  }

  get(pageSlug: string) {
    return this.http.get<PageDetail>(`api/pages/${pageSlug}.json`)
      .pipe(
        map(this.parsePageDetail)
      );
  }
}
