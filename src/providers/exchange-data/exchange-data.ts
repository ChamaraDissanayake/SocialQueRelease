import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';

@Injectable()
export class ExchangeDataProvider {
  
  customerList: any [];
  completedList: any[];
  absentList: any [];
  
  constructor(
    public http: HttpClient,
    private sqlite: SQLite,
    public platform: Platform,
    ) {
      this.customerList = [];
      this.completedList = []
      this.absentList = [];
      this.setupDB();
  }
  
  setupDB(){
    this.platform.ready().then((readySource) => {
      console.log(this.sqlite,'testing db')
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          console.log('11111')
          db.executeSql('create table customerDetails(name VARCHAR(32))', [])
            .then(() => console.log('Executed SQL'))
            .catch(e => console.log(e, 'Fail to execute'));
        })
        .catch(e => console.log(e));    
    })
  }
}
