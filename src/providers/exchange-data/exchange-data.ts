import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SQLite } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';
import { AndroidPermissions } from '@ionic-native/android-permissions';

@Injectable()
export class ExchangeDataProvider {
  baseURL: any;
  customerList: any [];
  completedList: any[];
  absentList: any [];
  insideCustomerCount: number;
  lastCustomerNumber: number;
  // private db: SQLiteObject;
  
  
  constructor(
    public androidPermissions: AndroidPermissions,
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
      this.baseURL = 'http://social.evokemusic.net/api/app/social-que/a-v1/putCustomerDetail'
  }

  setupDB(){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          // db.executeSql("CREATE TABLE IF NOT EXISTS seller_details" +
          //   "(SellerId INTEGER PRIMARY KEY AUTOINCREMENT,"+
          //   "MSISDN TEXT," +
          //   "OTP INTEGER," +
          //   "BusinessName TEXT," +
          //   "Categories TEXT," +
          //   "OccupentCount INTEGER," +
          //   "City TEXT," +
          //   "Language TEXT," +
          //   "GPS TEXT," +
          //   "CreatedTime INTEGER," +
          //   "UpdatedTime INTEGER," +
          //   "Type TEXT)", [])
          //     .then(() => console.log('Executed SQL 1'))
          //     .catch(e => console.log(e, 'Fail to execute 1'));
          
          db.executeSql("CREATE TABLE IF NOT EXISTS customer_details" +
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

  insertData(generateNumber, pNumber, status) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          db.executeSql("INSERT INTO customer_details (SellerId, MSISDN, QueNo, CreatedTime, Status) VALUES (1, '"+pNumber+"', '"+generateNumber+"', strftime('%s','now'), '"+status+"')", [])
          .then((data) => console.log("INSERTED SUCCESSFULLY", data))
          .catch(e => console.log("FAIL TO INSERT", e));
        })
        .catch(e => console.log(e));
    })
  }

  getData() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          // db.executeSql("SELECT * FROM customer_details WHERE Status = 'pending' OR Status = 'waiting' OR Status = 'inside'", [])
          db.executeSql("SELECT * FROM customer_details WHERE Status like '%pending%' OR Status like '%waiting%' OR Status like '%inside%' OR Status like '%skipped%'", [])
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
          })
          .catch(e => console.log("FAIL TO RETRIEVE", e));
        })
        .catch(e => console.log(e));
    })
  }

  syncData() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          db.executeSql("SELECT * FROM customer_details", [])
          .then((result) => {
            console.log("SUCCESS", result.rows);
            if (result.rows.length > 0) {
              for(let i=0; i <result.rows.length; i++) {
                this.createEntry(result.rows.item(i))
              }
            }
          })
          .catch(e => console.log("FAIL", e));
        })
        .catch(e => console.log(e));
    })
  }

  createEntry(syncData){
    let headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' }),
        options 	: any		= { "SellerId" : syncData.SellerId, "MSISDN" : syncData.MSISDN, "QueNo" : syncData.QueNo, "Status": syncData.Status, 
          "CreatedTime" : syncData.CreatedTime, "UpdatedTime" : syncData.UpdatedTime, "CheckInTime": syncData.CheckInTime},
        url       : any      	= this.baseURL;

      console.log('1111', url, JSON.stringify(options), headers)
      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) => {
        console.log(`Congratulations data was successfully added`, data);        
      },
      (error : any) => {
        console.log('Something went wrong!',error);
      });
   }

  resetTable(){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          db.executeSql("DROP TABLE IF EXISTS customer_details", [])
              .then(() => console.log('Executed Delete 1'))
              .catch(e => console.log(e, 'Fail to Delete 1'));
        })
        .catch(e => console.log(e));
    })
  }

  updateStatus(queNo, status){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          db.executeSql("UPDATE customer_details SET Status = '"+status+"', UpdatedTime = strftime('%s', 'now') WHERE QueNo = '"+queNo+"' ", [])
          .then((data) => console.log("UPDATED SUCCESSFULLY", data))
          .catch(e => console.log("FAIL TO UPDATED", e));
        })
        .catch(e => console.log(e));
    })
  }

  updateCheckIn(queNo, status){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'social_que.db',
        location: 'default'
      })
        .then((db) => {
          db.executeSql("UPDATE customer_details SET Status = '"+status+"', UpdatedTime = strftime('%s', 'now'), CheckInTime = strftime('%s', 'now') WHERE QueNo = '"+queNo+"' ", [])
          .then((data) => console.log("UPDATED SUCCESSFULLY", data))
          .catch(e => console.log("FAIL TO UPDATED", e));
        })
        .catch(e => console.log(e));
    })
  }

  requestSMSPermission(){
    this.platform.ready().then(() => {
      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS).
      then(success => {
        console.log('Successfully granted send sms permission')
      },
      err => {
        console.log('No permission to send sms permission')
      });
      
      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.RECEIVE_SMS).
      then(success => {
        console.log('Successfully granted send sms permission')
      },
      err => {
        console.log('No permission to send sms permission')
      });

      this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.SEND_SMS).
      then(success => {
        console.log('Successfully granted send sms permission')
      },
      err => {
        console.log('No permission to send sms permission')
      }); 
    },
    Error => {
      alert(JSON.stringify(Error))
    });
  }
}