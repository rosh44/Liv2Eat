import { Component } from '@angular/core';
import {MenuPage} from '../menu/menu';
import { ProfilePage } from '../profile/profile';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";
import { NotificationPage } from '../notification/notification';
import { RatingComponent } from '../../components/rating/rating';
import { SplitcartPage } from '../splitcart/splitcart';
import { CartPage } from '../cart/cart';
import { FriendsPage } from '../friends/friends';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  uname:any;
  id:any;
  flag;
orders1: FirebaseListObservable<any[]>;
myOrders1 : any[]=new Array();
splitNoti:any=0;
friendNoti:any=0;
orderItems : any[]=new Array();

  constructor(public navCtrl: NavController,private aFauth: AngularFireAuth, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public afd: AngularFireDatabase,private modal:ModalController)  {
    
  }
  ionViewDidLoad(){
   //this.uname=this.navParams.get('username');
    //console.log("this"+this.uname);
    //this.navCtrl.parent.getTab("tab3Root").setRoot(MenuPage);
    this.flag=0;
   this.aFauth.authState.subscribe(data => {

   console.log("hi");
   this.uname = data.email;
   console.log(data);
   this.setId(this.uname);
   this.orders1=this.firebaseProvider.retrieveOrder(this.uname);
   console.log("load array");
   console.log(this.orders1);
     
   this.orders1.forEach(dataItem => { 
     if(this.flag==0){
     this.myOrders1.splice(0,this.myOrders1.length,dataItem);
     console.log(this.myOrders1);
     this.flag=1;
   for( let y in this.myOrders1[0]){
     if(this.myOrders1[0][y].Notification == "3"){
       console.log( dataItem[y].$key);
       //this.myOrders1[0][y].Notification == "4";
       //this.firebaseProvider.updateNotiStatus(dataItem[y].$key,dataItem[y].Notification,"All"); 
       this.orderItems=this.myOrders1[0][y].Order.split(',');
        for(let x in this.orderItems){
         console.log(this.orderItems[x]);
         const myModal=this.modal.create(RatingComponent,{orderId: this.myOrders1[0][y].$key , foodItem: this.orderItems[x]});
          myModal.present();
          myModal.onDidDismiss(()=>{ 
            console.log("Modal Dismiss");
          this.firebaseProvider.updateNotiStatus(dataItem[y].$key,dataItem[y].Notification,"All"); 
        });
       }
     }
    }} 
   });
  
  });
  
  
  
  
  
  
  }

setId(u:any)
  {
    
 // console.log(this.firebaseProvider.getCurrentUserId(u).);
   this.firebaseProvider.getCurrentUserId(u).forEach(item=> {
      //console.log("###");
      //alert(item[0].$key);
      this.id=item[0].$key;
console.log("%%%%");
      this.firebaseProvider.getMySplitRequest(this.id).forEach(item=>{
        this.splitNoti=item.length;
      });;
      this.firebaseProvider.getMyPendingRequest(this.id).forEach(item=>{
        this.friendNoti=item.length;
      });;
      console.log(this.firebaseProvider.getMyPendingRequest(this.id));
      
      //  this.initializeItems(u,this.id);
    });
    
   

  }
  private sendData()
			{
				//console.log(this.ordereditems);
   				 //console.log(this.cost);
				//console.log(this.foodItemCount);
				
				if(this.navParams.get('redirect')=="Split")
				{
					this.navCtrl.setRoot(SplitcartPage, {
						id:this.navParams.get("id"), 
						username:this.navParams.get("username")
						});
				}
				else
				{
					this.navCtrl.setRoot(CartPage, {
						
						});
				}
			} 
  goMenuPage(id:any,uname:any) {
    
    this.firebaseProvider.getSplitDetails(id).forEach(item =>{
     // console.log(item);
      if(item[0]!=null)
      {
        this.navCtrl.parent.select(1,
        {
          redirect:"Split",
          id:id,
          username:uname

        }); 
        
      }
      else
      {
        this.navCtrl.parent.select(1);
        
      }
    });
  
    
   this.navCtrl.parent.select(1);
  }
  goFriendsPage() {
    this.navCtrl.push(FriendsPage); 
  }
    goNotificationPage(identity:any,uname:any) {
      this.navCtrl.setRoot(NotificationPage,{
        id:identity,
        username:uname
      });
     }
}
