import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController,Platform, NavParams, Menu ,Events} from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { StatusPage } from '../status/status';
import { Order } from '../../model/order/order.model';
import { User } from '../../model/user';
import {LocalNotifications } from '@ionic-native/local-notifications';
import { AngularFireAuth } from "angularfire2/auth";
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FriendsPage } from '../friends/friends';
import { MenuPage } from '../menu/menu';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Kitchen } from '../../model/kitchen';
import { SplitPage } from '../split/split';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
  
})
//@ts-ignore
export class CartPage {
  ordereditems2: any[]=new Array();
  cost2: any[]= new Array();
  kitchen2:any[]=new Array();
  kitchenAdd:any[]=new Array();
  kitchenQuantity:any[]=new Array();
  qty2:any[]= new Array();
  totalPrice: number = 0;
  userId: string;
  username:any;
  walletBalance: number=0;
  user = {} as User;
  order: Order = {
    Order: '',
    Status: 'Pending',
    Amount: '',
    Quantity: '',
    Username: '' ,   
    Details: '',
    Notification:'0',
    Date:'',
    Time:'',
    Room: ''
  };

  kitchenFinal: Kitchen = {
    Order: '',
    Status: 'Pending',
    Quantity: '',
    Username: '' ,   
    Details: '',
    Notification:'0',
    Date:'',
    Time:'',
    Room:''
  };
  user1: string;
  roomno: string;
  userData:  FirebaseListObservable<any[]>; 
  checked: boolean;
  rmno: string;

  constructor(public events:Events,public navCtrl: NavController,public alertController: AlertController,private aFauth: AngularFireAuth, public navParams: NavParams, public firebaseProvider: FirebaseProvider,private plt: Platform,private localNotifications: LocalNotifications) {
    this.aFauth.authState.subscribe(data => {
      console.log('A informacao de data ' + data.email);
      this.order.Username = data.email;
      this.kitchenFinal.Username = data.email;
      this.username=data.email;
      this.userData=this.firebaseProvider.getUser(data.email);
      console.log("userData");
      console.log(this.userData);
      this.userData.forEach(dataItem=> {    
        for(let y in Object.keys(dataItem))
        {   this.user1=dataItem[y].user;
            this.roomno= dataItem[y].roomno;  
            this.userId= dataItem[y].$key;
            this.walletBalance= Math.floor(dataItem[y].Wallet*100)/100; 
            console.log( this.user1);
        }   
      });
    });    
    this.plt.ready().then((rdy) => {
      //@ts-ignore
      this.localNotifications.on('click', (notification, state) =>{
        let json = JSON.parse(notification.data);
   
        let alert = alertController.create({
          title: notification.title,
          subTitle: json.mydata
        });
        alert.present();
      })
    });
    this.ordereditems2 = navParams.get('ordereditems1');
    this.cost2 = navParams.get('cost1');
    this.qty2 = navParams.get('qty1');
    this.kitchen2=navParams.get('kitchen');
    console.log(this.ordereditems2);
    console.log(this.cost2);
    console.log(this.qty2);
    console.log("-------------");
    console.log(this.kitchen2);
    this.totalPrice=0;
    
    this.totalPrice=0;
     for(let x in this.ordereditems2){
      console.log( this.cost2[x] + " " + Number(this.cost2[x]) + " " + this.totalPrice);
      this.totalPrice= this.totalPrice +  Number(this.qty2[this.ordereditems2[x]])*Number(this.cost2[this.ordereditems2[x]]);
    }

    this.order.Amount="" + this.totalPrice;
   // this.sendNotification();

   let date = new Date();
   let h=date.getHours(); 
  let m=date.getMinutes(); 
  let s=date.getSeconds();
  let d= date.getDate();
  let mon=date.getMonth();
  let yr=date.getFullYear(); 
  let day=date.getDay();
console.log("Current DateTime ",date);
console.log("Time", h ,":",m,":",s);
console.log("Date", d,"/", mon,"/",yr);
console.log("Day", day);
    this.order.Date=d+"/"+mon+"/"+yr;
    this.order.Time=h +":"+m+":"+s;
    this.kitchenFinal.Date=d+"/"+mon+"/"+yr;
    this.kitchenFinal.Time=h +":"+m+":"+s;


  }


  increment(n) {
    
    /*if(this.foodItemCount[element]==0)
   {
   this.ordereditems.push(element);
   this.cost[element]=price;
   }*/
 
  //alert("increment "+this.qty2[n]);  
   this.qty2[n]=Number(this.qty2[n])+1;
   //alert(this.foodItemCount[element]);
   this.totalPrice=this.totalPrice+Number(this.cost2[n]);
   }
   
