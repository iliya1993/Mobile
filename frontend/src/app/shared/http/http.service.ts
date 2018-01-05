import {Injectable} from '@angular/core';
import {Http, Headers,RequestOptions} from '@angular/http';

@Injectable()
export class HttpService {
    headers: Headers;
  constructor(private http: Http) {}

  private setHeader() {
      this.headers = new Headers({
                "Content-Type": "application/json; charset=UTF-8", 
                "Accept": "application/json; charset=UTF-8"
            });
        }
  
  get(url) {
     this.setHeader();
     return this.http.request(url, {
            body: "",
            method: "get",
            headers: this.headers,
            withCredentials: true 
        })
  }

  post(url, data) {
   this.setHeader();
    return this.http.request(url, {
            body: data,
            method: "post",
            headers: this.headers,
            withCredentials: true 
        })
  }
 put(url, data) {
    this.setHeader();
    return this.http.request(url, {
            body: data,
            method: "put",
            headers: this.headers,
            withCredentials: true 
        })
  }
delete(url, data) {
    this.setHeader();
    return this.http.request(url, new RequestOptions({
            body: data,
            method: "delete",
            headers: this.headers,
            withCredentials: true 
        }));
     
  }
}