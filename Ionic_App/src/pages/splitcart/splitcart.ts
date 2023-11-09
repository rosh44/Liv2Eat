import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Menu } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { MenuPage } from '../menu/menu';
import { Order } from '../../model/order/order.model';
import { Kitchen } from '../../model/kitchen';
import { StatusPage } from '../status/status';
import { HomePage } from '../home/home';
/**
 * Generated class for the SplitcartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splitcart',
  templateUrl: 'splitcart.html',
})
export class SplitcartPage {
  uname:any;
  flag:any=0;
  kitchen2:any[]=new Array();
  orderData:any[]=new Array();
  orderQuantity:any[]=new Array();
  kitchenAdd:any[]=new Array();
  kitchenQuantity:any[]=new Array();
  itemQuantity:any[]=new Array();
  itemPrice:any[]=new Array();
  splitStatus:any[]=new Array();
  id:any;
  walletBalance:any;
  amount:any;
  flagCancel:any=0
  totalFriends:number;
  friends:any[]=new Array();
  splitFriends:any[]=new Array();
  orders:any[]=new Array();
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
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseProvider: FirebaseProvider, public afd: AngularFireDatabase) {
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplitcartPage');
    //this.navCtrl.remove(this.navCtrl.getPrevious().index);
    this.uname=this.navParams.get("username");
    this.id=this.navParams.get("id");
    
  }
  ionViewDidEnter()
  {
    this.getSplitRequest();
  }
  async cancel()
  {
    
     this.firebaseProvider.getSplitDetails(this.id).forEach(item=>{
      if(this.flag==0)
      {
        this.flag=1;
        for(let x in item)
        {
          if(item[x].$key=="RequestSent")
          {
            for(let y in item[x])
            {
              if(item[x][y]==0)
              {
                console.log("remove request");
                console.log(y);
                console.log(this.id);
                this.firebaseProvider.removeSplitRequest(y,this.id);
               
              }
            }
          }
          if(item[x].$key=="SplitWallet")
          {
            for(let y in item[x])
            {
              console.log("remove wallet");
              console.log(y+item[x][y]);
              this.firebaseProvider.addToWallet(y,item[x][y]);
            }
          }
        }
      }
    });

    this.firebaseProvider.removeSplitPayment(this.id);
   this.navCtrl.setRoot(HomePage);
  }
    getSplitRequest()
    {
      
      this.firebaseProvider.getSplitDetails(this.id).forEach(item=>{
        //console.log(item[0]);
        var keyid=Object.keys(item);
        for(let x in keyid)
      {
       // this.orders=[];
       // console.log("Data");
        //console.log(item[x].$key);
          if(item[x].$key=="RequestSent")
          {
            var total=1;
              for(let y in item[x])
              {

                if(item[x][y]>0)
                 total=total+item[x][y];

                this.splitFriends[y]=item[x][y];
              }
              this.totalFriends=total;
          }

          if(item[x].$key=="Amount")
           {
            this.amount=item[x].$value;      
           } 

          this.firebaseProvider.getUserId().forEach(item=> {
            var keys=Object.keys(item);
           // console.log(item[0].$key);
            
            this.friends=[];
            for(let x in keys)
            {
              
              if(this.splitFriends[item[x].$key]==0 || this.splitFriends[item[x].$key]==1|| this.splitFriends[item[x].$key]==-1 )
              {
                this.friends.push({ name:item[x].Name, email:item[x].email,id:item[x].$key,status:this.splitFriends[item[x].$key]});
              }
              else if(item[x].$key==this.id)
              {
                
                this.walletBalance=Math.floor(Number(item[x].Wallet)*100)/100;
              }
            }
            //console.log("###");
            //console.log(this.friends);
          });
          
          if(item[x].$key=="Order")
          {
            this.orders=item[x].$value.split(",");
          // console.log(item[x].$value);
          }
          
          if(item[x].$key=="Quantity")
          {
            this.itemQuantity=item[x].$value.split(",").map(Number);
          }
          
          if(item[x].$key=="price")
          {
            this.itemPrice=item[x].$value.split(",").map(Number);
          }
          
          
         // this.orders.push({order:item[x].Order, quantity:item[x].Quantity, price:item[x].price });
         /* console.log("##$$##"); 
          
          console.log(this.itemPrice);
          console.log(this.itemQuantity);
          console.log(this.orders);
          */
      }



      });
    }
    
     addInDb(deduct:number)
    {
      this.firebaseProvider.getSplitDetails(this.id).forEach(item=>{
       // console.log("add in db");
        var keyid=Object.keys(item);
        for(let x in keyid)
        {
          if(item[x].$key=="Order")
          {
        this.order.Order=item[x].$value;
            this.orderData=item[x].$value.split(",");
          }
          if(item[x].$key=="Quantity")
          {
          this.order.Quantity=item[x].$value;
          this.orderQuantity=item[x].$value.split(",");
          }
          if(item[x].$key=="Username")
        this.order.Username=item[x].$value;
        if(item[x].$key=="Time")
        this.order.Time=item[x].$value;
        if(item[x].$key=="Date")
          this.order.Date=item[x].$value;
          if(item[x].$key=="Amount")
          this.order.Amount=item[x].$value;
          if(item[x].$key=="Details")
          this.order.Details=item[x].$value;

          if(item[x].$key=="kitchen")
            this.kitchen2=item[x].$value.split(",");

            if(item[x].$key=="RequestSent")
            this.splitFriends=item[x];
            

        }
        for(let x in this.orderData)
            {
              if(this.kitchenAdd[this.kitchen2[x]]==null)
              {
                this.kitchenAdd[this.kitchen2[x]]=this.orderData[x];
                this.kitchenQuantity[this.kitchen2[x]]=this.orderQuantity[x];
              }
              else{
                this.kitchenAdd[this.kitchen2[x]]=this.kitchenAdd[this.kitchen2[x]]+","+this.orderData[x];
                this.kitchenQuantity[this.kitchen2[x]]=this.kitchenQuantity[this.kitchen2[x]]+","+this.orderQuantity[x];
              }
            }
            
            /*console.log("%%%##$$");
            console.log(this.splitFriends);
            console.log(this.kitchenAdd);
            console.log(this.kitchenQuantity);
            console.log(deduct);
            console.log(this.id);*/
            if(this.flag==0)
            {
              this.flag=1;
        this.firebaseProvider.addSplitOrder(this.order,this.kitchenFinal,this.kitchenAdd,this.kitchenQuantity,this.id,this.splitFriends,deduct);
        this.navCtrl.setRoot(MenuPage,
                                    { id:this.id,
                                  username:this.uname});
        this.navCtrl.parent.select(2);
            }

      });
    }    
    goback()
  {
//alert("goback");
//console.log(this.qty2);
    this.navCtrl.setRoot(MenuPage,{
      id:this.navParams.get('id'),
      username:this.navParams.get('username'),
      redirect:"Split",
      segment:"full",
      
    });
   
  }
    splitQuan(qty,price)
    { 
      //this.itemQuantity.length=0;
      //console.log(qty);
      if(qty.length > 1){
      this.itemQuantity= qty.split(',');
      this.itemPrice=price.split(',');
        //console.log("array is" + this.itemQuantity);
      }
  
      else{
      this.itemQuantity = qty;
      this.itemPrice=price;
     // console.log("array is" + this.itemQuantity[0]); 
    }
    
  }
}
