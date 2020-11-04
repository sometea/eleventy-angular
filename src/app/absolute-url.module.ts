import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';

// Unfortunately, the angular mechanism for making relative urls absolute on the server side
// break the state transfer to the client, since it manipulates the cache key for the url
// being fetched by HttpClient. This is why we have to write our own HttpInterceptor that
// makes relative urls absolute on the server side.
class AbsoluteUrlInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      // hardcode this to localhost:4200. the ssr:dev server will be running on this point
      // and serve the assets during prerendering.
      const url = new URL(req.url, 'http://localhost:4200');
      return next.handle(req.clone({url: url.toString()}));
    }
}

@NgModule({
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: AbsoluteUrlInterceptor, multi: true }
    ]
  })
export class AbsoluteUrlModule {}