import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class RestInterceptor implements HttpInterceptor {

  intercept(request, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone(this.getRequestParams(request));

    return next.handle(request);
  }

  private getRequestParams(request): any {
    return {
      url: `${environment.backendUrl}${request.url}`
    };
  }

}
