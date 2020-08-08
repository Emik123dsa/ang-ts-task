import { Injectable } from "@angular/core";

import { HttpHeaders, HttpInterceptor, HttpEvent, HttpHandler, HttpClientXsrfModule, HttpRequest } from "@angular/common/http";
import { JwtSevice } from "../services/jwt.service";

import { Observable } from "rxjs";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private JwtService: JwtSevice) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const headersConfig = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    };

    const token = this.JwtService.getToken();

    token &&
      Object.assign({
        "Authorization": token
      }, headersConfig)

    const request = req.clone({ setHeaders: headersConfig });

    return next.handle(request);

  }
}