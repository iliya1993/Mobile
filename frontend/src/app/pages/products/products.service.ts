import {Injectable, Inject, Optional, OpaqueToken} from '@angular/core';
import * as moment from 'moment';
import {Config} from '../../../config';
import {Service} from '../../../app/shared/service';
import {SwaggerException} from '../../../app/shared/service';
import { Observable } from 'rxjs/Observable';
import { Headers, Response, RequestOptionsArgs} from '@angular/http';
export class MobileDto { 

    brand: string;
    model: string;
    processorFrequency: string;
    processorCoreCount: string;
    simType: string;
    id: number;


  constructor(data?: any) {
      if (data !== undefined) {
          this.id = data["id"] !== undefined ? data["id"] : undefined;
          this.brand = data["brand"] !== undefined ? data["brand"] : undefined;
          this.model = data["model"] !== undefined ? data["model"] : undefined;
          this.processorFrequency = data["processorFrequency"] !== undefined ? data["processorFrequency"] :undefined;
          this.processorCoreCount = data["processorCoreCount"] !== undefined ? data["processorCoreCount"] : undefined ;
          this.simType = data["simType"] !== undefined ? data["simType"] : undefined ;
      }
    }

  static fromJS(data: any): MobileDto {
      return new MobileDto(data);
  }
    toJS(data?: any) {
          
      data = data === undefined ? {} : data;
      data["id"] = this.id !== undefined ? this.id : false;
      data["brand"] = this.brand !== undefined ? this.brand : false;
      data["model"] = this.model !== undefined ? this.model : false;
      data["processorFrequency"] = this.processorFrequency !== undefined ? this.processorFrequency : false;
      data["processorCoreCount"] = this.processorCoreCount !== undefined ? this.processorCoreCount : false;
      data["simType"] = this.simType !== undefined ? this.simType : false;
      return data; 
  }

  toJSON() {
      return JSON.stringify(this.toJS());
  }

  clone() {
      const json = this.toJSON();
      return new MobileDto(JSON.parse(json));
  }

}

export class CreateMobileDto { 

    brand: string;
    model: string;
    processorFrequency: string;
    processorCoreCount: string;
    simType: string;

  constructor(data?: any) {
      if (data !== undefined) {
          this.brand = data["brand"] !== undefined ? data["brand"] : undefined;
          this.model = data["model"] !== undefined ? data["model"] : undefined;
          this.processorFrequency = data["processorFrequency"] !== undefined ? data["processorFrequency"] :undefined;
          this.processorCoreCount = data["processorCoreCount"] !== undefined ? data["processorCoreCount"] : undefined ;
          this.simType = data["simType"] !== undefined ? data["simType"] : undefined ;
      }
    }

  static fromJS(data: any): CreateMobileDto {
      return new CreateMobileDto(data);
  }
    toJS(data?: any) {
          
      data = data === undefined ? {} : data;
      data["brand"] = this.brand !== undefined ? this.brand : false;
      data["model"] = this.model !== undefined ? this.model : false;
      data["processorFrequency"] = this.processorFrequency !== undefined ? this.processorFrequency : false;
      data["processorCoreCount"] = this.processorCoreCount !== undefined ? this.processorCoreCount : false;
      data["simType"] = this.simType !== undefined ? this.simType : false;
      return data; 
  }

  toJSON() {
      return JSON.stringify(this.toJS());
  }

  clone() {
      const json = this.toJSON();
      return new CreateMobileDto(JSON.parse(json));
  }

}
export class PagedResultDtoOfProductDto { 
  items: MobileDto[];
  totalCount: number;
  constructor(data?: any) {
      if (data !== undefined) { 
       if (data["content"] && data["content"].constructor === Array) {
           this.items = [];
           for (let item of data["content"]){
              this.items.push(MobileDto.fromJS(item));}
       }
      }
  }

  static fromJS(data: any): PagedResultDtoOfProductDto{
      return new PagedResultDtoOfProductDto(data);
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
      return new PagedResultDtoOfProductDto(JSON.parse(json));
  }
}


