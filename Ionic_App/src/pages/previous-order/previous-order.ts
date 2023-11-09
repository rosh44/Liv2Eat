import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
/**
 * Generated class for the PreviousOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-previous-order',
  templateUrl: 'previous-order.html',
})
export class PreviousOrderPage {
uname;
orders1:  FirebaseListObservable<any[]>;
myOrders1 : any[]=new Array();
itemQuantity: String[]=new Array();
orderItems : any[]=new Array();
  constructor(public navCtrl: NavController, public navParams: NavParams, private aFauth: AngularFireAuth, public firebaseProvider: FirebaseProvider) {
    
    setTimeout(() => {
      this.aFauth.authState.subscribe(data => {
   
    this.uname = data.email;
    this.orders1=this.firebaseProvider.retrieveOrder(this.uname);
    
    this.orders1.forEach(dataItem => { 
      for(let y in Object.keys(dataItem))
      { 
        if(dataItem[y].Notification=='4'){
          this.myOrders1.push({id:dataItem[y].$key,order:dataItem[y].Order, quantity:dataItem[y].Quantity});
        }
      }
      });    
      });
   
    });
  }
    
  splitQuan(qty)
  { 
    //this.itemQuantity.length=0;
    //console.log(qty);
    if(qty.length > 1){
    this.itemQuantity= qty.split(',');
      //console.log("array is" + this.itemQuantity);
    }

    else{
    this.itemQuantity = qty;
   // console.log("array is" + this.itemQuantity[0]); 
  }
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviousOrderPage');
  }

}
