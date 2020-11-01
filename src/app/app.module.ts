import { BrowserModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostDetailRoutedComponent } from './post-detail-routed/post-detail-routed.component';
import { HomeComponent } from './home/home.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { PageDetailRoutedComponent } from './page-detail-routed/page-detail-routed.component';
import { AdListComponent } from './ad-list/ad-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostDetailComponent,
    PostDetailRoutedComponent,
    HomeComponent,
    PostCardComponent,
    PageDetailComponent,
    PageDetailRoutedComponent,
    AdListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'eleventy-angular' }),
    TransferHttpCacheModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
