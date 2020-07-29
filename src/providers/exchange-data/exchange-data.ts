import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';

@Injectable()
export class ExchangeDataProvider {
  
  customerList: any [];
  completedList: any[];
  absentList: any [];
  private db: SQLiteObject;
  
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
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          // db.executeSql('create table customerDetails(name VARCHAR(32))', [])
          db.executeSql("CREATE TABLE IF NOT EXISTS sellerDetails" +
            "(SellerId INTEGER PRIMARY KEY AUTOINCREMENT,"+
            "MSISDN TEXT," +
            "OTP INTEGER," +
            "BusinessName TEXT," +
            "Categories TEXT," +
            "OccupentCount INTEGER," +
            "City TEXT," +
            "Language TEXT," +
            "GPS TEXT," +
            "CreatedTime DATETIME," +
            "UpdatedTime DATETIME," +
            "Type TEXT)", [])
              .then(() => console.log('Executed SQL 1'))
              .catch(e => console.log(e, 'Fail to execute 1'));
          
          db.executeSql("CREATE TABLE IF NOT EXISTS CustomerDetails" +
            "(CustomerId INTEGER PRIMARY KEY AUTOINCREMENT,"+
            "SellerId INTEGER," +
            "MSISDN TEXT," +
            "QueNo INTEGER," +
            "CreatedTime DATETIME," +
            "UpdatedTime DATETIME," +
            "CheckInTime DATETIME," +
            "Status TEXT)", [])
              .then(() => console.log('Executed SQL 2'))
              .catch(e => console.log(e, 'Fail to execute 2'));
        })


        .catch(e => console.log(e));
    })
  }

  insertData() {    
    this.platform.ready().then((readySource) => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          db.executeSql("INSERT INTO CustomerDetails (SellerId, MSISDN, QueNo, Status) VALUES ('1', '+94714142387', 100001, 'pending')", [])
          .then((data) => console.log("INSERTED SUCCESSFULLY", data))
          .catch(e => console.log("FAIL TO INSERT", e));
        })
        .catch(e => console.log(e));
    })
  }

  getData() {
    this.platform.ready().then((readySource) => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          db.executeSql("SELECT * FROM CustomerDetails", [])
          .then((result) => {
            console.log("RETRIEVED SUCCESSFULLY", result.rows)
          })
          .catch(e => console.log("FAIL TO RETRIEVE", e));
        })
        .catch(e => console.log(e));
    })
  }
}
