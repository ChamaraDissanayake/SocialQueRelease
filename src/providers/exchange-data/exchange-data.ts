import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLite } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';

@Injectable()
export class ExchangeDataProvider {
  
  customerList: any [];
  completedList: any[];
  absentList: any [];
  insideCustomerCount: number;
  lastCustomerNumber: number;
  // private db: SQLiteObject;
  
  
  constructor(
    public http: HttpClient,
    private sqlite: SQLite,
    public platform: Platform,
    ) {
      this.customerList = [];
      this.completedList = [];
      this.absentList = [];
      this.insideCustomerCount = 0;
      this.lastCustomerNumber = 100000;
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
            "CreatedTime INTEGER," +
            "UpdatedTime INTEGER," +
            "Type TEXT)", [])
              .then(() => console.log('Executed SQL 1'))
              .catch(e => console.log(e, 'Fail to execute 1'));
          
          db.executeSql("CREATE TABLE IF NOT EXISTS CustomerDetails" +
            "(CustomerId INTEGER PRIMARY KEY AUTOINCREMENT,"+
            "SellerId INTEGER," +
            "MSISDN TEXT," +
            "QueNo INTEGER," +
            "CreatedTime INTEGER," +
            "UpdatedTime INTEGER," +
            "CheckInTime INTEGER," +
            "Status TEXT)", [])
              .then(() => console.log('Executed SQL 2'))
              .catch(e => console.log(e, 'Fail to execute 2'));
        })

        .catch(e => console.log(e));
        this.getData();
    })
  }

  insertData(generateNumber, pNumber, status, createdTime) {
    this.platform.ready().then((readySource) => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          db.executeSql("INSERT INTO CustomerDetails (SellerId, MSISDN, QueNo, CreatedTime, Status) VALUES (1, '"+pNumber+"', '"+generateNumber+"', strftime('%s','now'), '"+status+"')", [])
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
          // db.executeSql("SELECT * FROM CustomerDetails WHERE Status = 'pending' OR Status = 'waiting' OR Status = 'inside'", [])
          db.executeSql("SELECT * FROM CustomerDetails WHERE Status like '%pending%' OR Status like '%waiting%' OR Status like '%inside%' OR Status like '%skipped%'", [])
          .then((result) => {
            console.log("RETRIEVED SUCCESSFULLY", result.rows);
            // let activityValues = [];
            if (result.rows.length > 0) {
              for(let i=0; i <result.rows.length; i++) {                
                if(result.rows.item(i).Status == 'inside'){
                  this.insideCustomerCount++
                }
                this.lastCustomerNumber = result.rows.item(i).QueNo;
                this.customerList.push({id: result.rows.item(i).QueNo, pNumber: result.rows.item(i).MSISDN, status: result.rows.item(i).Status, updatedTime: result.rows.item(i).UpdatedTime})
              }
            }
            console.log(this.customerList, '11111');
          })
          .catch(e => console.log("FAIL TO RETRIEVE", e));
        })
        .catch(e => console.log(e));
    })
  }

  resetTable(){
    this.platform.ready().then((readySource) => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          db.executeSql("DROP TABLE IF EXISTS CustomerDetails", [])
              .then(() => console.log('Executed Delete 1'))
              .catch(e => console.log(e, 'Fail to Delete 1'));
        })
        .catch(e => console.log(e));
    })
  }

  updateStatus(queNo, status){
    this.platform.ready().then((readySource) => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          db.executeSql("UPDATE CustomerDetails SET Status = '"+status+"', UpdatedTime = strftime('%s','now') WHERE QueNo = '"+queNo+"' ", [])
          // db.executeSql("UPDATE CustomerDetails SET Status = '"+status+"', UpdatedTime = '"+updatedTime+"' WHERE QueNo = '"+queNo+"' ", [])
          .then((data) => console.log("UPDATED SUCCESSFULLY", data))
          .catch(e => console.log("FAIL TO UPDATED", e));
        })
        .catch(e => console.log(e));
    })
  }

  updateCheckIn(queNo, status){
    this.platform.ready().then((readySource) => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          db.executeSql("UPDATE CustomerDetails SET Status = '"+status+"', UpdatedTime = strftime('%s','now'), CheckInTime = strftime('%s','now') WHERE QueNo = '"+queNo+"' ", [])
          .then((data) => console.log("UPDATED SUCCESSFULLY", data))
          .catch(e => console.log("FAIL TO UPDATED", e));
        })
        .catch(e => console.log(e));
    })
  }
}