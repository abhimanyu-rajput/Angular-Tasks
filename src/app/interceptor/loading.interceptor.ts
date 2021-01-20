import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TempdataService } from '../services/tempdata.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private tds: TempdataService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.tds.loading.next(true);

    return next.handle(request).pipe(
      finalize(() => {
        console.log(request);
        
        this.tds.loading.next(false);
      })
    );
  }
}
