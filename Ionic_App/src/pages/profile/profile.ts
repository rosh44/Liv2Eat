import { Component } from '@angular/core';
import { NavController,Events } from 'ionic-angular';
import { DemoFirebasePage } from '../demo-firebase/demo-firebase';
import { FriendsPage } from '../friends/friends';
import { WalletPage } from '../wallet/wallet';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AngularFireAuth } from "angularfire2/auth";
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PreviousOrderPage } from '../previous-order/previous-order';
import { LoginPage } from '../login/login';
@Component({
  selector: 'page-about',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  userData:  FirebaseListObservable<any[]>; 
  walletBalance: number=0;
  name:any;
  last:any;
  email:any;
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, private aFauth: AngularFireAuth,public events:Events) {
    this.aFauth.authState.subscribe(data => {
      console.log('A informacao de data ' + data.email);
      this.userData=this.firebaseProvider.getUser(data.email);
      console.log("userData");
      console.log(this.userData);
      this.userData.forEach(dataItem=> {    
        for(let y in Object.keys(dataItem))
        {   this.walletBalance= Math.floor(dataItem[y].Wallet*100)/100; 

            this.name=dataItem[y].Name;
            this.last=dataItem[y].Last;
            this.email=dataItem[y].email;
        }   
      });
    });    
  }
  logout()
  {
    this.events.publish('user:logout');
    //this.navCtrl.setRoot(LoginPage);
  }
  goDemoPage() {
  this.navCtrl.setRoot(PreviousOrderPage); }
  
  goFriendsPage() {
    this.navCtrl.push(FriendsPage); }
  goWalletPage()
  {
    this.navCtrl.push(WalletPage);
  }
}

