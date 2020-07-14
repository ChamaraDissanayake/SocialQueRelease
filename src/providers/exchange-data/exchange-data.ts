import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { SkippedPage } from '../../pages/skipped/skipped';

/*
  Generated class for the ExchangeDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExchangeDataProvider {

  skippedList: any[];
  
  constructor(public http: HttpClient) {
    console.log('Hello ExchangeDataProvider Provider');
    this.skippedList=[];
  }
  createSkippedList(occupent){
    this.skippedList.push([occupent]);
  }
}
