import { Component, Input, EventEmitter ,Output} from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { NavParams, Modal, ViewController  } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';

enum COLORS{
  GREY="#E0E0E0",
  GREEN="#76FF03",
  YELLOW="#FFCA28",
  RED="#DD2C00"
}

@Component({
  selector: "rating",
  templateUrl: "rating.html"
})

export class RatingComponent {
 
  @Input() rating: number=0 ;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();;

  sendrating=[];
  foodItem;
  id;
  data:FirebaseListObservable<any[]>;
  cat;
  constructor(private fdb:AngularFireDatabase,private  navParams: NavParams,  public  viewCtrl: ViewController, public firebaseProvider: FirebaseProvider) {
     this.foodItem = this.navParams.get('foodItem');
    this.id = this.navParams.get('orderId');
  }

  rate(index: number) {
      this.rating=index;
      this.ratingChange.emit(this.rating);
      //window.alert("You have rated your food "+this.rating.toString() +" stars");
   }

  getColor(index: number) {
     if(this.isAboveRating(index)){
       return COLORS.GREY;
     }
     switch(this.rating)
     {
       case 1:
       case 2:
       return COLORS.RED;
       case 3:
       return COLORS.YELLOW;
       case 4:
       case 5:
       return COLORS.GREEN;
       default:
       return COLORS.GREY;
     }
    }

  isAboveRating(index: number): boolean {
   
    return index>this.rating;
  }
  
  buttonsendrating(foodItem){
    let flag=0;
    if(this.rating>0){
       this.firebaseProvider.getMenuItems().forEach(item=> {
          if(flag==0){
          for(let x in Object.keys(item))
        { 	
          for(let y in Object.keys(item[x]))
          {	 
            //this.data = this.firebaseProvider.getMenuSubItems(""+item[x].$key+"/"+Object.keys(item[x])[y]);
            if(Object.keys(item[x])[y]==foodItem){
              this.cat = item[x].$key;
              console.log(this.cat);
              flag=1;
              this.firebaseProvider.insertRating(foodItem,this.rating,this.cat);
            }
            //console.log(Object.keys(item[x])[y]);
          }
          }
        }
            });

          //this.fdb.list("/myItems/").push(this.rating);
       this.viewCtrl.dismiss();
      } 
  }

  closeModal(){
    this.viewCtrl.dismiss(); 
  }
}