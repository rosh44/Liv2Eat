import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { SplitcartPage } from '../splitcart/splitcart';
import { FriendsPage } from '../friends/friends';
/**
 * Generated class for the SplitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-split',
  templateUrl: 'split.html',
})
export class SplitPage {

  uname:any;
  flag:any=0;
  id:any;
  friendLength:any=0;
  items : any[];
  checked:boolean[]=new Array();
  friends:any[]=new Array();
  splitFriends:any[]=new Array();
  items2:any[]=new Array();
  pendingFriendStatus:any[]=new Array();
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseProvider: FirebaseProvider, public afd: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplitPage');
    //console.log(this.navParams.get('id'));
    this.uname=this.navParams.get('username');
    this.id=this.navParams.get('id');
    this.getFriends(this.uname,this.id);
    this.firebaseProvider.getMyFriends(this.id).forEach(item=>{
      this.friendLength=item.length;
    });
  }
  goFriendsPage()
  {
    this.navCtrl.push(FriendsPage,{
    id:this.id,
    username:this.uname});
  }
  check(id)
  {
    if(this.splitFriends[id]==null)
      this.splitFriends[id]=1;
    else
      this.splitFriends[id]=this.splitFriends[id]*-1;

  }

  async sendSplitPaymentRequest()
  {
    console.log("inside button");
    //console.log(this.navParams.get("order"));
    //console.log(this.navParams.get("price"));
    //console.log("%%%%");
    //console.log(this.navParams.get("kitchen"));
    var price;
    var kitchen;
    for(let x in this.navParams.get("price"))
    {
      if(price==null)
      {
      price=""+this.navParams.get("price")[x];
      kitchen=""+this.navParams.get("kitchen")[x];
      }
      else
      {
      price=price+","+this.navParams.get("price")[x];
      kitchen=kitchen+","+this.navParams.get("kitchen")[x];
      }
    }
    //console.log(price);
    //console.log(this.splitFriends);
    //console.log(this.navParams.get("order"));
    //console.log(this.id);
    await this.firebaseProvider.sendSplitRequest(this.id,this.splitFriends,this.navParams.get("order"),price,kitchen,"Tanmay");
    
   this.splitCart();
  }

  getFriends(user,uid)
  {
    this.firebaseProvider.friend(user,uid).forEach(item=>{

      var keyid3=Object.keys(item);
    for(let x in keyid3)
    {
        this.pendingFriendStatus[item[x].$key]=3;
    }

                this.firebaseProvider.getUserId().forEach(item=> {
                this.items=Object.keys(item);
                console.log(item[0].$key);
                this.friends=[];
               
                for(let x in this.items)
              { 	
                console.log(x);
                if(this.pendingFriendStatus[item[x].$key]==3 )
                {
                  this.checked.push(false);
                  this.friends.push({ name:item[x].Name, email:item[x].email,id:item[x].$key});
                }
              }                
                
              });
            });
  }
  splitCart()
  {
    //this.navCtrl.remove(this.navCtrl.getPrevious().index);
    
    this.navCtrl.setRoot(SplitcartPage,{
      id:this.navParams.get("id"), 
      username:this.navParams.get("username")
    });
  }

}
