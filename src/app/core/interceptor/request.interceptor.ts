import { AuthenticationService } from './../../modules/public/pages/login/services/authentication.service';
import {
  HttpHandler,
  HttpHeaderResponse,
  HttpInterceptor,
  HttpProgressEvent,
  HttpRequest,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private authenticatioService: AuthenticationService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<
    | HttpSentEvent
    | HttpHeaderResponse
    | HttpProgressEvent
    | HttpResponse<any>
    | HttpUserEvent<any>
  >{
    const { authenticatioService } = this;
    if (Boolean(authenticatioService.token)) {
      req = req.clone({
        headers: req.headers
          .set('Authorization', `Bearer ${authenticatioService.token}`)
      });
    }
    return next.handle(req);
  }
}