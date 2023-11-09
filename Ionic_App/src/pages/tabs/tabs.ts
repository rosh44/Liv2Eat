import { Component } from '@angular/core';

import { ProfilePage } from '../profile/profile';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';

import { StatusPage } from '../status/status';
import { IonicPage, NavController, NavParams,ModalController,Events} from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";
import { LoginPage } from '../login/login';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  foodId:any;
  id:any;
  uname:any;
  tab1Root = HomePage;
  tab2Root = ProfilePage;
  tab3Root = MenuPage;
  tab4Root = StatusPage;
 
  constructor(public events:Events,public navCtrl: NavController,private aFauth: AngularFireAuth, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public afd: AngularFireDatabase) {
    this.events.subscribe('user:logout',()=>{
      console.log("inside logout");
      try{
      const result =this.aFauth.auth.signOut();
        this.navCtrl.setRoot(LoginPage);
      }
      catch(e)
      {
        console.log("logout unsuccessful");
      }
    });

    
  
  }

 
  ionViewDidLoad(){
    console.log("2");

    var data=this.aFauth.authState.subscribe(data => {
     
    console.log("hi");
    this.uname = data.email;
    console.log(data);
    this.setId(this.uname);
      
    });
 
  }
  goToMenu(id:any,uname:any)
  {
    this.navCtrl.parent.select(1,{
      id:id,
      username:uname
    });
  }
  setId(u:any)
  {
    
 
   this.firebaseProvider.getCurrentUserId(u).forEach(item=> {
      this.id=item[0].$key;
      this.goMenuPage();
    });
    
   

  }
  goMenuPage()
  {
    this.firebaseProvider.getSplitDetails(this.id).forEach(item =>{
      // console.log(item);
       if(item[0]!=null)
       {
         this.foodId=
         {
           redirect:"Split",
           id:this.id,
           username:this.uname
 
         }; 
       }
       else
       {
        this.foodId=
        {
          
          id:this.id,
          username:this.uname

        }; 
       }
     });
  }

}
