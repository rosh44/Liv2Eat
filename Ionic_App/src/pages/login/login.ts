import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ToastOptions } from 'ionic-angular';
import { User } from '../../model/user';
import { AngularFireAuth } from "angularfire2/auth";
import { RegisterPage } from '../register/register';
import { TabsPage } from "../tabs/tabs";
import { HomePage } from '../home/home';
import firebase from 'firebase';
import { BlankPage } from '../blank/blank';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})


//@ts-ignore
export class LoginPage {
toastOptions: ToastOptions



 user = {} as User;
 error1: any;
  flag=0;
  constructor(private aFauth: AngularFireAuth, private toastCtrl: ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
      this.toastOptions = 
      {
        message: 'Invalid Email id or Password',
        duration: 5000
      }
  } 

ionViewCanEnter()
{
 //this.checkUser();
 // console.log("logged in");
 

  return true;
  
}

 checkUser()
{
  let self=this;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //console.log(user);
      self.navCtrl.setRoot(TabsPage); //to the page where user navigates after login
      // User is signed in.
    } 
  });
}

 async login(user: User)
 {

  this.navCtrl.setRoot(BlankPage,{
    incoming : "login",
    email :  this.user.email,
    password : this.user.password
  });
  /*
try{
const result =  await this.aFauth.auth.signInWithEmailAndPassword(this.user.email, this.user.password);
//console.log("$$$$");
//console.log(result);

  if(this.flag==0){
  this.navCtrl.setRoot(TabsPage);
  this.flag=1;
  }
}catch(e){

  console.log("failure");
  this.toastCtrl.create(this.toastOptions).present(); 
this.navCtrl.setRoot(LoginPage);
}
*/
 }


/* result.then(auth => {
  this.navCtrl.setRoot("HomePage");
})
.catch(
  
  error => {
    
  this.error1 = error;
 
  //this.navCtrl.setRoot("LoginPage");

  
  this.toastCtrl.create(this.toastOptions).present();

  console.log(error);
}); */

 register()
 {
   this.navCtrl.push(RegisterPage);
 }

}










 
  


