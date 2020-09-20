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

  private getBaseUrl() {
    if (isPlatformBrowser(this.platformId)) {
      return '';
    }
    // for build-time prerendering, need absolute urls
    // this also means that the eleventy server needs to
    // be running while prerendering
    return 'http://localhost:8080/';
  }

  private parsePage(page: any): Page {
    return { ...page, date: new Date(page.date) };
  }

  private parsePageDetail(page: any): PageDetail {
    return { ...page, date: new Date(page.date) };
  }

  list() {
    return this.http.get<PageListResponse>(`${this.getBaseUrl()}api/pages/index.json`)
      .pipe(
        map(response => response.pages),
        map(pages => pages.map(this.parsePage))
      );
  }

  get(pageSlug: string) {
    return this.http.get<PageDetail>(`${this.getBaseUrl()}api/pages/${pageSlug}.json`)
      .pipe(
        map(this.parsePageDetail)
      );
  }
}
