import {Injectable, Inject, Optional, OpaqueToken} from '@angular/core';
import * as moment from 'moment';
import {Config} from '../../../config';
import {Service} from '../../shared/service';
import {SwaggerException} from '../../shared/service';
import { Observable } from 'rxjs/Observable';
import { Headers, Response, RequestOptionsArgs} from '@angular/http';


export class UserDto  { 
    id: string;
    firstName: string; 
    lastName: string;
    position: string;
    constructor(data?: any) {
        if (data !== undefined) {
            this.id = data["id"] !== undefined ? data["id"] : false;
            this.firstName = data["firstName"] !== undefined ? data["firstName"] : false;
            this.lastName = data["lastName"] !== undefined ? data["lastName"] : false;
            this.position = data["position"] !== undefined ? data["position"] : false;
        }
    }
  
    static fromJS(data: any): UserDto {
        return new UserDto(data);
    }
      toJS(data?: any) {
            
        data = data === undefined ? {} : data;
        data["id"] = this.id !== undefined ? this.id : false;
        data["firstName"] = this.firstName !== undefined ? this.firstName : false;
        data["lastName"] = this.lastName !== undefined ? this.lastName : false; 
        data["position"] = this.position !== undefined ? this.position : false;
        return data; 
    }
  
    toJSON() {
        return JSON.stringify(this.toJS());
    }
  
    clone() {
        const json = this.toJSON();
        return new UserDto(JSON.parse(json));
    }
}
export class CreateUserDto  { 
    firstName: string; 
    lastName: string;
    position: string;
    constructor(data?: any) {
        if (data !== undefined) {
            this.firstName = data["firstName"] !== undefined ? data["firstName"] : false;
            this.lastName = data["lastName"] !== undefined ? data["lastName"] : false;
            this.position = data["position"] !== undefined ? data["position"] : false;
        }
    }
  
    static fromJS(data: any): CreateUserDto {
        return new CreateUserDto(data);
    }
      toJS(data?: any) {
            
        data = data === undefined ? {} : data;
        data["firstName"] = this.firstName !== undefined ? this.firstName : false;
        data["lastName"] = this.lastName !== undefined ? this.lastName : false; 
        data["position"] = this.position !== undefined ? this.position : false;
        return data; 
    }
  
    toJSON() {
        return JSON.stringify(this.toJS());
    }
  