@Injectable()
export class  MobilesService extends Service {
     /**
   * @return Success
   */
  get(id: number): Observable<MobileDto> {
    let url_ = Config.baseUrl + "mobile/";
    if (id !== undefined)
    
        url_ += encodeURIComponent("" + id);

    const content_ = "";
    
    return this.http.get(url_).map((response) => {
        return this.processGet(response);
    }).catch((response: any, caught: any) => {
        if (response instanceof Response) {
            try {
                return Observable.of(this.processGet(response));
            } catch (e) {
                return <Observable<MobileDto>><any>Observable.throw(e);
            }
        } else
            return <Observable<MobileDto>><any>Observable.throw(response);
    });
}

protected processGet(response: Response): MobileDto {
    const responseText = response.text();
    const status = response.status; 

    if (status === 200) {
        let result200: MobileDto = null;
        let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
        result200 = resultData200 ? MobileDto.fromJS(resultData200) : new MobileDto();
        return result200;
    } else if (status !== 200 && status !== 204) {
        this.throwException("An unexpected server error occurred.", status, responseText);
    }
    return null;
}
     /**
     * @return Success
     */
    update(input: MobileDto): Observable<MobileDto> {
        
        let url_ = Config.baseUrl + "mobile/";
        const content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.post(url_,content_).map((response) => {
            return this.processUpdate(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processUpdate(response));
                } catch (e) {
                    return <Observable<MobileDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<MobileDto>><any>Observable.throw(response);
        });
    }

    protected processUpdate(response: Response): MobileDto {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: MobileDto = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? MobileDto.fromJS(resultData200) : new MobileDto();
            return result200;
        } else if (status !== 200 && status !== 204) {
            this.throwException("An unexpected server error occurred.", status, responseText);
        }
        return null;
    }


     /**
     * @return Success
     */
    create(input: CreateMobileDto): Observable<CreateMobileDto> {
        
        let url_ = Config.baseUrl + "mobile/";
        const content_ = JSON.stringify(input ? input.toJS() : null);
        return this.http.post(url_,content_).map((response) => {
            return this.processCreate(response);
        }).catch((response: any, caught: any) => {
            if (response instanceof Response) {
                try {
                    return Observable.of(this.processCreate(response));
                } catch (e) {
                    return <Observable<MobileDto>><any>Observable.throw(e);
                }
            } else
                return <Observable<MobileDto>><any>Observable.throw(response);
        });
    }

    protected processCreate(response: Response): CreateMobileDto {
        const responseText = response.text();
        const status = response.status; 

        if (status === 200) {
            let result200: CreateMobileDto = null;
            let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
            result200 = resultData200 ? MobileDto.fromJS(resultData200) : new CreateMobileDto();
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
        let url_ = Config.baseUrl + "mobile/";
        if (id !== undefined)
            url_ +=  encodeURIComponent("" + id) ;
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
  /**
   * @return Success
   */
  getAll(maxResultCount: number,pageNumber: number ): Observable<PagedResultDtoOfProductDto> {
      let url_ = Config.baseUrl + "mobile/"; 
      return this.http.get(url_).map((response) => {
          return this.processGetAll(response);
      }).catch((response: any, caught: any) => {
          if (response instanceof Response) {
              try {
                  return Observable.of(this.processGetAll(response));
              } catch (e) {
                  return <Observable<PagedResultDtoOfProductDto>><any>Observable.throw(e);
              }
          } else
              return <Observable<PagedResultDtoOfProductDto>><any>Observable.throw(response);
      });
  }

  protected processGetAll(response: Response): PagedResultDtoOfProductDto {
      const responseText = response.text();
      const status = response.status; 

      if (status === 200) {
          let result200: PagedResultDtoOfProductDto = null;
          let resultData200 = responseText === "" ? null : JSON.parse(responseText, this.jsonParseReviver);
          result200 = resultData200 ? PagedResultDtoOfProductDto.fromJS(resultData200) : new PagedResultDtoOfProductDto();
          return result200;
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

