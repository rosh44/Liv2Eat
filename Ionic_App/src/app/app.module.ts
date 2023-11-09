import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BackgroundMode } from '@ionic-native/background-mode';


import { ProfilePage } from '../pages/profile/profile';
import { MenuPage } from '../pages/menu/menu';
import { HomePage } from '../pages/home/home';
import { StatusPage } from '../pages/status/status';
import { TabsPage } from '../pages/tabs/tabs';
import { CartPage } from '../pages/cart/cart';
import { DemoFirebasePage } from '../pages/demo-firebase/demo-firebase';
import { WalletPage } from '../pages/wallet/wallet';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
import {LocalNotifications} from '@ionic-native/local-notifications'; 


//rohan
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { FriendsPage } from '../pages/friends/friends';
import { SplitPage } from '../pages/split/split';
import { SplitcartPage } from '../pages/splitcart/splitcart';
import { NotificationPage } from '../pages/notification/notification';
import { PreviousOrderPage } from '../pages/previous-order/previous-order';
import { RatingComponent } from '../components/rating/rating';
import { BlankPage } from '../pages/blank/blank';



const firebaseConfig = {
    apiKey: "AIzaSyDAAPiZM3ar79SWsmd2lXU0Y14po5t3Ho8",
    authDomain: "canteen-b59c6.firebaseapp.com",
    databaseURL: "https://canteen-b59c6.firebaseio.com",
    projectId: "canteen-b59c6",
    storageBucket: "canteen-b59c6.appspot.com",
    messagingSenderId: "210011172914"
  };

@NgModule({
  declarations: [
    MyApp,
    ProfilePage,
    MenuPage,
    HomePage,
    TabsPage,
  DemoFirebasePage,
  CartPage,
  LoginPage,
  RegisterPage,
    StatusPage,
    FriendsPage,
    WalletPage,
    SplitPage,
    NotificationPage,
    SplitcartPage,
    PreviousOrderPage,
    BlankPage,
    RatingComponent
  ],
  imports: [
    BrowserModule,
	HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProfilePage,
    BlankPage,
    MenuPage,
    NotificationPage,
    HomePage,
    PreviousOrderPage,
    RatingComponent,
    TabsPage,
    SplitcartPage,
    LoginPage,
    RegisterPage,
  DemoFirebasePage,
  FriendsPage,
  CartPage,
  StatusPage,
  WalletPage,
  SplitPage
  ],
  providers: [
    BackgroundMode,
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
