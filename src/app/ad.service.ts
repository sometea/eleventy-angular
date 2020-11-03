import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export interface Ad {
  title: string;
  url: string;
  fileSlug: string;
  date: Date;
  content: string;
}

export interface AdListResponse {
  ads: Ad[];
}

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) { }

  private parseAd(ad: any): Ad {
    return { ...ad, date: new Date(ad.date) };
  }

  list() {
    return this.http.get<AdListResponse>('api/ads/index.json')
      .pipe(
        map(response => response.ads),
        map(ads => ads.map(this.parseAd))
      );
  }

  get(adSlug: string) {
    return this.http.get<Ad>(`api/ads/${adSlug}.json`)
      .pipe(
        map(this.parseAd)
      );
  }
}
