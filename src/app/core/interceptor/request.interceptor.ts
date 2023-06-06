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
  ){
    const { authenticatioService } = this;
    console.log(this.authenticatioService.token);
    if (Boolean(authenticatioService.token)) {
      req = req.clone({
        setHeaders: {
          CacheControl: 'no-cache',
          Pragma: 'no-cache',
          Expires: 'Sat, 01 Jan 2000 00:00:00 GMT',
          Authorization: `Bearer ${authenticatioService.token}`
        }
      });
    }
    return next.handle(req);
  }
}