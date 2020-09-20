import { Component, Input } from '@angular/core';
import { PageDetail } from '../page.service';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css']
})
export class PageDetailComponent {
  @Input() page: PageDetail;

  constructor() { }

}
