import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-demo-firebase',
  templateUrl: 'demo-firebase.html',
})
export class DemoFirebasePage {
foodItems: FirebaseListObservable<any[]>;
 newItem = '';
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
		this.foodItems = this.firebaseProvider.getFoodItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoFirebasePage');
  }

  addItem() {
    this.firebaseProvider.addItem(this.newItem);
  }
 
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }
}
