import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Order } from '../../model/order/order.model';
import { UserStudent } from '../../model/userstudent';
import { UserFaculty} from '../../model/userfaculty';
import { Kitchen } from '../../model/kitchen';

@Injectable()
//@ts-ignore
export class FirebaseProvider {
  keyId: string= '0';
  it: any;
  order = {} as Order;
  kitchen={} as Kitchen
  userS= {} as UserStudent;
  userF= {} as UserFaculty;
  data:FirebaseListObservable<any[]>;
  cat;

  constructor(public afd: AngularFireDatabase) {
   // console.log('Hello FirebaseProvider Provider');
  }
  
  getFoodItems() {
    return this.afd.list('/foodItems/');
  }
 
  addItem(name) {
    this.afd.list('/foodItems/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/foodItems/').remove(id);
  }
  
  getMenuCategory() {
    return this.afd.list('/menuCategory/');
  }
 getKitchenNames(){
  return this.afd.list('/Kitchen/');
 }
 getMenuItems() {
    return this.afd.list('/Menu/');
  }
  getUserId(){
    return this.afd.list('/Users/');
  }
  getUserDetails(value: String){
    this.it="Users/"+value+"/";
       return this.afd.list(this.it);

  }
  acceptSplitRequest(myId,requestId,deduct:number)
  {
    
    this.afd.list('/Users/'+myId+"/SplitRequest").remove(requestId);
    
    
  }
  rejectSplitRequest(myId,requestId)
  {
   
    this.afd.list('/Users/'+myId+"/SplitRequest").remove(requestId);
  }
  getCurrentUserId(uname1)
  {
    return this.afd.list('/Users', {query: {
      orderByChild: 'email',
      equalTo: uname1
    }});
  }
  getMenuSubItems(value: String)
  { //value.forEach(item=>{console.log(item)});
   
     //console.log("Value is"+Object.keys(this.afd.list('Menu/'+value+'/')));
   //console.log("this is"+value.toString);
   
   this.it="Menu/"+value+"/";
   //console.log(this.it);
     return this.afd.list(this.it);	
   
  }

  getBestSeller(value: String){
    let it="Menu/"+value+"/";
    return this.afd.list(it,{query:{
      orderByChild:'orderCount',
      limitToLast:1
    }});
  }

