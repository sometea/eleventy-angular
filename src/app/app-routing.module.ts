import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailRoutedComponent } from './post-detail-routed/post-detail-routed.component';
import { HomeComponent } from './home/home.component';
import { PageDetailRoutedComponent } from './page-detail-routed/page-detail-routed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts/:postSlug', component: PostDetailRoutedComponent },
  { path: 'pages/:pageSlug', component: PageDetailRoutedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
