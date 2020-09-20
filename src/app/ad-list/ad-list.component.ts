import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AdService, Ad } from '../ad.service';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {
  ads: Observable<Ad[]>;

  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.ads = this.adService.list();
  }

}
