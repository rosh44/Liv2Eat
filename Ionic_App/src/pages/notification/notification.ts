import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  id:any;
  uname:any;
  wallet:any;
  amount:any[]=new Array();
  totalFriends:number[]=new Array();
  splitHead:any[]=new Array();
  splitDetails:any[]=new Array();
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseProvider: FirebaseProvider, public afd: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
    this.id=this.navParams.get('id');
    this.uname=this.navParams.get('username');
    this.getSplitRequest();
  }
  getSplitRequest()
  {
    this.firebaseProvider.getUserDetails(this.id).forEach(item=>{
      var keyid=Object.keys(item);
      this.splitDetails=[];
      this.amount=[];
      this.totalFriends=[];
        for(let x in keyid)
      {
       // this.orders=[];
     //   console.log("Data");
       // console.log(item[x].$key);
          if(item[x].$key=="SplitRequest")
          {
              for(let y in item[x])
              {
                this.splitDetails.push({name:item[x][y],id:y});
                this.firebaseProvider.getSplitDetails(y).forEach(splitItem=>{
                  console.log(item[0]);
                  var keyid=Object.keys(splitItem);
                  for(let x in keyid)
                {
                 // this.orders=[];
                  
                  if(splitItem[x].$key=="Amount")
                  {
                      this.amount.push(Number(splitItem[x].$value));
                  
                  }

                  if(splitItem[x].$key=="RequestSent")
                  {
                    var total=2;
                      for(let y in splitItem[x])
                      {
                        if(splitItem[x][y]>0)
                        total=total+splitItem[x][y];
                        
                      }
                      this.totalFriends.push(total);
                  }

                }
                console.log("##");
                console.log(this.amount);
                console.log(this.totalFriends);
                this.splitHead[y]=item[x][y];
              });
          }
        }
          if(item[x].$key=="Wallet")
            this.wallet=Math.floor(Number(item[x].$value)*100)/100;

        }
    });

  }
  fb:FirebaseListObservable<any>;
  acceptRequest(myId:any,requestId:any,deduct:number)
  {
    this.firebaseProvider.checkExistence(myId,requestId,deduct);
  
    this.firebaseProvider.acceptSplitRequest(myId,requestId,deduct);
  }
  rejectRequest(myId:any,requestId:any)
  {
    this.firebaseProvider.checkExistenceReject(myId,requestId);
    this.firebaseProvider.rejectSplitRequest(myId,requestId);
  }
}
