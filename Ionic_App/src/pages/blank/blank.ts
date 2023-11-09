import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, ToastOptions } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth } from "angularfire2/auth";
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
/**
 * Generated class for the BlankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {

  flag=0;
  toastOptions: ToastOptions;
  constructor(private aFauth: AngularFireAuth,
    public navCtrl: NavController,private toastCtrl: ToastController, public navParams: NavParams) {
      this.toastOptions = 
      {
        message: 'Invalid Email id or Password',
        duration: 5000
      }
    }


  ionViewDidLoad() {
      console.log('ionViewDidLoad BlankPage');
      if(this.navParams.get("incoming")=="login")
      {
        this.login(this.navParams.get("email"),this.navParams.get("password"));
      }
      this.checkUser();
    }
   async login(email,password)
  {
    try{
      const result =  await this.aFauth.auth.signInWithEmailAndPassword(email, password);
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
      else
      {
        self.navCtrl.setRoot(LoginPage);
      } 
    });
  } 

}
