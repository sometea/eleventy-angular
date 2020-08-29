import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailRoutedComponent } from './post-detail-routed.component';

describe('PostDetailRoutedComponent', () => {
  let component: PostDetailRoutedComponent;
  let fixture: ComponentFixture<PostDetailRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