    clone() {
        const json = this.toJSON();
        return new CreateUserDto(JSON.parse(json));
    }
}
    export class PagedResultDtoOfUserDto { 
        items: UserDto[];
        totalCount: number;
        constructor(data?: any) {
            if (data !== undefined) {
             if (data["content"] && data["content"].constructor === Array) {
                 this.items = [];
                 for (let item of data["content"]){
                    this.items.push(UserDto.fromJS(item));}
             }
            }
        }
      
        static fromJS(data: any): PagedResultDtoOfUserDto{
            return new PagedResultDtoOfUserDto(data);
        }
      
        toJS(data?: any) {
            data = data === undefined ? {} : data;
            if (this.items && this.items.constructor === Array) {
                data["content"] = [];
                for (let item of this.items){
                 
                    data["content"].push(
                      item.toJS()
                    );
                  }
            }
            return data; 
        }
      
        toJSON() {
            return JSON.stringify(this.toJS());
        }
      
        clone() {
            const json = this.toJSON();
            return new PagedResultDtoOfUserDto(JSON.parse(json));
        }
      }
      
      
      @Injectable()
      export class  ManagersService extends Service {
          
      
        /**
         * @return Success
         */
        getAll(rows: number , page: number): Observable<PagedResultDtoOfUserDto> {
            let url_ = Config.baseUrl + "manager/";
            return this.http.get(url_).map((response) => {
                return this.processGetAll(response);
            }).catch((response: any, caught: any) => {
                if (response instanceof Response) {
                    try {
                        return Observable.of(this.processGetAll(response));
                    } catch (e) {
                        return <Observable<PagedResultDtoOfUserDto>><any>Observable.throw(e);
                    }
                } else
                    return <Observable<PagedResultDtoOfUserDto>><any>Observable.throw(response);
            });
        }
      
        protected processGetAll(response: Response): PagedResultDtoOfUserDto {
            const responseText = response.text();
            const status = response.status; 
      
            if (status === 200) {
                let result200: PagedResultDtoOfUserDto = null;
                let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                result200 = resultData200 ? PagedResultDtoOfUserDto.fromJS(resultData200) : new PagedResultDtoOfUserDto();
                return result200;
            } else if (status !== 200 && status !== 204) {
                this.throwException("An unexpected server error occurred.", status, responseText);
            }
            return null;
        }
         /**
           * @return Success
           */
          create(input: CreateUserDto): Observable<UserDto> {
              
              let url_ = Config.baseUrl + "manager/";
              const content_ = JSON.stringify(input ? input.toJS() : null);
              return this.http.post(url_,content_).map((response) => {
                  return this.processCreate(response);
              }).catch((response: any, caught: any) => {
                  if (response instanceof Response) {
                      try {
                          return Observable.of(this.processCreate(response));
                      } catch (e) {
                          return <Observable<UserDto>><any>Observable.throw(e);
                      }
                  } else
                      return <Observable<UserDto>><any>Observable.throw(response);
              });
          }
      
          protected processCreate(response: Response): UserDto {
              const responseText = response.text();
              const status = response.status; 
      
              if (status === 200) {
                  let result200: UserDto = null;
                  let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                  result200 = resultData200 ? UserDto.fromJS(resultData200) : new UserDto();
                  return result200;
              } else if (status !== 200 && status !== 204) {
                  this.throwException("An unexpected server error occurred.", status, responseText);
              }
              return null;
          }
          /**
           * @return Success
           */
          update(input: UserDto): Observable<UserDto> {
              
              let url_ = Config.baseUrl + "manager/";
              const content_ = JSON.stringify(input ? input.toJS() : null);
              return this.http.post(url_,content_).map((response) => {
                  return this.processUpdate(response);
              }).catch((response: any, caught: any) => {
                  if (response instanceof Response) {
                      try {
                          return Observable.of(this.processUpdate(response));
                      } catch (e) {
                          return <Observable<UserDto>><any>Observable.throw(e);
                      }
                  } else
                      return <Observable<UserDto>><any>Observable.throw(response);
              });
          }
      
          protected processUpdate(response: Response): UserDto {
              const responseText = response.text();
              const status = response.status; 
      
              if (status === 200) {
                  let result200: UserDto = null;
                  let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
                  result200 = resultData200 ? UserDto.fromJS(resultData200) : new UserDto();
                  return result200;
              } else if (status !== 200 && status !== 204) {
                  this.throwException("An unexpected server error occurred.", status, responseText);
              }
              return null;
          }
          /**
           * @return Success
           */
          delete(id: string): Observable<void> {
              let url_ = Config.baseUrl + "manager/";
              if (id !== undefined)
                  url_ += encodeURIComponent("" + id) ;
              const content_ = "";
              return this.http.delete(url_,content_).map((response) => {
                  return this.processDelete(response);
              }).catch((response: any, caught: any) => {
                  if (response instanceof Response) {
                      try {
                          return Observable.of(this.processDelete(response));
                      } catch (e) {
                          return <Observable<void>><any>Observable.throw(e);
                      }
                  } else
                      return <Observable<void>><any>Observable.throw(response);
              });
          }
      
          protected processDelete(response: Response): void {
              const responseText = response.text();
              const status = response.status; 
      
              if (status === 200) {
                  return null;
              } else if (status !== 200 && status !== 204) {
                  this.throwException("An unexpected server error occurred.", status, responseText);
              }
              return null;
          }
        protected throwException(message: string, status: number, response: string, result?: any): any {
            if(result !== null && result !== undefined)
                throw result;
            else
                throw new SwaggerException(message, status, response);
        }
      }
