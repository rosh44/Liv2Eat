import { Component } from '@angular/core';
import { NavController,AlertController,Platform, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {LocalNotifications } from '@ionic-native/local-notifications';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AngularFireAuth } from "angularfire2/auth";
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
//@ts-ignore
export class StatusPage {
  orders:  FirebaseListObservable<any[]>;
  myOrders : any[]=new Array();
  items: any[]=new Array();
  itemQuantity: String[]=new Array();
  uname;
  menu:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private aFauth: AngularFireAuth, public firebaseProvider: FirebaseProvider,public alertController: AlertController,private plt: Platform,private localNotifications: LocalNotifications,public backgroundMode : BackgroundMode) {
   this.menu="All"
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
    this.aFauth.authState.subscribe(data => {
     // console.log('A informacao de data ' + data.email);
      this.uname = data.email;
     this.loadData(this.uname,"All");
    });
    
    
  }
   loadData(uname: string,kitchen:string){

   // alert("in load data"+kitchen);
   //alert(kitchen);
    this.backgroundMode.enable();
  //  this.backgroundMode.on("activate").subscribe(()=>{
    if(kitchen=="All")
    {
      
    this.orders=this.firebaseProvider.retrieveOrder(uname);
    }
    else
    {
      this.orders=this.firebaseProvider.retrieveOrderFromKitchen(uname,kitchen);
    }
    this.orders.forEach(dataItem=> {    
     for(let y in Object.keys(dataItem))
    {//   console.log("Order retrieved this: "+ dataItem[y].Details);
          if(dataItem[y].Notification!=4){
         if(this.myOrders.find(z => z.id === dataItem[y].$key )){
            let a= this.myOrders.find(z => z.id === dataItem[y].$key );
            let index = this.myOrders.indexOf(a);
          this.myOrders[index].status=dataItem[y].Status;
            if(dataItem[y].Notification=='1' && dataItem[y].Status=='Ready')
            {
              this.sendNotification(dataItem[y].$key,dataItem[y].Status,kitchen);
              this.firebaseProvider.updateNotiStatus(dataItem[y].$key,dataItem[y].Notification,kitchen);
            }
            else if(dataItem[y].Notification=='2' && dataItem[y].Status=='Collected')
            {
              this.sendNotification(dataItem[y].$key,dataItem[y].Status,kitchen);
              this.firebaseProvider.updateNotiStatus(dataItem[y].$key,dataItem[y].Notification,kitchen);
            }
        }
         else{
        this.myOrders.push({id:dataItem[y].$key ,order:dataItem[y].Order, status:dataItem[y].Status, quantity:dataItem[y].Quantity });
        //this.items.push((dataItem[y].Order).split(','));
        //console.log("items: " + this.items);
      //  console.log(this.myOrders);
        if(dataItem[y].Notification=='0' && dataItem[y].Status=='Pending')
        {
            this.sendNotification(dataItem[y].$key,"placed","0");
            this.firebaseProvider.updateNotiStatus(dataItem[y].$key,dataItem[y].Notification,kitchen);
        }
         }
        }
    }
  });

//});
   }

  doRefresh(refresher) {
   // console.log('Begin async operation', refresher);
    setTimeout(() => {
    //  console.log('Async operation has ended');
      this.myOrders.length=0;
      this.loadData(this.uname,this.menu);
      refresher.complete();
    }, 2000);

  }
  tryLoad(kitchen)
  {
  //  alert("Inside"+kitchen);
   // this.orders.length=0;
   this.menu=kitchen;
   this.myOrders.length=0;
    this.loadData(this.uname,kitchen);
  }
  sendNotification(orderid,statusid,kitchen) {
    if(kitchen!=0)
    {
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'Order '+orderid+' is '+statusid,
      data: { mydata: 'My hidden message this is' },
      //icon :'https://www.clipartmax.com/png/middle/296-2964601_dish-spoon-and-fork-vector-fork-dish-spoon-icon.png'
    });
  }
  else
  {
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'Order '+orderid+' is placed',
      data: { mydata: 'My hidden message this is' },
      //icon :'https://www.clipartmax.com/png/middle/296-2964601_dish-spoon-and-fork-vector-fork-dish-spoon-icon.png'
    });
  }
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

}