  updateWallet(balance:number, email:string){
    this.afd.list('/Users/').update(email, {Wallet: balance});
    }
    
addOrder(order: Order,kitchenFinal:Kitchen,kitchenAdd:any,kitchenQuantity:any) {
  this.order=order;
  console.log("ref try------------------------------"+this.afd.app.database().ref('MakeOrderId/latest'));
  
  var adaRankRef = this.afd.app.database().ref('MakeOrderId/latest');
  this.afd.list('/MakeOrderId/latest/');
//   console.log("this oid"+this.oid);
  var test= adaRankRef.on('value', function(snapshot) {
   // console.log( "val"+ snapshot.val()+" value"+order);
    return snapshot.val();
  });




  var test1=adaRankRef.transaction(function(currentId) {
    // If users/ada/rank has never been set, currentRank will be `null`.
    //const mylogic = require('./firebase.ts');
  
   this.oid=currentId;

  
     return currentId+1;
    });

  //  this.afd.list(`/orderData/`).update("32",order);

  var text="text";
  var afd=this.afd;
  test1.then(function(result)
  {
    //console.log(result["snapshot"].val()+" inside then "+order);
    //myfun(result["snapshot"].val());
 //   order.OrderId=-1*result["snapshot"].val();
    afd.list(`/orderData/`).update(String(result["snapshot"].val()),order);

    for(let x in kitchenAdd)
    {
       kitchenFinal.Order=kitchenAdd[x];
        kitchenFinal.Quantity=kitchenQuantity[x];
       kitchenFinal.Username= order.Username;
   //  this.firebaseProvider.addKitchen(this.kitchenFinal,x);
   afd.list('/Kitchen/'+x+'/').update(String(result["snapshot"].val()),kitchenFinal);

    }

  }
);

//Adding Order Count for ratings
let items: any[]=new Array();
items = order.Order.split(',');
console.log(items);
let flag1=0;
for(let z in items){
  console.log(items[z]);
  this.getMenuItems().forEach(item=> { 
    if(flag1==0){
    for(let x in Object.keys(item))
  {   
    for(let y in Object.keys(item[x]))
    {  
      if(Object.keys(item[x])[y] == items[z]){
        let cat1 = item[x].$key;
          console.log(cat1);
        let data = this.afd.list('/Menu/'+ cat1 +'/' + items[z] + '/');
        console.log(data);
        let count=0;
        let flag=0;
        data.forEach( i=>{
          if(flag==0){
          for(let m in Object.keys(i)){
            if(i[m].$key=="OrderCount")
            {
              console.log(i[m].$value);
              count = i[m].$value + 1;
              console.log(count);
              flag=1;
              flag1=1;
              
              this.afd.list('/Menu/'+ cat1 +'/' ).update( items[z], {OrderCount: count});
              break;
              
          }
          
        }}
        });
     
       
      }
      
    }
    }
  
   } });
   flag1=0;
   
   
}
items.length=0;
  
}


addSplitOrder(order: Order,kitchenFinal:Kitchen,kitchenAdd:any,kitchenQuantity:any,myId:any,splitFriends:any[],deduct:any) {
console.log("run 1");
console.log(splitFriends);
  for(let x in splitFriends)
  {
    console.log(x);
    this.afd.list('/Users/'+x+'/SplitRequest/').remove(myId);
 }

   this.afd.list("/SplitPayment/"+myId+"/SplitWallet/").forEach(item=>{
       var keyId=Object.keys(item);
       for(let y in keyId)
       {
        
             var a=item[y].$value - deduct;
             var adaRankRef = this.afd.app.database().ref('Users/'+y+'/Wallet/');
        adaRankRef.transaction(function(currentId) {
     
        return currentId+a;
         });

           
       }
      });
 
  var adaRankRef = this.afd.app.database().ref('Users/'+myId+'/Wallet/');
  adaRankRef.transaction(function(currentId) {
     
    return currentId-deduct;
     });


  this.addOrder(order,kitchenFinal,kitchenAdd,kitchenQuantity);
    

this.afd.list('/SplitPayment/').remove(myId);
  
}
sendFriendRequest(uid:string,id:string,uemail:string,email:string)
{
   //console.log("inside sendFriendReq"+id);
  //console.log(this.afd.list('/Users/'+id+'/'));
  console.log(email+" "+uemail);
  this.afd.list('/Users/'+id).update("PendingRequest",{[uid]:uemail});
  this.afd.list(`/Users/`+uid).update("SentRequest",{[id]:email});
}

acceptFriendRequest(uid:string,id:string,uemail:string,email:string)
{
  //console.log("inside sendFriendReq"+id);
 //console.log(this.afd.list('/Users/'+id+'/'));
 console.log(email+" "+uemail);
 this.afd.list('/Users/'+uid+"/PendingRequest").remove(id);
 this.afd.list('/Users/'+id+"/SentRequest").remove(uid);
 this.afd.list('/Users/'+id).update("Friends",{[uid]:uemail});
  this.afd.list(`/Users/`+uid).update("Friends",{[id]:email});
}
rejectFriendRequest(uid:string,id:string,uemail:string,email:string)
{
  //console.log("inside sendFriendReq"+id);
 //console.log(this.afd.list('/Users/'+id+'/'));
 console.log(email+" "+uemail);
 this.afd.list('/Users/'+uid+"/PendingRequest").remove(id);
 this.afd.list('/Users/'+id+"/SentRequest").remove(uid);
 
}

pendingRequest(uname1: string,id:string){
  
  //alert(id);
  
return this.afd.list('/Users/'+id+'/PendingRequest');
 }


 getCurrentUser(id:string){
  
  //alert(id);
  
return this.afd.list('/Users/'+id);
 }

 sentRequest(uname1: string,id:string){
  
  //alert(id);
  
return this.afd.list('/Users/'+id+'/SentRequest');
 }

 friend(uname1: string,id:string){
  
  //alert(id);
  
return this.afd.list('/Users/'+id+'/Friends');
 }
  retrieveOrder(uname1: string){
   // alert('All');
     return this.afd.list('/orderData', {query: {
      orderByChild: 'Username',
      equalTo: uname1
    }});

    

    //userQuery.subscribe(users => console.log(users));
    //return userQuery;
  }

  sendSplitRequest(id:any,splitRequest:any[],order:Order,price:any,kitchen:any,name:any)
  {
    this.afd.list('/SplitPayment/').update(id,{price:price});
    this.afd.list('/SplitPayment/').update(id,{kitchen:kitchen});
    this.afd.list('/SplitPayment/').update(id,order);
    var afd=this.afd;
    this.afd.list('/Users/'+id).forEach(name=>{
        for(let y in name)
        {
          if(name[y].$key=="Name")
          {
            
            for(let x in splitRequest)
            {
              if(splitRequest[x]==1)
              {

                var adaRankRef = this.afd.app.database().ref('SplitPayment/'+id);
                adaRankRef.once('value', function(snapshot) {
                  if (snapshot.hasChild("Amount")) {
                   // alert("exists");
                    //console.log("inside");
                    return 1;
                      }
                      else
                      return 0;
                }).then(function(result)
                {
                  if(result.val()["Amount"]!=null)
                  {
                    var adaRankRef1 = afd.app.database().ref('SplitPayment/'+id+'/RequestSent/'+x);
                         adaRankRef1.transaction(function(currentId) {
        
                         return 0;
                     });
                     console.log(name[y].$value);
                 afd.list('/Users/'+x+'/').update("SplitRequest",{[id]:name[y].$value});
                  }
                });

  
              }
            }
          }
        }
      
  });
  
    
    
  }
  removeSplitRequest(friendId:any,myId)
  {
    return this.afd.list('/Users/'+friendId+'/SplitRequest/').remove(myId);
  }
  retrieveOrderFromKitchen(uname1: string,kitchen:string){
   // alert('/Kitchen/'+kitchen);
    return this.afd.list('/Kitchen/'+kitchen, {query: {
     orderByChild: 'Username',
     equalTo: uname1
   }});

   

   //userQuery.subscribe(users => console.log(users));
   //return userQuery;
 }

