import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

// this intercepts every http request and also an error received from the end point.
// It also the ideal layer to inject tokens, etc in the header.
@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }

        const customReq = request.clone({
            headers: request.headers.set('Authorization', 'Bearer Wookie2019')
        });

        return next.handle(customReq);

    }
}