    decrement(n) {
    if(Number(this.qty2[n])!=0)
    {
    this.qty2[n]=Number(this.qty2[n])-1;
    this.totalPrice=this.totalPrice-Number(this.cost2[n]);
      if(this.qty2[n]==0){
        for(let y in this.ordereditems2){
            if(this.ordereditems2[y]==n){
              console.log(y);
              this.ordereditems2.splice(Number(y),1);
              console.log(this.ordereditems2);
            }
        }
      }
    }  
    
//Roshni changes

  //Roshni changes done
   }
  kitchenNames:  FirebaseListObservable<any[]>;
  
  
  private addInDb(){
    console.log(this.order);
  
    this.kitchenAdd=[];
    this.kitchenQuantity=[];
    console.log("######### kitchenAdd");
    console.log(this.kitchenAdd);
    this.walletBalance=this.walletBalance-this.totalPrice;
    this.firebaseProvider.updateWallet(this.walletBalance,this.userId);
    console.log(this.kitchenQuantity);
    this.order.Order='';
    this.order.Amount='';
    this.order.Quantity='';
    for(let x in this.ordereditems2){
      if(Number(x)!=this.ordereditems2.length-1)
    {this.order.Order= this.order.Order + this.ordereditems2[x] + ",";
    this.order.Quantity=this.order.Quantity + this.qty2[this.ordereditems2[x]] + ",";
    this.order.Amount=""+this.totalPrice;
    //this.totalPrice= this.totalPrice +  Number(this.qty2[this.ordereditems2[x]])*Number(this.cost2[this.ordereditems2[x]]);
    }
      else{
      this.order.Order= this.order.Order + this.ordereditems2[x] ;
      this.order.Quantity=this.order.Quantity + this.qty2[this.ordereditems2[x]];
      this.order.Amount=""+this.totalPrice;
    }
  }
  
          if(this.checked){
          this.order.Room= this.rmno;
          this.kitchenFinal.Room=this.rmno;
          console.log(this.order.Room);
          }

    for(let x in this.ordereditems2)
    {
      console.log("######### orderitems2");
      console.log(this.ordereditems2[x]);
      
     
      if(this.kitchenAdd[this.kitchen2[this.ordereditems2[x]]]==null)
      {
        this.kitchenAdd[this.kitchen2[this.ordereditems2[x]]]=this.ordereditems2[x];
        this.kitchenQuantity[this.kitchen2[this.ordereditems2[x]]]=this.qty2[this.ordereditems2[x]];
      }
      else{
        this.kitchenAdd[this.kitchen2[this.ordereditems2[x]]]=this.kitchenAdd[this.kitchen2[this.ordereditems2[x]]]+","+this.ordereditems2[x];
        this.kitchenQuantity[this.kitchen2[this.ordereditems2[x]]]=this.kitchenQuantity[this.kitchen2[this.ordereditems2[x]]]+","+this.qty2[this.ordereditems2[x]];
      }
    }
    this.firebaseProvider.addOrder(this.order,this.kitchenFinal,this.kitchenAdd,this.kitchenQuantity);
    this.navCtrl.setRoot(StatusPage);
    

    console.log(this.kitchenAdd);

  }
  goback()
  {
//alert("goback");
console.log(this.qty2);
    this.navCtrl.setRoot(MenuPage,{
      idData:2,
      ordereditem:this.ordereditems2,
      segment:"full",
      quantity:this.qty2,
      price:this.cost2,
      kitchen:this.kitchen2
    });
   
  }
  splitPayment(uname:any,uid:any)
  {
    this.order.Order='';
    this.order.Amount='';
    this.order.Quantity='';
    for(let x in this.ordereditems2){
      if(Number(x)!=this.ordereditems2.length-1)
    {this.order.Order= this.order.Order + this.ordereditems2[x] + ",";
    this.order.Quantity=this.order.Quantity + this.qty2[this.ordereditems2[x]] + ",";
    this.order.Amount=""+this.totalPrice;
    //this.totalPrice= this.totalPrice +  Number(this.qty2[this.ordereditems2[x]])*Number(this.cost2[this.ordereditems2[x]]);
    }
      else{
      this.order.Order= this.order.Order + this.ordereditems2[x] ;
      this.order.Quantity=this.order.Quantity + this.qty2[this.ordereditems2[x]];
      this.order.Amount=""+this.totalPrice;
    }
  }
  
    this.navCtrl.push(SplitPage,{
      id:uid,
      order:this.order,
      username:uname,
      price:this.cost2,
      kitchen:this.kitchen2
      
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  sendNotification(orderid,statusid) {
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'Order '+orderid+' is '+statusid,
      data: { mydata: 'My hidden message this is' },

    });
  }

}