 checkExistenceReject(myId:any,requestId:any)
 {
   var afd=this.afd;
  var adaRankRef = this.afd.app.database().ref('SplitPayment/'+requestId);
  adaRankRef.once('value', function(snapshot) {
    if (snapshot.hasChild("Amount")) {
     // alert("exists");
      //console.log("inside");
      return 1;
        }
        else
        return 0;
  }).then(function(result)
  {
    if(result.val()["Amount"]!=null)
    afd.list('/SplitPayment/'+requestId).update("RequestSent",{[myId]:-1});
  });



 }
 checkExistence(myId:any,requestId:any,deduct:number)
 {
   var afd=this.afd;
  var adaRankRef = this.afd.app.database().ref('SplitPayment/'+requestId);
   adaRankRef.once('value', function(snapshot) {
    if (snapshot.hasChild("Amount")) {
      //alert("exists");
      //console.log("inside");
      return 1;
        }
        else
        return 0;
  }).then(function(result)
  {
    if(result.val()["Amount"]!=null)
    {
      afd.list('/SplitPayment/'+requestId).update("RequestSent",{[myId]:1});


      var adaRankRef = afd.app.database().ref('Users/'+myId+'/Wallet/');
    adaRankRef.transaction(function(currentId) {
      // If users/ada/rank has never been set, currentRank will be `null`.
      //const mylogic = require('./firebase.ts');
    
       return currentId-deduct;
      });
      var adaRankRef1 = afd.app.database().ref('SplitPayment/'+requestId+'/SplitWallet/'+myId);
      adaRankRef1.transaction(function(currentId) {
        // If users/ada/rank has never been set, currentRank will be `null`.
        //const mylogic = require('./firebase.ts');
      
         return currentId+deduct;
        });
    }
    
    
  });
 }
  addToWallet(id:any,amount:number)
  {
    var adaRankRef = this.afd.app.database().ref('Users/'+id+'/Wallet/');
    adaRankRef.transaction(function(currentId) {
      // If users/ada/rank has never been set, currentRank will be `null`.
      //const mylogic = require('./firebase.ts');
    
       return currentId+amount;
      });
  }
  removeSplitPayment(id:any)
  {
    this.afd.list('/SplitPayment/').remove(id);
  }
  getSplitDetails(id:any)
  {
     return this.afd.list('/SplitPayment/'+id);
  }

  getMySplitRequest(id:any)
  {
     return this.afd.list('/Users/'+id+'/SplitRequest/');
  }
  getMyPendingRequest(id:any)
  {
     return this.afd.list('/Users/'+id+'/PendingRequest/');
  }
  getMyFriends(id:any)
  {
     return this.afd.list('/Users/'+id+'/Friends/');
  }
  addUserStud(userS){
    this.afd.list('/Users/').push(userS);
  }
  
  

  addUserFac(userF){
    this.afd.list('/Users/').push(userF);
  }
  
  getUser(email1){
    return this.afd.list('/Users/', {query: {
      orderByChild: 'email',
      equalTo: email1
      }});
  }

  insertRating(foodItem, rating:number,category){
        
    var adaRankRef1 = this.afd.app.database().ref('/Menu/'+ category+'/'+foodItem+'/'+'/RateCount/');
    var adaRankRef = this.afd.app.database().ref('/Menu/'+ category+'/'+foodItem+'/'+'/Rating/');
    adaRankRef1.transaction(function(rc) {

     rc=rc+1;
    
     adaRankRef.transaction(function(pr) {
      
         return ((pr*rc-1)+rating)/(rc);
       });
   
    return rc; 
   });
}

getOrderCount(cat, item)
{
return this.afd.list('/Menu/'+ cat+'/' + item + '/');

}



updateNotiStatus(orderid:string,noti:string,kitchen){

// var rootRef=  AngularFireModule.database().ref().child("orderData");
if(kitchen=="All")
{
   if(noti=='0')
   this.afd.list('/orderData/').update(orderid, {Notification: '1'});
   else if(noti=='1')
   this.afd.list('/orderData/').update(orderid, {Notification: '2'});
   else if(noti=='2'){
   this.afd.list('/orderData/').update(orderid, {Notification: '3'});
   }
   else if(noti=='3')
   this.afd.list('/orderData/').update(orderid, {Notification: '4'});

   
}
else
{
 if(noti=='0')
 this.afd.list('/kitchen/'+kitchen+'/').update(orderid, {Notification: '1'});
 else if(noti=='1')
 this.afd.list('/kitchen/'+kitchen+'/').update(orderid, {Notification: '2'});
 else if(noti =='2')
 this.afd.list('/kitchen/'+kitchen+'/').update(orderid, {Notification: '3'});
}
}

}
