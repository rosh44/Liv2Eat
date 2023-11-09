import { Component,ViewChild,ElementRef,ViewChildren,QueryList} from '@angular/core';
import { NavController, Item, Searchbar, Content,NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import {AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CartPage } from '../cart/cart';
import firebase from 'firebase';
import { SplitcartPage } from '../splitcart/splitcart';
import { AngularFireAuth } from "angularfire2/auth";

@Component({
  selector: 'page-contact',
  templateUrl: 'menu.html',
  
})
//@ts-ignore
export class MenuPage{
	cartCount:number=0;
	cartPage1= CartPage;
	menuCategory: FirebaseListObservable<any[]>;
	menuItems:  FirebaseListObservable<any[]>;
	keys : any[];
	id:any;
	uname:any;
	items : any[];
	foodItems:any[]=new Array();
	items1:any[];
	items2: any[]=new Array();
	bs:any[]=new Array();
	loadedItems:any[]=new Array();
	searchItems1:any[]=new Array();
	subitems:any[]=new Array();
	subitems1:any[]=new Array();
	ordereditems: any[]=new Array();
	menu:any;
	//avail:boolean[]=new Array();
	cost: any[]= new Array();
	kitchen: any[] = new Array();
	dataItems:any[];
	aip:any[]=new Array();
	aip2:any[]=new Array();
	data:FirebaseListObservable<any[]>;
	bestseller:any=new Array();
	@ViewChildren('menuList') menuList: QueryList<Item>;
  @ViewChild('searchbar') searchbar: ElementRef;
  @ViewChild(Content) content: Content;
	constructor( public navCtrl: NavController,private aFauth: AngularFireAuth, public firebaseProvider: FirebaseProvider,public navParams: NavParams, public afd: AngularFireDatabase) {
	 this.menuCategory = this.firebaseProvider.getMenuCategory();
	 this.menu = "category";	
	 this.initializeItems();	
		//console.log(this.items2);
		//this.loadedItems=this.items2;
		//console.log(this.loadedItems);

}

  		
	ionViewDidLoad() {
	//console.log(this.navParams.get('quantity'));
	//console.log("$$$");
	//console.log(this.navParams);
	//this.navCtrl.parent.select(1);

    var data=this.aFauth.authState.subscribe(data => {
     
		
		this.uname = data.email;
		console.log(data);
		this.setId(this.uname);
		  
		});
	 
this.id=this.navParams.get('id');
//alert(this.id);
this.uname=this.navParams.get('uname');
	let total=0;
	if(this.navParams.get('idData')!=null)
		{
			for(let x in this.navParams.get('ordereditem'))
			{
			 // console.log(this.navParams.get('quantity')["Batata Vada"]+" "+this.navParams.get('ordereditem')[x]);
			  //@ts-ignore
				if(!this.ordereditems.includes(this.navParams.get('ordereditem')[x]))
				{
				this.menu=this.navParams.get('segment');
				//this.cartCount=this.navParams.get('quantity')[this.navParams.get('ordereditem')[x]]+this.cartCount;
				this.foodItemCount[this.navParams.get('ordereditem')[x]]=this.navParams.get('quantity')[this.navParams.get('ordereditem')[x]];
				this.ordereditems.push(this.navParams.get('ordereditem')[x]);
				this.kitchen[this.navParams.get('ordereditem')[x]]=this.navParams.get('kitchen')[this.navParams.get('ordereditem')[x]];
				this.cost[this.navParams.get('ordereditem')[x]]=this.navParams.get('price')[this.navParams.get('ordereditem')[x]];
				}
			}
		}
	for(let x in this.navParams.get('quantity'))
	{
		total=total+this.navParams.get('quantity')[x];
		
	}
	this.cartCount=total;
	//console.log(total);
   // console.log('ionViewDidLoad DemoFirebasePage');
  }  

  initializeItems(){
	this.menuItems = this.firebaseProvider.getMenuItems(); 
	  //try jagged array
		this.firebaseProvider.getMenuItems().forEach(item=> {
			this.items=Object.keys(item);
			
			for(let x in this.items)
		{ 	this.items2[x]= [];
				this.bestseller[x]=0;
			for(let y in Object.keys(item[x]))
			{		
					//changed data
					this.data=	this.firebaseProvider.getMenuSubItems(""+item[x].$key+"/"+Object.keys(item[x])[y]);
					//this.bestseller=	this.firebaseProvider.getBestSeller(""+item[x].$key+"/"+Object.keys(item[x])[y]);
					//console.log("bestseller");
					//console.log(this.bestseller);
					this.getPrice(this.data,Object.keys(item[x])[y],x,this.bestseller);
				
			}

			}

		});
	//this.items2 = this.loadedItems;
	//console.log(this.items2);
	//console.log("inside initialize");

	  }
	  setId(u:any)
  {
    
 
   this.firebaseProvider.getCurrentUserId(u).forEach(item=> {
      this.id=item[0].$key;
      
    });
    
   

  }

  	getItems(searchbar) {
	// Reset items back to all of the items
	this.initializeItems();
	this.menu="full";
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
	//	console.log(this.subitems);
		for(let y in this.subitems){
	//	console.log(this.subitems[y]);
		//this.searchItems1 = 
		//console.log(this.items2[x][y]);
		 this.items2[x]=this.subitems[y].filter((v) => { 
	//	console.log(v,v.name);
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
	//(q, this.items2.length);
//	console.log(this.items2);
  
  }
  
	private item_qty = 0;
	foodItemCount: number[]= new Array();
	count=0;
  
	//  changes from here
	private initialize(element)
  {
//console.log(this.navParams.get('ordereditem'));

	if(this.foodItemCount[element]==null )
	this.foodItemCount[element]=0;

  }	
  
  private increment (element,price,kitchen) {
	 if(this.foodItemCount[element]==0)
	{
	this.ordereditems.push(element);
	this.cost[element]=price;
	this.kitchen[element]=kitchen;
	}

  this.foodItemCount[element]++;
  this.cartCount++;
	//alert(this.foodItemCount[element]);
	}
	private initializeNav()
	{
		//console.log("inside initialize nav"+this.navParams.get('orderitems'));
		
		
	
	}
  private decrement (element) {

	 if(this.foodItemCount[element]>0)
	 {
		this.foodItemCount[element]--;
		//alert(this.foodItemCount[element]);
	 }
	
		if(this.foodItemCount[element]==0)
		{
			const index = this.ordereditems.indexOf(element, 0);
			if (index > -1)
			 {
			this.ordereditems.splice(index, 1);
			}
		}
		if(this.cartCount>0){
			this.cartCount--; //for cart badge
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

			scrollToTop()
			{
				this.content.scrollTo(0,0, 0);
			}
			scrollToBottom(category: string){
				this.menu="full";
				//let dimensions = this.content.getContentDimensions();
				//let elem:Element = document.getElementById("Snacks");
		
		//	console.log(this.menuList)
			this.menuList.changes
						.subscribe(() =>{
							
								//@ts-ignore
							// console.log(this.menuList.toArray()[1].nativeElement.getBoundingClientRect().top+" "+this.menuList.toArray()[1].nativeElement.innerHTML+" "+category)
							for(let x in this.menuList.toArray())
							{ 
								//@ts-ignore
						
									if(category==this.menuList.toArray()[x].nativeElement.innerHTML)
									{
									//@ts-ignore
							//		console.log(this.menuList.toArray()[x].nativeElement.offsetTop+" "+this.menuList.toArray()[x].nativeElement.innerHTML+" "+category);
									//@ts-ignore
									this.content.scrollTo(0,this.menuList.toArray()[x].nativeElement.offsetTop, 0);
									}
								
							}

							});
			//	 console.log("data testing");
			/*	for(let x in this.list.toArray())
				{
					console.log("x="+x);
				}
				*/
				//.nativeElement.querySelector(".example").getBoundingClientRect().top
		//	this.content.scrollTo(0,this.myDiv.nativeElement.getBoundingClientRect().top-150, 0);
			}
			private sendData(id:any,uname:any)
			{
				//console.log(this.ordereditems);
   				 //console.log(this.cost);
				//console.log(this.foodItemCount);
				this.firebaseProvider.getSplitDetails(id).forEach(item =>{
					// console.log(item);
					 if(item[0]!=null)
						{
							this.navCtrl.setRoot(SplitcartPage, {
								id:id, 
								username:uname
								});
						}
						else
						{
						this.navCtrl.setRoot(CartPage, {
							cost1: this.cost,
							ordereditems1: this.ordereditems,
							qty1: this.foodItemCount,
							kitchen : this.kitchen
							});
						}
					});
			} 

			//changes
			private getPrice(value :any,data:any,x:any,bs1)
			{	
				value.forEach(dataItem=> {
					//this.bestseller=bs1;
					let i=0;
					for(let y in Object.keys(dataItem))
					{
						this.aip[dataItem[y].$key]=dataItem[y].$value;
						
						i++;
					}
					//console.log(this.aip+" ");
					var star;
					if(this.aip["Rating"]!=0)
					 star=Math.floor(this.aip["Rating"]*10)/10;
					else
					star ="N/A";
					if(this.aip["OrderCount"]>this.bestseller[x]){
						this.bestseller[x]=this.aip["OrderCount"];
						this.bs[x]=data;
					}
					this.items2[x].push({ name:data,availability:this.aip["Availability"],rate:star, price:this.aip["Price"],kitchen:this.aip["Kitchen"]});
						this.aip.length=0;
						//console.log(this.items2);
						//this.bs[x]=this.bestseller;
						console.log(this.bs);
					//console.log(this.items2);
					console.log(this.bestseller);
				});
				
						
					
		  }
  //till here
 }
  
export class SegmentPage {
    menu: string = "By Category";

	
      constructor() {
	    
	  }

   
   }


