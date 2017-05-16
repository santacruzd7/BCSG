import { Injectable } from '@angular/core';
import { Jsonp, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ItunesSearchService {
  private jsonpSuffix = "&callback=JSONP_CALLBACK";
  constructor(private jsonp: Jsonp) { }

  public getData(iTunesURL: string): Observable<any> {
    return this.jsonp.get(iTunesURL + this.jsonpSuffix)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log('extracting data', body);
    return body;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error('err' + errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
