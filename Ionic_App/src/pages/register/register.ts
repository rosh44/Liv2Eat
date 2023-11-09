import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ToastController, ToastOptions } from 'ionic-angular';
import { User } from 'firebase';
import { AngularFireAuth} from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { UserStudent } from '../../model/userstudent';
import { UserFaculty } from '../../model/userfaculty';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  regis:any;
  user = {} as User;
  userStud= {} as UserStudent;
  userFac= {} as UserFaculty;
  toastOptions;
  toastRequired;
  constructor(private aFuth: AngularFireAuth,private toastCtrl: ToastController,
    public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
      this.regis = "stud";
      this.toastOptions = 
      {
        message: 'Invalid Faculty ID',
        duration: 4000
      }
      this.toastRequired= 
      {
        message: 'All fields are required',
        duration: 4000
      }
  }

  async register(user: User)
  {

//const result = await this.aFuth.auth.createUserWithEmailAndPassword(user.email, user.password);

//console.log(result);


if(this.regis=='stud')
    { 
      if(user.name!='' && user.email!='' && user.password!='' && user.phonenumber!='')
        {
      const result = await this.aFuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result)
      {
        this.navCtrl.setRoot(LoginPage);
      }
      this.userStud.Name=user.name;
      this.userStud.Last=user.lname;
      this.userStud.email=user.email;
      this.userStud.password=user.password;
      this.userStud.phnno=user.phonenumber;
      this.userStud.user="Student";
      this.userStud.Wallet=0;
      this.firebaseProvider.addUserStud(this.userStud);
    }
    else
        {
          this.toastCtrl.create(this.toastRequired).present();
        }

    }
    if(this.regis=='fac'){
      
        if(user.name!='' && user.email!='' && user.password!='' && user.roomno!='' && user.phonenumber!='')
        {
        if(user.facId=='14544251'){
          
            const result = await this.aFuth.auth.createUserWithEmailAndPassword(user.email, user.password);
            if(result)
            {
              this.navCtrl.setRoot(LoginPage);
            }
            this.userFac.Name=user.name;
            this.userFac.Last=user.lname;
            this.userFac.email=user.email;
            this.userFac.password=user.password;
            this.userFac.phnno=user.phonenumber;
            this.userFac.facId=user.facId;
            this.userFac.roomno=user.roomnumber;
            this.userFac.user="Faculty";
            this.userFac.Wallet=0;
            if(this.userFac.email!=null)
            this.firebaseProvider.addUserFac(this.userFac);
          }
          else
          {
            this.toastCtrl.create(this.toastOptions).present();
          }
    }
    else{
           this.toastCtrl.create(this.toastRequired).present();
        }
    }
   
  }

}
