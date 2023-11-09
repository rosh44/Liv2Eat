import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";
/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {
  menuCategory: FirebaseListObservable<any[]>;
  menuItems:  FirebaseListObservable<any[]>;
  
	keys : any[];
	items : any[];
  foodItems:any[]=new Array();
  pendingFriends:any[]=new Array();
  friends:any[]=new Array();
  messages:any[]=new Array();

  pendingFriendStatus:any[]=new Array();
  sentFriends:any=new Array();
  test:any;
	items1:any[];
	items2: any[]=new Array();
	loadedItems:any[]=new Array();
	searchItems1:any[]=new Array();
	subitems:any[]=new Array();
	subitems1:any[]=new Array();
	ordereditems: any[]=new Array();
	menu:any;
	cost: any[]= new Array();
	dataItems:any[];
	aip:any[]=new Array();
  aip2:any[]=new Array();
  uname:any;
  check:any;
  id:any;
  pendingLength:any=0;
  friendLength:any=0;
	data:FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,private aFauth: AngularFireAuth, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public afd: AngularFireDatabase) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
    this.aFauth.authState.subscribe(data => {
      // console.log('A informacao de data ' + data.email);
       this.uname = data.email;
       console.log(data);
       this.setId(this.uname);
       
      
       
     });
     this.menu="category";
  }
  setUname(u:any,i:any)
  {
  // alert(i+u);
    this.id=i;
    this.uname=u;
  // alert(this.id+this.uname);
  //this.initializeItems(this.uname);
  }
  setId(u:any)
  {
    
 // console.log(this.firebaseProvider.getCurrentUserId(u).);
   this.firebaseProvider.getCurrentUserId(u).forEach(item=> {
      //console.log("###");
      //alert(item[0].$key);
      this.id=item[0].$key;
      this.initializeItems(u,this.id);
    });
    
   

  }
  initializeItems(uname:any,uid:any){


    console.log("get current user");
    //console.log(this.firebaseProvider.getCurrentUser(uid));
    this.firebaseProvider.getMyPendingRequest(uid).forEach(item=>{
      this.pendingLength=item.length;
    });
    this.firebaseProvider.getMyFriends(uid).forEach(item=>{
      this.friendLength=item.length;
    });
    this.firebaseProvider.getCurrentUser(uid).forEach(item=>{
      console.log(item[0]);
      var keyid=Object.keys(item);
      for(let x in keyid)
      {
          if(item[x].$key=="Friends")
          {
              for(let y in item[x])
              {
                this.pendingFriendStatus[y]=3;
              }
          }
          else if(item[x].$key=="SentRequest")
          {
            for(let y in item[x])
              {
                this.pendingFriendStatus[y]=2;
              }
          }
          else if(item[x].$key=="PendingRequest")
          {
            for(let y in item[x])
              {
                this.pendingFriendStatus[y]=1;
              }
          }
      }
      
       this.firebaseProvider.getUserId().forEach(item=> {
        this.items=Object.keys(item);
        console.log(item[0].$key);
        this.items2=[];
        this.pendingFriends=[];
        this.sentFriends=[];
        this.friends=[];
        console.log("pending status");
        console.log(this.pendingFriendStatus);
        for(let x in this.items)
      { 	
        console.log(x);
        if(this.pendingFriendStatus[item[x].$key]!=1 && this.pendingFriendStatus[item[x].$key]!=2 && this.pendingFriendStatus[item[x].$key]!=3 && item[x].$key !=uid)
        this.items2.push({ name:item[x].Name,last:item[x].Last, email:item[x].email,id:item[x].$key});
        else if(this.pendingFriendStatus[item[x].$key]==1)
        {
          this.pendingFriends.push({ name:item[x].Name,last:item[x].Last, email:item[x].email,id:item[x].$key});
        }
        else if(this.pendingFriendStatus[item[x].$key]==2)
        {
          this.sentFriends.push({ name:item[x].Name,last:item[x].Last, email:item[x].email,id:item[x].$key});
        }
        else if(this.pendingFriendStatus[item[x].$key]==3)
        {
          this.friends.push({ name:item[x].Name ,last:item[x].Last, email:item[x].email,id:item[x].$key});
        }
        console.log("Pending");
        console.log(this.pendingFriends);
        console.log("sent");
        console.log(this.sentFriends);
        console.log("friends");
        console.log(this.friends);

      }   

      console.log(this.items2);
      });

    });
    /*
    this.firebaseProvider.pendingRequest(uname,uid).forEach(item=>{
     // console.log("---###--");
     // console.log(item[0].$key);
      //console.log("---###--");
      var keyid=Object.keys(item);
      for(let x in keyid)
      {
          this.pendingFriendStatus[item[x].$key]=1;
      }
      //here

      this.firebaseProvider.sentRequest(uname,uid).forEach(item=>{

        var keyid2=Object.keys(item);
      for(let x in keyid2)
      {
          this.pendingFriendStatus[item[x].$key]=2;
      }


      this.firebaseProvider.friend(uname,uid).forEach(item=>{

        var keyid3=Object.keys(item);
      for(let x in keyid2)
      {
          this.pendingFriendStatus[item[x].$key]=3;
      }

                  this.firebaseProvider.getUserId().forEach(item=> {
                  this.items=Object.keys(item);
                  console.log(item[0].$key);
                  this.items2=[];
                  this.test="success";
                  for(let x in this.items)
                { 	
                  console.log(x);
                  if(this.pendingFriendStatus[item[x].$key]!=1 && this.pendingFriendStatus[item[x].$key]!=2 && this.pendingFriendStatus[item[x].$key]!=3 && item[x].$key !=uid)
                  this.items2.push({ name:item[x].Name, email:item[x].email,id:item[x].$key});
                  else if(this.pendingFriendStatus[item[x].$key]==1)
                  {
                    this.pendingFriends.push({ name:item[x].Name, email:item[x].email,id:item[x].$key});
                  }
                  else if(this.pendingFriendStatus[item[x].$key]==2)
                  {
                    this.sentFriends.push({ name:item[x].Name, email:item[x].email,id:item[x].$key});
                  }
                  else if(this.pendingFriendStatus[item[x].$key]==3)
                  {
                    this.friends.push({ name:item[x].Name, email:item[x].email,id:item[x].$key});
                  }
                  console.log("Pending");
                  console.log(this.pendingFriends);
                  console.log("sent");
                  console.log(this.sentFriends);
                  console.log("friends");
                  console.log(this.friends);

                }   

                console.log(this.items2);
                });
              });
            });
      //to here


    });
    */
   /* this.menuItems = this.firebaseProvider.getUserId(); 
    console.log(this.menuItems);
      //try jagged array
    this.test="fail";
          this.firebaseProvider.getUserId().forEach(item=> {
            this.items=Object.keys(item);
            console.log(item[0].$key);
            this.items2=[];
            this.test="success";
            for(let x in this.items)
          { 	
            console.log(x);
            this.items2.push({ name:item[x].Name, email:item[x].email,id:item[x].$key});
          }   

          console.log(this.items2);
          });
    //this.items2 = this.loadedItems;
    
    console.log(this.test);
    */
  
      }
  
      getItems(searchbar) {
    // Reset items back to all of the items
   // this.initializeItems();
    
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
      // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
    this.subitems1.length=0;
    for(let x in this.items2){
      this.subitems.length=0;
      this.subitems.push(this.items2[x]);
      console.log(this.subitems);
      for(let y in this.subitems){
      console.log(this.subitems[y]);
      //this.searchItems1 = 
      //console.log(this.items2[x][y]);
       this.items2[x]=this.subitems[y].filter((v) => { 
      console.log(v,v.name);
      if(v.name && q) {
      if (v.name.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        //this.subitems1.push(v);
        return true;
      }
      //this.items2[x][y]=0;	
      return false;
      }
    }); 		
    }
    }
    //var len=this.items2.length;
    //this.items2.splice(0,len,this.subitems1);
    console.log(q, this.items2.length);
    console.log(this.items2);
    
    }
    
    private item_qty = 0;
    foodItemCount: number[]= new Array();
    count=0;
    
    //  changes from here
    private initialize(element)
    {
    //alert(this.foodItemCount[element]);
      if(this.foodItemCount[element]==null)
    this.foodItemCount[element]=0;
      
      //alert(element+" count is"+this.foodItemCount[element]);
    }	
    
    private increment (element,price) {
    if(this.foodItemCount[element]==0)
    {
    this.ordereditems.push(element);
    this.cost[element]=price;
    }
  
    this.foodItemCount[element]++;
    //alert(this.foodItemCount[element]);
    }
    
    private decrement (element) {
    if(this.foodItemCount[element]!=0)
    this.foodItemCount[element]--;
    if(this.foodItemCount[element]==0)
      {
        const index = this.ordereditems.indexOf(element, 0);
        if (index > -1)
         {
        this.ordereditems.splice(index, 1);
        }
      }
    
    }
  
    //changes till here	
       /*private addInCart(name,price,quantity){
        this.ordereditems.push(name);
        this.cost.push(price);
        this.qty.push(quantity);
        console.log(this.ordereditems);
         console.log(this.cost);
         console.log(this.qty);
        }*/
    
        private addFriend(uid:any,id:any,uemail:any,email:any)
        {
          console.log(this.items2);
          
          this.firebaseProvider.sendFriendRequest(uid,id,uemail,email);
        }

        private acceptRequest(friendName:any,uid:any,id:any,uemail:any,email:any)
        {
          this.messages.push("You accepted"+friendName+"'s friend request");
          this.firebaseProvider.acceptFriendRequest(uid,id,uemail,email);
        }
        
        private rejectRequest(friendName:any,uid:any,id:any,uemail:any,email:any)
        {
          this.messages.push("You rejected"+friendName+"'s friend request");
          this.firebaseProvider.acceptFriendRequest(uid,id,uemail,email);
        }
  
        //changes
        private getPrice(value :any,data:any,x:any)
        {
          
          
          value.forEach(dataItem=> {
            let i=0;
            for(let y in Object.keys(dataItem))
            {
              this.aip[dataItem[y].$key]=dataItem[y].$value;
              
              i++;
            }
            console.log(this.aip+" ");
            this.items2[x].push({ name:data,availability:this.aip["Email"], price:this.aip["Name"]});
            this.aip.length=0;
            
          });
      //console.log(this.aip);
          
        }
    
        
}
