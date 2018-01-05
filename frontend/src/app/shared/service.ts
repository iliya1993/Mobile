import { Observable } from 'rxjs/Observable';
import { Injectable, Inject, Optional, OpaqueToken , Component} from '@angular/core';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import {HttpService} from '../../app/shared/http/http.service';
export const API_BASE_URL = new OpaqueToken('API_BASE_URL');
import * as moment from 'moment';

@Injectable()
export class Service {

  public http: HttpService;
  public baseUrl: string;
  protected jsonParseReviver: (key: string, value: any) => any = undefined;
  
  constructor(@Inject(HttpService) http: HttpService, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
      this.http = http;
      this.baseUrl = baseUrl ? baseUrl : "";
  }
}
export class SwaggerException extends Error {
  message: string;
  status: number; 
  response: string; 
  result?: any; 

  constructor(message: string, status: number, response: string, result?: any) {
      super();

      this.message = message;
      this.status = status;
      this.response = response;
      this.result = result;
  }
}