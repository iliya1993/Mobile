import {Injectable, Inject, Optional, OpaqueToken} from '@angular/core';
import * as moment from 'moment';
import {Config} from '../../../config';
import {Service} from '../../../app/shared/service';
import {SwaggerException} from '../../../app/shared/service';
import { Observable } from 'rxjs/Observable';
import { Headers, Response, RequestOptionsArgs} from '@angular/http';
import { CreateMobileDto } from '../products/products.service';
export class CreateCustomerDto { 
    address: string; 
    firstName: string;
    lastName: string;
    mobile: string;
    constructor(data?: any) {
        if (data !== undefined) {
            this.address = data["address"] !== undefined ? data["address"] : false;
            this.firstName = data["firstName"] !== undefined ? data["firstName"] : false;
            this.lastName = data["lastName"] !== undefined ? data["lastName"] : false;
            this.mobile = data["mobile"] !== undefined ? data["mobile"] : false ;
        }
    }
  
    static fromJS(data: any): CreateCustomerDto {
        return new CreateCustomerDto(data);
    }
      toJS(data?: any) {
            
        data = data === undefined ? {} : data;
        data["address"] = this.address !== undefined ? this.address : false;
        data["firstName"] = this.firstName !== undefined ? this.firstName : false;
        data["lastName"] = this.lastName !== undefined ? this.lastName : false;
        data["mobile"] = this.mobile !== undefined ? this.mobile : false;
        return data; 
    }
  
    toJSON() {
        return JSON.stringify(this.toJS());
    }
  
    clone() {
        const json = this.toJSON();
        return new CreateCustomerDto(JSON.parse(json));
    }
  
  }
export class CustomerDto { 
  address: string; 
  firstName: string;
  lastName: string;
  mobile: string;
  id: number;
  constructor(data?: any) {
      if (data !== undefined) {
          this.id = data["id"] !== undefined ? data["id"] : false;
          this.address = data["address"] !== undefined ? data["address"] : false;
          this.firstName = data["firstName"] !== undefined ? data["firstName"] : false;
          this.lastName = data["lastName"] !== undefined ? data["lastName"] : false;
          this.mobile = data["mobile"] !== undefined ? data["mobile"] : false ;
      }
  }

  static fromJS(data: any): CustomerDto {
      return new CustomerDto(data);
  }
    toJS(data?: any) {
          
      data = data === undefined ? {} : data;
      data["id"] = this.id !== undefined ? this.id : false;
      data["address"] = this.address !== undefined ? this.address : false;
      data["firstName"] = this.firstName !== undefined ? this.firstName : false;
      data["lastName"] = this.lastName !== undefined ? this.lastName : false;
      data["mobile"] = this.mobile !== undefined ? this.mobile : false;
      return data; 
  }

  toJSON() {
      return JSON.stringify(this.toJS());
  }

  clone() {
      const json = this.toJSON();
      return new CustomerDto(JSON.parse(json));
  }

}
export class PagedResultDtoOfCustomerDto { 
  items: CustomerDto[];
  constructor(data?: any) {
      if (data !== undefined) {
          console.log(data)
       if (data["content"] && data["content"].constructor === Array) {
           this.items = [];
           for (let item of data["content"]){
              this.items.push(CustomerDto.fromJS(item));}
       }
      }
  }

  static fromJS(data: any): PagedResultDtoOfCustomerDto{
      return new PagedResultDtoOfCustomerDto(data);
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
      return new PagedResultDtoOfCustomerDto(JSON.parse(json));
  }
}


@Injectable()
export class  ClientsService extends Service {
    
  /**
   * @return Success
   */
  get(id: number): Observable<CustomerDto> {
      let url_ = this.baseUrl + "client/";
      if (id !== undefined)
      
          url_ +=  encodeURIComponent("" + id) + "&";

      const content_ = "";
      
      return this.http.get(url_).map((response) => {
          return this.processGet(response);
      }).catch((response: any, caught: any) => {
          if (response instanceof Response) {
              try {
                  return Observable.of(this.processGet(response));
              } catch (e) {
                  return <Observable<CustomerDto>><any>Observable.throw(e);
              }
          } else
              return <Observable<CustomerDto>><any>Observable.throw(response);
      });
  }

  protected processGet(response: Response): CustomerDto {
      const responseText = response.text();
      const status = response.status; 

      if (status === 200) {
          let result200: CustomerDto = null;
          let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
          result200 = resultData200 ? CustomerDto.fromJS(resultData200) : new CustomerDto();
          return result200;
      } else if (status !== 200 && status !== 204) {
          this.throwException("An unexpected server error occurred.", status, responseText);
      }
      return null;
  }

  /**
   * @return Success
   */
  getAll(): Observable<PagedResultDtoOfCustomerDto> {
      let url_ = Config.baseUrl + "client/";
     
      return this.http.get(url_).map((response) => {
          return this.processGetAll(response);
      }).catch((response: any, caught: any) => {
          if (response instanceof Response) {
              try {
                  return Observable.of(this.processGetAll(response));
              } catch (e) {
                  return <Observable<PagedResultDtoOfCustomerDto>><any>Observable.throw(e);
              }
          } else
              return <Observable<PagedResultDtoOfCustomerDto>><any>Observable.throw(response);
      });
  }

  protected processGetAll(response: Response): PagedResultDtoOfCustomerDto {
      const responseText = response.text();
      const status = response.status; 

      if (status === 200) {
          let result200: PagedResultDtoOfCustomerDto = null;
          let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
          result200 = resultData200 ? PagedResultDtoOfCustomerDto.fromJS(resultData200) : new PagedResultDtoOfCustomerDto();
          return result200;
      } else if (status !== 200 && status !== 204) {
          this.throwException("An unexpected server error occurred.", status, responseText);
      }
      return null;
  }
   /**
     * @return Success
     */
    create(input: CreateCustomerDto): Observable<CreateCustomerDto> {
        
        let url_ = Config.baseUrl + "client/";
        const content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.post(url_,content_).map((response) => {
            return this.processCreate(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processCreate(response));
                } catch (e) {
                    return <Observable<CreateCustomerDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<CreateCustomerDto>><any>Observable.throw(response);
        });
    }

    protected processCreate(response: Response): CreateCustomerDto {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: CreateCustomerDto = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? CustomerDto.fromJS(resultData200) : new CreateCustomerDto();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }
    /**
     * @return Success
     */
    update(input: CustomerDto): Observable<CustomerDto> {
        
        let url_ = Config.baseUrl + "client/";
        const content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.post(url_,content_).map((response) => {
            return this.processUpdate(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processUpdate(response));
                } catch (e) {
                    return <Observable<CustomerDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<CustomerDto>><any>Observable.throw(response);
        });
    }

    protected processUpdate(response: Response): CustomerDto {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: CustomerDto = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? CustomerDto.fromJS(resultData200) : new CustomerDto();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }
    /**
     * @return Success
     */
    delete(id: number): Observable<void> {
        let url_ = Config.baseUrl + "client/";
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

