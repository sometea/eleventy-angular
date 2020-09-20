import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDetailRoutedComponent } from './page-detail-routed.component';

describe('PageDetailRoutedComponent', () => {
  let component: PageDetailRoutedComponent;
  let fixture: ComponentFixture<PageDetailRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDetailRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDetailRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
