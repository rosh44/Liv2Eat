webpackJsonp([9],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_profile__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__status_status__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_firebase_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TabsPage = /** @class */ (function () {
    function TabsPage(events, navCtrl, aFauth, navParams, firebaseProvider, afd) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.aFauth = aFauth;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.afd = afd;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__profile_profile__["a" /* ProfilePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__status_status__["a" /* StatusPage */];
        this.events.subscribe('user:logout', function () {
            console.log("inside logout");
            try {
                var result = _this.aFauth.auth.signOut();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
            }
            catch (e) {
                console.log("logout unsuccessful");
            }
        });
    }
    TabsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("2");
        var data = this.aFauth.authState.subscribe(function (data) {
            console.log("hi");
            _this.uname = data.email;
            console.log(data);
            _this.setId(_this.uname);
        });
    };
    TabsPage.prototype.goToMenu = function (id, uname) {
        this.navCtrl.parent.select(1, {
            id: id,
            username: uname
        });
    };
    TabsPage.prototype.setId = function (u) {
        var _this = this;
        this.firebaseProvider.getCurrentUserId(u).forEach(function (item) {
            _this.id = item[0].$key;
            _this.goMenuPage();
        });
    };
    TabsPage.prototype.goMenuPage = function () {
        var _this = this;
        this.firebaseProvider.getSplitDetails(this.id).forEach(function (item) {
            // console.log(item);
            if (item[0] != null) {
                _this.foodId =
                    {
                        redirect: "Split",
                        id: _this.id,
                        username: _this.uname
                    };
            }
            else {
                _this.foodId =
                    {
                        id: _this.id,
                        username: _this.uname
                    };
            }
        });
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\tabs\tabs.html"*/'\n\n<ion-tabs style="background: dark" no-padding>\n  <ion-tab  [root]="tab1Root" [rootParams]="foodId" tabTitle="Home" tabIcon="home" tabColor="black"></ion-tab>\n  \n  <ion-tab  [root]="tab3Root" [rootParams]="foodId" tabTitle="Menu" tabIcon="book"></ion-tab>\n  <ion-tab  [root]="tab4Root" tabTitle="Order Status" tabIcon="notifications"></ion-tab>\n  <ion-tab  [root]="tab2Root" tabTitle="Profile" tabIcon="person"></ion-tab>\n \n</ion-tabs>\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StatusPage = /** @class */ (function () {
    function StatusPage(navCtrl, navParams, aFauth, firebaseProvider, alertController, plt, localNotifications, backgroundMode) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aFauth = aFauth;
        this.firebaseProvider = firebaseProvider;
        this.alertController = alertController;
        this.plt = plt;
        this.localNotifications = localNotifications;
        this.backgroundMode = backgroundMode;
        this.myOrders = new Array();
        this.items = new Array();
        this.itemQuantity = new Array();
        this.menu = "All";
        this.plt.ready().then(function (rdy) {
            //@ts-ignore
            _this.localNotifications.on('click', function (notification, state) {
                var json = JSON.parse(notification.data);
                var alert = alertController.create({
                    title: notification.title,
                    subTitle: json.mydata
                });
                alert.present();
            });
        });
        this.aFauth.authState.subscribe(function (data) {
            // console.log('A informacao de data ' + data.email);
            _this.uname = data.email;
            _this.loadData(_this.uname, "All");
        });
    }
    StatusPage.prototype.loadData = function (uname, kitchen) {
        var _this = this;
        // alert("in load data"+kitchen);
        //alert(kitchen);
        this.backgroundMode.enable();
        //  this.backgroundMode.on("activate").subscribe(()=>{
        if (kitchen == "All") {
            this.orders = this.firebaseProvider.retrieveOrder(uname);
        }
        else {
            this.orders = this.firebaseProvider.retrieveOrderFromKitchen(uname, kitchen);
        }
        this.orders.forEach(function (dataItem) {
            for (var y in Object.keys(dataItem)) {
                if (dataItem[y].Notification != 4) {
                    if (_this.myOrders.find(function (z) { return z.id === dataItem[y].$key; })) {
                        var a = _this.myOrders.find(function (z) { return z.id === dataItem[y].$key; });
                        var index = _this.myOrders.indexOf(a);
                        _this.myOrders[index].status = dataItem[y].Status;
                        if (dataItem[y].Notification == '1' && dataItem[y].Status == 'Ready') {
                            _this.sendNotification(dataItem[y].$key, dataItem[y].Status, kitchen);
                            _this.firebaseProvider.updateNotiStatus(dataItem[y].$key, dataItem[y].Notification, kitchen);
                        }
                        else if (dataItem[y].Notification == '2' && dataItem[y].Status == 'Collected') {
                            _this.sendNotification(dataItem[y].$key, dataItem[y].Status, kitchen);
                            _this.firebaseProvider.updateNotiStatus(dataItem[y].$key, dataItem[y].Notification, kitchen);
                        }
                    }
                    else {
                        _this.myOrders.push({ id: dataItem[y].$key, order: dataItem[y].Order, status: dataItem[y].Status, quantity: dataItem[y].Quantity });
                        //this.items.push((dataItem[y].Order).split(','));
                        //console.log("items: " + this.items);
                        //  console.log(this.myOrders);
                        if (dataItem[y].Notification == '0' && dataItem[y].Status == 'Pending') {
                            _this.sendNotification(dataItem[y].$key, "placed", "0");
                            _this.firebaseProvider.updateNotiStatus(dataItem[y].$key, dataItem[y].Notification, kitchen);
                        }
                    }
                }
            }
        });
        //});
    };
    StatusPage.prototype.doRefresh = function (refresher) {
        var _this = this;
        // console.log('Begin async operation', refresher);
        setTimeout(function () {
            //  console.log('Async operation has ended');
            _this.myOrders.length = 0;
            _this.loadData(_this.uname, _this.menu);
            refresher.complete();
        }, 2000);
    };
    StatusPage.prototype.tryLoad = function (kitchen) {
        //  alert("Inside"+kitchen);
        // this.orders.length=0;
        this.menu = kitchen;
        this.myOrders.length = 0;
        this.loadData(this.uname, kitchen);
    };
    StatusPage.prototype.sendNotification = function (orderid, statusid, kitchen) {
        if (kitchen != 0) {
            this.localNotifications.schedule({
                id: 1,
                title: 'Attention',
                text: 'Order ' + orderid + ' is ' + statusid,
                data: { mydata: 'My hidden message this is' },
            });
        }
        else {
            this.localNotifications.schedule({
                id: 1,
                title: 'Attention',
                text: 'Order ' + orderid + ' is placed',
                data: { mydata: 'My hidden message this is' },
            });
        }
    };
    StatusPage.prototype.splitQuan = function (qty) {
        //this.itemQuantity.length=0;
        //console.log(qty);
        if (qty.length > 1) {
            this.itemQuantity = qty.split(',');
            //console.log("array is" + this.itemQuantity);
        }
        else {
            this.itemQuantity = qty;
            // console.log("array is" + this.itemQuantity[0]); 
        }
    };
    StatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-status',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\status\status.html"*/'\n<ion-header>\n \n  <ion-navbar color="dark">\n    <ion-title>\n      <h1 style="color: #fff; margin-bottom: 20px;\n      font-size: 30px;\n      \n      margin-top:20px;\n      text-align: center;\n font-family: \'Pacifico\' , cursive;">Order Status</h1>\n\n    </ion-title>\n    \n  </ion-navbar> \n </ion-header>\n\n<ion-content class="card-background-page" >\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing..."      \n      >\n    </ion-refresher-content>\n  </ion-refresher>\n\n\n<!--\n<table class="table-fill">\n<thead>\n<tr>\n\n<th class="text-left">Id </th>\n<th class="text-left">Item</th>\n<th class="text-left">Quantity</th>\n<th class="text-left">Status</th>\n\n</tr>\n</thead>\n<div *ngFor="let x of myOrders">\n <tr *ngFor="let y of x.order.split(\',\') ">\n  <td class="text-left">{{x.id}} </td>\n  <td class="text-left">{{y}} </td>\n  <td class="text-left">{{x.quantity}} </td>\n  <td class="text-left">{{x.status}}</td>  \n</tr>\n</div>\n</table> -->\n<!--\n<ion-segment [(ngModel)]="menu">\n  <ion-segment-button value="All" (click)="tryLoad(\'All\')" style="font-family: Lato">\n    All Orders\n  </ion-segment-button>\n  <ion-segment-button value="Dosa" (click)="tryLoad(\'Dosa\')" style="font-family: Lato">\n    Dosa-Items\n  </ion-segment-button>\n  <ion-segment-button value="Chinese" (click)="tryLoad(\'Chinese\')" style="font-family: Lato">\n      Chinese\n    </ion-segment-button>\n</ion-segment>\n \n\n-->\n<!--<div [ngSwitch]="menu" >\n  <ion-list *ngSwitchCase="\'All\'">-->\n<div *ngIf="myOrders.length>0 ; else other_content">\n  \n<p>Here is your order status. You can go to the counter and collect your order when the status changes to "Collected"</p> \n<div class="container1">\n\n	<div class="table">\n		<div class="table-header">\n        <div class="header__item">Order ID</div>\n			<div class="header__item">Item</div>\n			<div class="header__item">Quantity</div>\n			<div class="header__item">Status</div>\n		</div>\n		<div class="table-content" *ngFor="let x of myOrders">\n			<div class="table-row"  *ngFor="let y of x.order.split(\',\'); let i=index">	\n          {{splitQuan(x.quantity)}}	\n          <div class="table-data">{{x.id}}</div>\n				<div class="table-data">{{y}}</div>\n				<div class="table-data">{{itemQuantity[i]}}</div>\n				<div class="table-data">{{x.status}}</div>\n		\n			</div>\n			\n		</div>	\n	</div>\n</div>\n</div>\n<ng-template #other_content>\n<p>No Orders</p>\n</ng-template>\n<!--\n</ion-list></div>\n\n<div [ngSwitch]="menu" >\n  <ion-list *ngSwitchCase="\'Dosa\'">\n\n    <div *ngIf="myOrders.length>0 ; else other_content">\n  \n      <p>Here is your order status. You can go to the counter and collect your order when the status changes to "Collected"</p> \n      <div class="container1">\n      \n        <div class="table">\n          <div class="table-header">\n              <div class="header__item">Order ID</div>\n            <div class="header__item">Item</div>\n            <div class="header__item">Quantity</div>\n            <div class="header__item">Status</div>\n          </div>\n          <div class="table-content" *ngFor="let x of myOrders">\n            <div class="table-row"  *ngFor="let y of x.order.split(\',\'); let i=index">	\n                {{splitQuan(x.quantity)}}	\n                <div class="table-data">{{x.id}}</div>\n              <div class="table-data">{{y}}</div>\n              <div class="table-data">{{itemQuantity[i]}}</div>\n              <div class="table-data">{{x.status}}</div>\n          \n            </div>\n            \n          </div>	\n        </div>\n      </div>\n      </div>\n      <ng-template #other_content>\n      <p>No Orders</p>\n      </ng-template>\n      \n</ion-list></div>\n\n\n<div [ngSwitch]="menu" >\n  <ion-list *ngSwitchCase="\'Chinese\'">\n\n    <div *ngIf="myOrders.length>0 ; else other_content">\n  \n      <p>Here is your order status. You can go to the counter and collect your order when the status changes to "Collected"</p> \n      <div class="container1">\n      \n        <div class="table">\n          <div class="table-header">\n              <div class="header__item">Order ID</div>\n            <div class="header__item">Item</div>\n            <div class="header__item">Quantity</div>\n            <div class="header__item">Status</div>\n          </div>\n          <div class="table-content" *ngFor="let x of myOrders">\n            <div class="table-row"  *ngFor="let y of x.order.split(\',\'); let i=index">	\n                {{splitQuan(x.quantity)}}	\n                <div class="table-data">{{x.id}}</div>\n              <div class="table-data">{{y}}</div>\n              <div class="table-data">{{itemQuantity[i]}}</div>\n              <div class="table-data">{{x.status}}</div>\n          \n            </div>\n            \n          </div>	\n        </div>\n      </div>\n      </div>\n      <ng-template #other_content>\n      <p>No Orders</p>\n      </ng-template>\n      \n    \n</ion-list></div>\n-->\n</ion-content>\n<!--</ion-content>-->\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\status\status.html"*/,
        })
        //@ts-ignore
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__["a" /* BackgroundMode */]])
    ], StatusPage);
    return StatusPage;
}());

//# sourceMappingURL=status.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification_notification__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_rating_rating__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__splitcart_splitcart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__friends_friends__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, aFauth, navParams, firebaseProvider, afd, modal) {
        this.navCtrl = navCtrl;
        this.aFauth = aFauth;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.afd = afd;
        this.modal = modal;
        this.myOrders1 = new Array();
        this.splitNoti = 0;
        this.friendNoti = 0;
        this.orderItems = new Array();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //this.uname=this.navParams.get('username');
        //console.log("this"+this.uname);
        //this.navCtrl.parent.getTab("tab3Root").setRoot(MenuPage);
        this.flag = 0;
        this.aFauth.authState.subscribe(function (data) {
            console.log("hi");
            _this.uname = data.email;
            console.log(data);
            _this.setId(_this.uname);
            _this.orders1 = _this.firebaseProvider.retrieveOrder(_this.uname);
            console.log("load array");
            console.log(_this.orders1);
            _this.orders1.forEach(function (dataItem) {
                if (_this.flag == 0) {
                    _this.myOrders1.splice(0, _this.myOrders1.length, dataItem);
                    console.log(_this.myOrders1);
                    _this.flag = 1;
                    var _loop_1 = function (y) {
                        if (_this.myOrders1[0][y].Notification == "3") {
                            console.log(dataItem[y].$key);
                            //this.myOrders1[0][y].Notification == "4";
                            //this.firebaseProvider.updateNotiStatus(dataItem[y].$key,dataItem[y].Notification,"All"); 
                            _this.orderItems = _this.myOrders1[0][y].Order.split(',');
                            for (var x in _this.orderItems) {
                                console.log(_this.orderItems[x]);
                                var myModal = _this.modal.create(__WEBPACK_IMPORTED_MODULE_6__components_rating_rating__["a" /* RatingComponent */], { orderId: _this.myOrders1[0][y].$key, foodItem: _this.orderItems[x] });
                                myModal.present();
                                myModal.onDidDismiss(function () {
                                    console.log("Modal Dismiss");
                                    _this.firebaseProvider.updateNotiStatus(dataItem[y].$key, dataItem[y].Notification, "All");
                                });
                            }
                        }
                    };
                    for (var y in _this.myOrders1[0]) {
                        _loop_1(y);
                    }
                }
            });
        });
    };
    HomePage.prototype.setId = function (u) {
        var _this = this;
        // console.log(this.firebaseProvider.getCurrentUserId(u).);
        this.firebaseProvider.getCurrentUserId(u).forEach(function (item) {
            //console.log("###");
            //alert(item[0].$key);
            _this.id = item[0].$key;
            console.log("%%%%");
            _this.firebaseProvider.getMySplitRequest(_this.id).forEach(function (item) {
                _this.splitNoti = item.length;
            });
            ;
            _this.firebaseProvider.getMyPendingRequest(_this.id).forEach(function (item) {
                _this.friendNoti = item.length;
            });
            ;
            console.log(_this.firebaseProvider.getMyPendingRequest(_this.id));
            //  this.initializeItems(u,this.id);
        });
    };
    HomePage.prototype.sendData = function () {
        //console.log(this.ordereditems);
        //console.log(this.cost);
        //console.log(this.foodItemCount);
        if (this.navParams.get('redirect') == "Split") {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__splitcart_splitcart__["a" /* SplitcartPage */], {
                id: this.navParams.get("id"),
                username: this.navParams.get("username")
            });
        }
        else {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */], {});
        }
    };
    HomePage.prototype.goMenuPage = function (id, uname) {
        var _this = this;
        this.firebaseProvider.getSplitDetails(id).forEach(function (item) {
            // console.log(item);
            if (item[0] != null) {
                _this.navCtrl.parent.select(1, {
                    redirect: "Split",
                    id: id,
                    username: uname
                });
            }
            else {
                _this.navCtrl.parent.select(1);
            }
        });
        this.navCtrl.parent.select(1);
    };
    HomePage.prototype.goFriendsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__friends_friends__["a" /* FriendsPage */]);
    };
    HomePage.prototype.goNotificationPage = function (identity, uname) {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__notification_notification__["a" /* NotificationPage */], {
            id: identity,
            username: uname
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\home\home.html"*/'<ion-header>\n  <h1 style="color: #fff; margin-bottom: 20px;\n  font-size: 30px;\n  \n  margin-top:20px;\n  text-align: center;\nfont-family: \'Pacifico\' , cursive;">Liv2Eat</h1>\n\n</ion-header>\n<h1>Canteen App</h1>\n<ion-content class="card-background-page">\n  \n        <ion-card class="homeP" (click)="goFriendsPage()">\n            <!-- <img src="https://wallpaperstream.com/wallpapers/full/friendship/Holiday-Friendship-Fun-HD-Wallpaper.jpg" style = "max-width: 100%; object-fit: cover; height: 175px"/> -->\n            <img src="../../assets/imgs/home/friends.jpg" style = "max-width: 100%; object-fit: cover; height: 175px"/>\n            <div class="card-title">Friends\n                <ion-badge id="cart-badge" class="disabled" [class.disabled]="friendNoti==0">{{friendNoti}}</ion-badge>\n            </div>\n            \n          </ion-card>\n         \n    \n  \n    <div >\n        <ion-card class="homeP" (click)="goMenuPage(id,uname)">\n            <!-- <img src="https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&h=350"  style = "max-width: 100%; object-fit: cover; height: 175px"/> -->\n            <img src="../../assets/imgs/home/menu.jpg" style = "max-width: 100%; object-fit: cover; height: 175px"/>\n            <div class="card-title" >Menu</div>\n            \n          </ion-card>\n          </div>\n\n    \n        <ion-card class = "Profile homeP" (click)="goNotificationPage(id,uname)">\n            <!-- <img src ="https://us.123rf.com/450wm/toeytoey/toeytoey1706/toeytoey170600298/80561404-close-up-hat-on-wood-texture-in-travel-and-summer-concept-.jpg?ver=6" style = "max-width: 100%; object-fit: cover; height: 175px"/> -->\n            <img src="../../assets/imgs/home/split.jpg" style = "max-width: 100%; object-fit: cover; height: 175px"/>\n            <div class="card-title" >Split Request\n                <ion-badge id="cart-badge" class="disabled" [class.disabled]="splitNoti==0">{{splitNoti}}</ion-badge>\n            </div>\n            <div class="card-subtitle"></div>\n            </ion-card>\n    \n          </ion-content>\n \n\n\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirebaseProvider = /** @class */ (function () {
    function FirebaseProvider(afd) {
        this.afd = afd;
        this.keyId = '0';
        this.order = {};
        this.kitchen = {};
        this.userS = {};
        this.userF = {};
        // console.log('Hello FirebaseProvider Provider');
    }
    FirebaseProvider.prototype.getFoodItems = function () {
        return this.afd.list('/foodItems/');
    };
    FirebaseProvider.prototype.addItem = function (name) {
        this.afd.list('/foodItems/').push(name);
    };
    FirebaseProvider.prototype.removeItem = function (id) {
        this.afd.list('/foodItems/').remove(id);
    };
    FirebaseProvider.prototype.getMenuCategory = function () {
        return this.afd.list('/menuCategory/');
    };
    FirebaseProvider.prototype.getKitchenNames = function () {
        return this.afd.list('/Kitchen/');
    };
    FirebaseProvider.prototype.getMenuItems = function () {
        return this.afd.list('/Menu/');
    };
    FirebaseProvider.prototype.getUserId = function () {
        return this.afd.list('/Users/');
    };
    FirebaseProvider.prototype.getUserDetails = function (value) {
        this.it = "Users/" + value + "/";
        return this.afd.list(this.it);
    };
    FirebaseProvider.prototype.acceptSplitRequest = function (myId, requestId, deduct) {
        this.afd.list('/Users/' + myId + "/SplitRequest").remove(requestId);
    };
    FirebaseProvider.prototype.rejectSplitRequest = function (myId, requestId) {
        this.afd.list('/Users/' + myId + "/SplitRequest").remove(requestId);
    };
    FirebaseProvider.prototype.getCurrentUserId = function (uname1) {
        return this.afd.list('/Users', { query: {
                orderByChild: 'email',
                equalTo: uname1
            } });
    };
    FirebaseProvider.prototype.getMenuSubItems = function (value) {
        //console.log("Value is"+Object.keys(this.afd.list('Menu/'+value+'/')));
        //console.log("this is"+value.toString);
        this.it = "Menu/" + value + "/";
        //console.log(this.it);
        return this.afd.list(this.it);
    };
    FirebaseProvider.prototype.getBestSeller = function (value) {
        var it = "Menu/" + value + "/";
        return this.afd.list(it, { query: {
                orderByChild: 'orderCount',
                limitToLast: 1
            } });
    };
    FirebaseProvider.prototype.updateWallet = function (balance, email) {
        this.afd.list('/Users/').update(email, { Wallet: balance });
    };
    FirebaseProvider.prototype.addOrder = function (order, kitchenFinal, kitchenAdd, kitchenQuantity) {
        var _this = this;
        this.order = order;
        console.log("ref try------------------------------" + this.afd.app.database().ref('MakeOrderId/latest'));
        var adaRankRef = this.afd.app.database().ref('MakeOrderId/latest');
        this.afd.list('/MakeOrderId/latest/');
        //   console.log("this oid"+this.oid);
        var test = adaRankRef.on('value', function (snapshot) {
            // console.log( "val"+ snapshot.val()+" value"+order);
            return snapshot.val();
        });
        var test1 = adaRankRef.transaction(function (currentId) {
            // If users/ada/rank has never been set, currentRank will be `null`.
            //const mylogic = require('./firebase.ts');
            this.oid = currentId;
            return currentId + 1;
        });
        //  this.afd.list(`/orderData/`).update("32",order);
        var text = "text";
        var afd = this.afd;
        test1.then(function (result) {
            //console.log(result["snapshot"].val()+" inside then "+order);
            //myfun(result["snapshot"].val());
            //   order.OrderId=-1*result["snapshot"].val();
            afd.list("/orderData/").update(String(result["snapshot"].val()), order);
            for (var x in kitchenAdd) {
                kitchenFinal.Order = kitchenAdd[x];
                kitchenFinal.Quantity = kitchenQuantity[x];
                kitchenFinal.Username = order.Username;
                //  this.firebaseProvider.addKitchen(this.kitchenFinal,x);
                afd.list('/Kitchen/' + x + '/').update(String(result["snapshot"].val()), kitchenFinal);
            }
        });
        //Adding Order Count for ratings
        var items = new Array();
        items = order.Order.split(',');
        console.log(items);
        var flag1 = 0;
        for (var z in items) {
            console.log(items[z]);
            this.getMenuItems().forEach(function (item) {
                if (flag1 == 0) {
                    for (var x in Object.keys(item)) {
                        var _loop_1 = function (y) {
                            if (Object.keys(item[x])[y] == items[z]) {
                                var cat1_1 = item[x].$key;
                                console.log(cat1_1);
                                var data = _this.afd.list('/Menu/' + cat1_1 + '/' + items[z] + '/');
                                console.log(data);
                                var count_1 = 0;
                                var flag_1 = 0;
                                data.forEach(function (i) {
                                    if (flag_1 == 0) {
                                        for (var m in Object.keys(i)) {
                                            if (i[m].$key == "OrderCount") {
                                                console.log(i[m].$value);
                                                count_1 = i[m].$value + 1;
                                                console.log(count_1);
                                                flag_1 = 1;
                                                flag1 = 1;
                                                _this.afd.list('/Menu/' + cat1_1 + '/').update(items[z], { OrderCount: count_1 });
                                                break;
                                            }
                                        }
                                    }
                                });
                            }
                        };
                        for (var y in Object.keys(item[x])) {
                            _loop_1(y);
                        }
                    }
                }
            });
            flag1 = 0;
        }
        items.length = 0;
    };
    FirebaseProvider.prototype.addSplitOrder = function (order, kitchenFinal, kitchenAdd, kitchenQuantity, myId, splitFriends, deduct) {
        var _this = this;
        console.log("run 1");
        console.log(splitFriends);
        for (var x in splitFriends) {
            console.log(x);
            this.afd.list('/Users/' + x + '/SplitRequest/').remove(myId);
        }
        this.afd.list("/SplitPayment/" + myId + "/SplitWallet/").forEach(function (item) {
            var keyId = Object.keys(item);
            for (var y in keyId) {
                var a = item[y].$value - deduct;
                var adaRankRef = _this.afd.app.database().ref('Users/' + y + '/Wallet/');
                adaRankRef.transaction(function (currentId) {
                    return currentId + a;
                });
            }
        });
        var adaRankRef = this.afd.app.database().ref('Users/' + myId + '/Wallet/');
        adaRankRef.transaction(function (currentId) {
            return currentId - deduct;
        });
        this.addOrder(order, kitchenFinal, kitchenAdd, kitchenQuantity);
        this.afd.list('/SplitPayment/').remove(myId);
    };
    FirebaseProvider.prototype.sendFriendRequest = function (uid, id, uemail, email) {
        //console.log("inside sendFriendReq"+id);
        //console.log(this.afd.list('/Users/'+id+'/'));
        console.log(email + " " + uemail);
        this.afd.list('/Users/' + id).update("PendingRequest", (_a = {}, _a[uid] = uemail, _a));
        this.afd.list("/Users/" + uid).update("SentRequest", (_b = {}, _b[id] = email, _b));
        var _a, _b;
    };
    FirebaseProvider.prototype.acceptFriendRequest = function (uid, id, uemail, email) {
        //console.log("inside sendFriendReq"+id);
        //console.log(this.afd.list('/Users/'+id+'/'));
        console.log(email + " " + uemail);
        this.afd.list('/Users/' + uid + "/PendingRequest").remove(id);
        this.afd.list('/Users/' + id + "/SentRequest").remove(uid);
        this.afd.list('/Users/' + id).update("Friends", (_a = {}, _a[uid] = uemail, _a));
        this.afd.list("/Users/" + uid).update("Friends", (_b = {}, _b[id] = email, _b));
        var _a, _b;
    };
    FirebaseProvider.prototype.rejectFriendRequest = function (uid, id, uemail, email) {
        //console.log("inside sendFriendReq"+id);
        //console.log(this.afd.list('/Users/'+id+'/'));
        console.log(email + " " + uemail);
        this.afd.list('/Users/' + uid + "/PendingRequest").remove(id);
        this.afd.list('/Users/' + id + "/SentRequest").remove(uid);
    };
    FirebaseProvider.prototype.pendingRequest = function (uname1, id) {
        //alert(id);
        return this.afd.list('/Users/' + id + '/PendingRequest');
    };
    FirebaseProvider.prototype.getCurrentUser = function (id) {
        //alert(id);
        return this.afd.list('/Users/' + id);
    };
    FirebaseProvider.prototype.sentRequest = function (uname1, id) {
        //alert(id);
        return this.afd.list('/Users/' + id + '/SentRequest');
    };
    FirebaseProvider.prototype.friend = function (uname1, id) {
        //alert(id);
        return this.afd.list('/Users/' + id + '/Friends');
    };
    FirebaseProvider.prototype.retrieveOrder = function (uname1) {
        // alert('All');
        return this.afd.list('/orderData', { query: {
                orderByChild: 'Username',
                equalTo: uname1
            } });
        //userQuery.subscribe(users => console.log(users));
        //return userQuery;
    };
    FirebaseProvider.prototype.sendSplitRequest = function (id, splitRequest, order, price, kitchen, name) {
        var _this = this;
        this.afd.list('/SplitPayment/').update(id, { price: price });
        this.afd.list('/SplitPayment/').update(id, { kitchen: kitchen });
        this.afd.list('/SplitPayment/').update(id, order);
        var afd = this.afd;
        this.afd.list('/Users/' + id).forEach(function (name) {
            for (var y in name) {
                if (name[y].$key == "Name") {
                    var _loop_2 = function (x) {
                        if (splitRequest[x] == 1) {
                            adaRankRef = _this.afd.app.database().ref('SplitPayment/' + id);
                            adaRankRef.once('value', function (snapshot) {
                                if (snapshot.hasChild("Amount")) {
                                    // alert("exists");
                                    //console.log("inside");
                                    return 1;
                                }
                                else
                                    return 0;
                            }).then(function (result) {
                                if (result.val()["Amount"] != null) {
                                    var adaRankRef1 = afd.app.database().ref('SplitPayment/' + id + '/RequestSent/' + x);
                                    adaRankRef1.transaction(function (currentId) {
                                        return 0;
                                    });
                                    console.log(name[y].$value);
                                    afd.list('/Users/' + x + '/').update("SplitRequest", (_a = {}, _a[id] = name[y].$value, _a));
                                }
                                var _a;
                            });
                        }
                    };
                    var adaRankRef;
                    for (var x in splitRequest) {
                        _loop_2(x);
                    }
                }
            }
        });
    };
    FirebaseProvider.prototype.removeSplitRequest = function (friendId, myId) {
        return this.afd.list('/Users/' + friendId + '/SplitRequest/').remove(myId);
    };
    FirebaseProvider.prototype.retrieveOrderFromKitchen = function (uname1, kitchen) {
        // alert('/Kitchen/'+kitchen);
        return this.afd.list('/Kitchen/' + kitchen, { query: {
                orderByChild: 'Username',
                equalTo: uname1
            } });
        //userQuery.subscribe(users => console.log(users));
        //return userQuery;
    };
    FirebaseProvider.prototype.checkExistenceReject = function (myId, requestId) {
        var afd = this.afd;
        var adaRankRef = this.afd.app.database().ref('SplitPayment/' + requestId);
        adaRankRef.once('value', function (snapshot) {
            if (snapshot.hasChild("Amount")) {
                // alert("exists");
                //console.log("inside");
                return 1;
            }
            else
                return 0;
        }).then(function (result) {
            if (result.val()["Amount"] != null)
                afd.list('/SplitPayment/' + requestId).update("RequestSent", (_a = {}, _a[myId] = -1, _a));
            var _a;
        });
    };
    FirebaseProvider.prototype.checkExistence = function (myId, requestId, deduct) {
        var afd = this.afd;
        var adaRankRef = this.afd.app.database().ref('SplitPayment/' + requestId);
        adaRankRef.once('value', function (snapshot) {
            if (snapshot.hasChild("Amount")) {
                //alert("exists");
                //console.log("inside");
                return 1;
            }
            else
                return 0;
        }).then(function (result) {
            if (result.val()["Amount"] != null) {
                afd.list('/SplitPayment/' + requestId).update("RequestSent", (_a = {}, _a[myId] = 1, _a));
                var adaRankRef = afd.app.database().ref('Users/' + myId + '/Wallet/');
                adaRankRef.transaction(function (currentId) {
                    // If users/ada/rank has never been set, currentRank will be `null`.
                    //const mylogic = require('./firebase.ts');
                    return currentId - deduct;
                });
                var adaRankRef1 = afd.app.database().ref('SplitPayment/' + requestId + '/SplitWallet/' + myId);
                adaRankRef1.transaction(function (currentId) {
                    // If users/ada/rank has never been set, currentRank will be `null`.
                    //const mylogic = require('./firebase.ts');
                    return currentId + deduct;
                });
            }
            var _a;
        });
    };
    FirebaseProvider.prototype.addToWallet = function (id, amount) {
        var adaRankRef = this.afd.app.database().ref('Users/' + id + '/Wallet/');
        adaRankRef.transaction(function (currentId) {
            // If users/ada/rank has never been set, currentRank will be `null`.
            //const mylogic = require('./firebase.ts');
            return currentId + amount;
        });
    };
    FirebaseProvider.prototype.removeSplitPayment = function (id) {
        this.afd.list('/SplitPayment/').remove(id);
    };
    FirebaseProvider.prototype.getSplitDetails = function (id) {
        return this.afd.list('/SplitPayment/' + id);
    };
    FirebaseProvider.prototype.getMySplitRequest = function (id) {
        return this.afd.list('/Users/' + id + '/SplitRequest/');
    };
    FirebaseProvider.prototype.getMyPendingRequest = function (id) {
        return this.afd.list('/Users/' + id + '/PendingRequest/');
    };
    FirebaseProvider.prototype.getMyFriends = function (id) {
        return this.afd.list('/Users/' + id + '/Friends/');
    };
    FirebaseProvider.prototype.addUserStud = function (userS) {
        this.afd.list('/Users/').push(userS);
    };
    FirebaseProvider.prototype.addUserFac = function (userF) {
        this.afd.list('/Users/').push(userF);
    };
    FirebaseProvider.prototype.getUser = function (email1) {
        return this.afd.list('/Users/', { query: {
                orderByChild: 'email',
                equalTo: email1
            } });
    };
    FirebaseProvider.prototype.insertRating = function (foodItem, rating, category) {
        var adaRankRef1 = this.afd.app.database().ref('/Menu/' + category + '/' + foodItem + '/' + '/RateCount/');
        var adaRankRef = this.afd.app.database().ref('/Menu/' + category + '/' + foodItem + '/' + '/Rating/');
        adaRankRef1.transaction(function (rc) {
            rc = rc + 1;
            adaRankRef.transaction(function (pr) {
                return ((pr * rc - 1) + rating) / (rc);
            });
            return rc;
        });
    };
    FirebaseProvider.prototype.getOrderCount = function (cat, item) {
        return this.afd.list('/Menu/' + cat + '/' + item + '/');
    };
    FirebaseProvider.prototype.updateNotiStatus = function (orderid, noti, kitchen) {
        // var rootRef=  AngularFireModule.database().ref().child("orderData");
        if (kitchen == "All") {
            if (noti == '0')
                this.afd.list('/orderData/').update(orderid, { Notification: '1' });
            else if (noti == '1')
                this.afd.list('/orderData/').update(orderid, { Notification: '2' });
            else if (noti == '2') {
                this.afd.list('/orderData/').update(orderid, { Notification: '3' });
            }
            else if (noti == '3')
                this.afd.list('/orderData/').update(orderid, { Notification: '4' });
        }
        else {
            if (noti == '0')
                this.afd.list('/kitchen/' + kitchen + '/').update(orderid, { Notification: '1' });
            else if (noti == '1')
                this.afd.list('/kitchen/' + kitchen + '/').update(orderid, { Notification: '2' });
            else if (noti == '2')
                this.afd.list('/kitchen/' + kitchen + '/').update(orderid, { Notification: '3' });
        }
    };
    FirebaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        //@ts-ignore
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FirebaseProvider);
    return FirebaseProvider;
}());

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletPage = /** @class */ (function () {
    function WalletPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WalletPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WalletPage');
    };
    WalletPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wallet',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\wallet\wallet.html"*/'\n<ion-header>\n \n    <ion-navbar color="dark">\n      <ion-title>\n        <h1 style="color: #fff; margin-bottom: 20px;\n        font-size: 30px;\n        \n        margin-top:20px;\n        text-align: center;\n   font-family: \'Pacifico\' , cursive;">Wallet</h1>\n  \n      </ion-title>\n      \n    </ion-navbar> \n   </ion-header>\n  \n  <ion-content class="card-background-page" >\n  \n    \n  \n  \n  \n  <ion-segment [(ngModel)]="menu">\n    <ion-segment-button value="current" style="font-family: Lato">\n      Current Status\n    </ion-segment-button>\n    <ion-segment-button value="prev" style="font-family: Lato">\n      Previous Transactions\n    </ion-segment-button>\n    \n  </ion-segment>\n   \n  \n  \n  <div [ngSwitch]="menu" >\n    <ion-list *ngSwitchCase="\'current\'">\n \n  <div class="container1">\n  \n    <h1> Balance </h1>\n    <h3 style="text-align: center;">Rs. 100</h3>\n  </div>\n  \n  \n  \n  </ion-list></div>\n  \n  <div [ngSwitch]="menu" >\n    <ion-list *ngSwitchCase="\'prev\'">\n  \n      <div *ngIf="myOrders.length>0 ; else other_content">\n    \n        <p>Here is your order status. You can go to the counter and collect your order when the status changes to "Collected"</p> \n        <div class="container1">\n        \n          <div class="table">\n            <div class="table-header">\n                <div class="header__item">Order ID</div>\n              <div class="header__item">Item</div>\n              <div class="header__item">Quantity</div>\n              <div class="header__item">Status</div>\n            </div>\n            <div class="table-content" *ngFor="let x of myOrders">\n              <div class="table-row"  *ngFor="let y of x.order.split(\',\'); let i=index">	\n                  {{splitQuan(x.quantity)}}	\n                  <div class="table-data">{{x.id}}</div>\n                <div class="table-data">{{y}}</div>\n                <div class="table-data">{{itemQuantity[i]}}</div>\n                <div class="table-data">{{x.status}}</div>\n            \n              </div>\n              \n            </div>	\n          </div>\n        </div>\n        </div>\n        <ng-template #other_content>\n        <p>No Orders</p>\n        </ng-template>\n        \n  </ion-list></div>\n  \n  \n \n  </ion-content>\n  <!--</ion-content>-->\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\wallet\wallet.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], WalletPage);
    return WalletPage;
}());

//# sourceMappingURL=wallet.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PreviousOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreviousOrderPage = /** @class */ (function () {
    function PreviousOrderPage(navCtrl, navParams, aFauth, firebaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aFauth = aFauth;
        this.firebaseProvider = firebaseProvider;
        this.myOrders1 = new Array();
        this.itemQuantity = new Array();
        this.orderItems = new Array();
        setTimeout(function () {
            _this.aFauth.authState.subscribe(function (data) {
                _this.uname = data.email;
                _this.orders1 = _this.firebaseProvider.retrieveOrder(_this.uname);
                _this.orders1.forEach(function (dataItem) {
                    for (var y in Object.keys(dataItem)) {
                        if (dataItem[y].Notification == '4') {
                            _this.myOrders1.push({ id: dataItem[y].$key, order: dataItem[y].Order, quantity: dataItem[y].Quantity });
                        }
                    }
                });
            });
        });
    }
    PreviousOrderPage.prototype.splitQuan = function (qty) {
        //this.itemQuantity.length=0;
        //console.log(qty);
        if (qty.length > 1) {
            this.itemQuantity = qty.split(',');
            //console.log("array is" + this.itemQuantity);
        }
        else {
            this.itemQuantity = qty;
            // console.log("array is" + this.itemQuantity[0]); 
        }
    };
    PreviousOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviousOrderPage');
    };
    PreviousOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-previous-order',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\previous-order\previous-order.html"*/'\n\n<ion-header>\n \n    <ion-navbar color="dark">\n      <ion-title>\n        <h1 style="color: #fff; margin-bottom: 20px;\n        font-size: 30px;\n        \n        margin-top:20px;\n        text-align: center;\n   font-family: \'Pacifico\' , cursive;">Previous Orders </h1>\n  \n      </ion-title>\n      \n    </ion-navbar> \n   </ion-header>\n  \n  <ion-content class="card-background-page" >\n  \n \n  \n  <div *ngIf="myOrders1.length>0 ; else other_content">\n    \n  <p>Here is your order status. You can go to the counter and collect your order when the status changes to "Collected"</p> \n  <div class="container1">\n  \n    <div class="table">\n      <div class="table-header">\n          <div class="header__item">Order ID</div>\n        <div class="header__item">Item</div>\n        <div class="header__item">Quantity</div>\n             </div>\n      <div class="table-content" *ngFor="let x of myOrders1">\n        <div class="table-row"  *ngFor="let y of x.order.split(\',\'); let i=index">	\n            {{splitQuan(x.quantity)}}	\n            <div class="table-data">{{x.id}}</div>\n          <div class="table-data">{{y}}</div>\n          <div class="table-data">{{itemQuantity[i]}}</div>\n          \n      \n        </div>\n        \n      </div>	\n    </div>\n  </div>\n  </div>\n  <ng-template #other_content>\n  <p>No Orders</p>\n  </ng-template>\n  </ion-content>\n  <!--</ion-content>-->\n  '/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\previous-order\previous-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], PreviousOrderPage);
    return PreviousOrderPage;
}());

//# sourceMappingURL=previous-order.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__splitcart_splitcart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__friends_friends__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the SplitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplitPage = /** @class */ (function () {
    function SplitPage(navCtrl, navParams, firebaseProvider, afd) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.afd = afd;
        this.flag = 0;
        this.friendLength = 0;
        this.checked = new Array();
        this.friends = new Array();
        this.splitFriends = new Array();
        this.items2 = new Array();
        this.pendingFriendStatus = new Array();
    }
    SplitPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SplitPage');
        //console.log(this.navParams.get('id'));
        this.uname = this.navParams.get('username');
        this.id = this.navParams.get('id');
        this.getFriends(this.uname, this.id);
        this.firebaseProvider.getMyFriends(this.id).forEach(function (item) {
            _this.friendLength = item.length;
        });
    };
    SplitPage.prototype.goFriendsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__friends_friends__["a" /* FriendsPage */], {
            id: this.id,
            username: this.uname
        });
    };
    SplitPage.prototype.check = function (id) {
        if (this.splitFriends[id] == null)
            this.splitFriends[id] = 1;
        else
            this.splitFriends[id] = this.splitFriends[id] * -1;
    };
    SplitPage.prototype.sendSplitPaymentRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var price, kitchen, x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("inside button");
                        for (x in this.navParams.get("price")) {
                            if (price == null) {
                                price = "" + this.navParams.get("price")[x];
                                kitchen = "" + this.navParams.get("kitchen")[x];
                            }
                            else {
                                price = price + "," + this.navParams.get("price")[x];
                                kitchen = kitchen + "," + this.navParams.get("kitchen")[x];
                            }
                        }
                        //console.log(price);
                        //console.log(this.splitFriends);
                        //console.log(this.navParams.get("order"));
                        //console.log(this.id);
                        return [4 /*yield*/, this.firebaseProvider.sendSplitRequest(this.id, this.splitFriends, this.navParams.get("order"), price, kitchen, "Tanmay")];
                    case 1:
                        //console.log(price);
                        //console.log(this.splitFriends);
                        //console.log(this.navParams.get("order"));
                        //console.log(this.id);
                        _a.sent();
                        this.splitCart();
                        return [2 /*return*/];
                }
            });
        });
    };
    SplitPage.prototype.getFriends = function (user, uid) {
        var _this = this;
        this.firebaseProvider.friend(user, uid).forEach(function (item) {
            var keyid3 = Object.keys(item);
            for (var x in keyid3) {
                _this.pendingFriendStatus[item[x].$key] = 3;
            }
            _this.firebaseProvider.getUserId().forEach(function (item) {
                _this.items = Object.keys(item);
                console.log(item[0].$key);
                _this.friends = [];
                for (var x in _this.items) {
                    console.log(x);
                    if (_this.pendingFriendStatus[item[x].$key] == 3) {
                        _this.checked.push(false);
                        _this.friends.push({ name: item[x].Name, email: item[x].email, id: item[x].$key });
                    }
                }
            });
        });
    };
    SplitPage.prototype.splitCart = function () {
        //this.navCtrl.remove(this.navCtrl.getPrevious().index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__splitcart_splitcart__["a" /* SplitcartPage */], {
            id: this.navParams.get("id"),
            username: this.navParams.get("username")
        });
    };
    SplitPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-split',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\split\split.html"*/'<!--\n  Generated template for the SplitPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="dark">\n        <ion-title>\n          <h1 style="color: #fff; margin-bottom: 20px;\n          font-size: 30px;\n          \n          margin-top:20px;\n          text-align: center;\n     font-family: \'Pacifico\' , cursive;">Split</h1>\n     \n        </ion-title>\n        \n      </ion-navbar> \n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n   \n    <div class="table1">\n        <div class="table-header1" >\n            <div class="header__item1" >\n              \n              <h2>SPLIT WITH?</h2>\n            </div>\n         <!--	<div class="header__item">Item</div>\n          <div class="header__item">Quantity</div>\n          <div class="header__item">Status</div> -->\n        </div>\n        <p style="text-align:left" class="display" [class.display]="friendLength!=0">Oops! Looks like you haven\'t added friends to split bill with. Please Add friends to proceed further.</p>\n        <div class="table-content1" *ngFor="let y of friends; let i = index">\n          <div class="table-row1">	\n              \n              <div class="table-data1 menuImg">\n                <ion-chip>\n                <ion-avatar>\n                <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" > \n                <!-- <img src="https://firebasestorage.googleapis.com/v0/b/canteen-b59c6.appspot.com/o/Category_images%2F{{item.image}}?alt=media&token=edcbbc30-5ecd-4170-8642-220fa4329a8a"> -->\n               </ion-avatar>\n              </ion-chip></div>\n            <div class="table-data1 content menuDet" >\n                <h3>{{y.name}} </h3>\n                <div style="width: 100%; float: left;"> \n                Email: {{y.email}} \n                </div>\n               \n    \n            </div>\n            <div class="table-data1 menuAdd">\n                <ion-checkbox (click)="check(y.id)"></ion-checkbox>\n            </div>\n         \n        \n          \n        </div>	\n      </div>\n    </div>\n    <button ion-button class="split1" round (click)="goFriendsPage()"> <ion-icon name="add"></ion-icon> &nbsp; &nbsp; <span style="font-family: \'Lato\';">Add Friends</span></button>\n       \n    <button ion-button class="buttons1" round color="light" (click)="sendSplitPaymentRequest()">Split</button>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\split\split.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SplitPage);
    return SplitPage;
}());

//# sourceMappingURL=split.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, navParams, firebaseProvider, afd) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.afd = afd;
        this.amount = new Array();
        this.totalFriends = new Array();
        this.splitHead = new Array();
        this.splitDetails = new Array();
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationPage');
        this.id = this.navParams.get('id');
        this.uname = this.navParams.get('username');
        this.getSplitRequest();
    };
    NotificationPage.prototype.getSplitRequest = function () {
        var _this = this;
        this.firebaseProvider.getUserDetails(this.id).forEach(function (item) {
            var keyid = Object.keys(item);
            _this.splitDetails = [];
            _this.amount = [];
            _this.totalFriends = [];
            for (var x in keyid) {
                // this.orders=[];
                //   console.log("Data");
                // console.log(item[x].$key);
                if (item[x].$key == "SplitRequest") {
                    var _loop_1 = function (y) {
                        _this.splitDetails.push({ name: item[x][y], id: y });
                        _this.firebaseProvider.getSplitDetails(y).forEach(function (splitItem) {
                            console.log(item[0]);
                            var keyid = Object.keys(splitItem);
                            for (var x_1 in keyid) {
                                // this.orders=[];
                                if (splitItem[x_1].$key == "Amount") {
                                    _this.amount.push(Number(splitItem[x_1].$value));
                                }
                                if (splitItem[x_1].$key == "RequestSent") {
                                    var total = 2;
                                    for (var y_1 in splitItem[x_1]) {
                                        if (splitItem[x_1][y_1] > 0)
                                            total = total + splitItem[x_1][y_1];
                                    }
                                    _this.totalFriends.push(total);
                                }
                            }
                            console.log("##");
                            console.log(_this.amount);
                            console.log(_this.totalFriends);
                            _this.splitHead[y] = item[x][y];
                        });
                    };
                    for (var y in item[x]) {
                        _loop_1(y);
                    }
                }
                if (item[x].$key == "Wallet")
                    _this.wallet = Math.floor(Number(item[x].$value) * 100) / 100;
            }
        });
    };
    NotificationPage.prototype.acceptRequest = function (myId, requestId, deduct) {
        this.firebaseProvider.checkExistence(myId, requestId, deduct);
        this.firebaseProvider.acceptSplitRequest(myId, requestId, deduct);
    };
    NotificationPage.prototype.rejectRequest = function (myId, requestId) {
        this.firebaseProvider.checkExistenceReject(myId, requestId);
        this.firebaseProvider.rejectSplitRequest(myId, requestId);
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\notification\notification.html"*/'<!--\n  Generated template for the NotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="dark">\n        <ion-title>\n          <h1 style="color: #fff; margin-bottom: 20px;\n          font-size: 30px;\n          \n          margin-top:20px;\n          text-align: center;\n     font-family: \'Pacifico\' , cursive;">Split Requests</h1>\n     \n        </ion-title>\n        \n      </ion-navbar> \n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n  <br>\n  <div class="container1 login">\n              <h2 style="color: #488aff; text-align: center">Wallet Balance</h2>\n      \n              <h2 style="color: gray; text-align: center">Rs {{wallet}}</h2>\n         \n          \n          <ion-list  *ngFor="let y of splitDetails; let i = index">\n              <br><br>  <br>\n              <h3>{{y.name}} wants to split a bill of Rs.{{amount[i]}} with you. </h3> \n                               \n                        <p>By accepting the request you give {{y.name}} rights to use Rs.{{amount[i]/totalFriends[i]}} of your wallet </p> <br>\n                                                     \n                   \n                <!-- <ion-item><button class="buttons" ion-button item-right round color="light" (click)="addInCart(y.name,y.price,1)">Add</button> \n                          </ion-item>-->\n                          \n                          \n                        <!--  <ion-icon name="person-add" (click)="addFriend(id,y.id,\'roshni.as@somaiya.edu\',y.email)"></ion-icon>-->\n                        <button ion-button (click)="acceptRequest(id,y.id,amount[i]/totalFriends[i])" class="butt disabled disabled1" [class.disabled]="wallet==0" [class.disabled1]="wallet<totalPrice ">Accept</button>\n                          <button ion-button color="light" class="butt1" (click)="rejectRequest(id,y.id)" >Reject</button>\n                      \n          </ion-list> \n  </div>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 137:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 137;

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/blank/blank.module": [
		339,
		8
	],
	"../pages/cart/cart.module": [
		340,
		7
	],
	"../pages/demo-firebase/demo-firebase.module": [
		342,
		6
	],
	"../pages/friends/friends.module": [
		344,
		5
	],
	"../pages/notification/notification.module": [
		341,
		4
	],
	"../pages/previous-order/previous-order.module": [
		343,
		3
	],
	"../pages/split/split.module": [
		345,
		2
	],
	"../pages/splitcart/splitcart.module": [
		346,
		1
	],
	"../pages/wallet/wallet.module": [
		347,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 178;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends_friends__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wallet_wallet__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__previous_order_previous_order__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, firebaseProvider, aFauth, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.firebaseProvider = firebaseProvider;
        this.aFauth = aFauth;
        this.events = events;
        this.walletBalance = 0;
        this.aFauth.authState.subscribe(function (data) {
            console.log('A informacao de data ' + data.email);
            _this.userData = _this.firebaseProvider.getUser(data.email);
            console.log("userData");
            console.log(_this.userData);
            _this.userData.forEach(function (dataItem) {
                for (var y in Object.keys(dataItem)) {
                    _this.walletBalance = Math.floor(dataItem[y].Wallet * 100) / 100;
                    _this.name = dataItem[y].Name;
                    _this.last = dataItem[y].Last;
                    _this.email = dataItem[y].email;
                }
            });
        });
    }
    ProfilePage.prototype.logout = function () {
        this.events.publish('user:logout');
        //this.navCtrl.setRoot(LoginPage);
    };
    ProfilePage.prototype.goDemoPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__previous_order_previous_order__["a" /* PreviousOrderPage */]);
    };
    ProfilePage.prototype.goFriendsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__friends_friends__["a" /* FriendsPage */]);
    };
    ProfilePage.prototype.goWalletPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__wallet_wallet__["a" /* WalletPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\profile\profile.html"*/'<ion-header>\n \n  <ion-navbar color="dark">\n    <ion-title>\n      <h1 style="color: #fff; margin-bottom: 20px;\n      font-size: 30px;\n      \n      margin-top:20px;\n      text-align: center;\n font-family: \'Pacifico\' , cursive;">Profile</h1>\n    </ion-title>\n  </ion-navbar> \n  </ion-header>\n\n  <ion-content class="card-background-page">\n  \n \n\n  <img class= "image" src="https://st3.cricketcountry.com/wp-content/uploads/2018/09/ViratKohli4thTest.jpg">\n <br>\n <h2 style="text-align: center; margin-bottom: 0%; padding-bottom:0%;">{{name}} {{last}}</h2>\n<p style="margin-top: 0%; padding-top:0%;">{{email}}</p> \n<h3 style="text-align: center; padding-bottom: 0%; margin-bottom: 0%;">Wallet Balance<p style="padding: 0%; margin-top:0%;">Rs: {{walletBalance}}</p></h3>\n\n<button ion-button class="buttons1" round color="light" (click)="goDemoPage()">Previous Orders</button> <br><br>\n<!-- <button ion-button class="buttons1" id="wallet" round color="light" (click)="goWalletPage()">Wallet</button> <br><br> -->\n<button ion-button class="buttons1" round color="light" (click)="goFriendsPage()">Friends</button> <br><br>\n<button ion-button class="buttons1" round color="light" (click)="logout()">Logout</button> <br><br>\n\n\n  </ion-content>\n\n\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var COLORS;
(function (COLORS) {
    COLORS["GREY"] = "#E0E0E0";
    COLORS["GREEN"] = "#76FF03";
    COLORS["YELLOW"] = "#FFCA28";
    COLORS["RED"] = "#DD2C00";
})(COLORS || (COLORS = {}));
var RatingComponent = /** @class */ (function () {
    function RatingComponent(fdb, navParams, viewCtrl, firebaseProvider) {
        this.fdb = fdb;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.firebaseProvider = firebaseProvider;
        this.rating = 0;
        this.ratingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.sendrating = [];
        this.foodItem = this.navParams.get('foodItem');
        this.id = this.navParams.get('orderId');
    }
    ;
    RatingComponent.prototype.rate = function (index) {
        this.rating = index;
        this.ratingChange.emit(this.rating);
        //window.alert("You have rated your food "+this.rating.toString() +" stars");
    };
    RatingComponent.prototype.getColor = function (index) {
        if (this.isAboveRating(index)) {
            return COLORS.GREY;
        }
        switch (this.rating) {
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
    };
    RatingComponent.prototype.isAboveRating = function (index) {
        return index > this.rating;
    };
    RatingComponent.prototype.buttonsendrating = function (foodItem) {
        var _this = this;
        var flag = 0;
        if (this.rating > 0) {
            this.firebaseProvider.getMenuItems().forEach(function (item) {
                if (flag == 0) {
                    for (var x in Object.keys(item)) {
                        for (var y in Object.keys(item[x])) {
                            //this.data = this.firebaseProvider.getMenuSubItems(""+item[x].$key+"/"+Object.keys(item[x])[y]);
                            if (Object.keys(item[x])[y] == foodItem) {
                                _this.cat = item[x].$key;
                                console.log(_this.cat);
                                flag = 1;
                                _this.firebaseProvider.insertRating(foodItem, _this.rating, _this.cat);
                            }
                            //console.log(Object.keys(item[x])[y]);
                        }
                    }
                }
            });
            //this.fdb.list("/myItems/").push(this.rating);
            this.viewCtrl.dismiss();
        }
    };
    RatingComponent.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], RatingComponent.prototype, "rating", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], RatingComponent.prototype, "ratingChange", void 0);
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "rating",template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\components\rating\rating.html"*/'<!-- Generated template for the RatingComponent component -->\n<div class="rating">\n    <div class="table-header1">\n        <div class="header__item1 header" >\n          \n          <h2 style="text-align: left; padding-left: 3px; padding-bottom: 3px;">RATE YOUR ORDER</h2>\n        </div>\n     <!--	<div class="header__item">Item</div>\n      <div class="header__item">Quantity</div>\n      <div class="header__item">Status</div> -->\n    </div>\n    <p style="padding-left: 10px; text-align: left;">We hope you enjoyed your meal! <br> Please help us improve our servcies by rating your order below</p>\n     <h3 style="color: white; text-align: left; padding-left: 10px; ">Order Id: <span class="cont"> {{id}}  </span> <br> Food: <span class="cont">  {{ foodItem }}  </span></h3>\n\n     <div class="stars">\n        <ion-icon  id="star" name="star" *ngFor="let num of [1,2,3,4,5]" (click)="rate(num)" [ngStyle]="{\'color\':getColor(num)}">\n          </ion-icon> <br> \n\n          <button class="butt" style="background: #00bfff;" ion-button (click)="buttonsendrating(foodItem)">Rate</button>\n  <button class="butt1" ion-button color="light" (click)="closeModal()">Cancel</button>\n     </div>\n  \n  \n</div>\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\components\rating\rating.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], RatingComponent);
    return RatingComponent;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(aFuth, toastCtrl, navCtrl, navParams, firebaseProvider) {
        this.aFuth = aFuth;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.user = {};
        this.userStud = {};
        this.userFac = {};
        this.regis = "stud";
        this.toastOptions =
            {
                message: 'Invalid Faculty ID',
                duration: 4000
            };
        this.toastRequired =
            {
                message: 'All fields are required',
                duration: 4000
            };
    }
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.regis == 'stud')) return [3 /*break*/, 3];
                        if (!(user.name != '' && user.email != '' && user.password != '' && user.phonenumber != '')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.aFuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        }
                        this.userStud.Name = user.name;
                        this.userStud.Last = user.lname;
                        this.userStud.email = user.email;
                        this.userStud.password = user.password;
                        this.userStud.phnno = user.phonenumber;
                        this.userStud.user = "Student";
                        this.userStud.Wallet = 0;
                        this.firebaseProvider.addUserStud(this.userStud);
                        return [3 /*break*/, 3];
                    case 2:
                        this.toastCtrl.create(this.toastRequired).present();
                        _a.label = 3;
                    case 3:
                        if (!(this.regis == 'fac')) return [3 /*break*/, 8];
                        if (!(user.name != '' && user.email != '' && user.password != '' && user.roomno != '' && user.phonenumber != '')) return [3 /*break*/, 7];
                        if (!(user.facId == '14544251')) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.aFuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 4:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        }
                        this.userFac.Name = user.name;
                        this.userFac.Last = user.lname;
                        this.userFac.email = user.email;
                        this.userFac.password = user.password;
                        this.userFac.phnno = user.phonenumber;
                        this.userFac.facId = user.facId;
                        this.userFac.roomno = user.roomnumber;
                        this.userFac.user = "Faculty";
                        this.userFac.Wallet = 0;
                        if (this.userFac.email != null)
                            this.firebaseProvider.addUserFac(this.userFac);
                        return [3 /*break*/, 6];
                    case 5:
                        this.toastCtrl.create(this.toastOptions).present();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        this.toastCtrl.create(this.toastRequired).present();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n</ion-header>\n<ion-content class="card-background-page">\n    <h1 style="color: #fff; margin-bottom: 20px;\n    font-size: 60px;\n    \n    margin-top:40px;\n    text-align: center;\n  font-family: \'Pacifico\' , cursive;">Liv2Eat</h1>\n    \n   \n      <p> We are excited to get you on board. Fill out this form and register yourselves to experience the \n        most intuitive and easy way to order food! \n  \n      </p>\n\n     \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n      <div class="login">\n          <div padding>\n              <ion-segment [(ngModel)]="regis">\n                <ion-segment-button value="stud" style="font-family: Lato">\n                  Student\n                </ion-segment-button>\n                <ion-segment-button value="fac" style="font-family: Lato">\n                  Faculty\n                </ion-segment-button>\n              </ion-segment>\n            </div>\n\n\n\n\n            <div [ngSwitch]="regis" >\n\n              <div  *ngSwitchCase="\'stud\'">\n                <!--	<ion-item > \n                      <ion-label color="light" floating >Name</ion-label>\n                      <ion-input type="text" [(ngModel)]= "user.name" required ></ion-input>\n                    </ion-item>\n                    <ion-item > \n                        <ion-label color="light" floating >Last name</ion-label>\n                        <ion-input type="text" [(ngModel)]= "user.lname" required></ion-input>\n                      </ion-item>\n                \n                <ion-item > \n                  <ion-label color="light" floating >Email Address</ion-label>\n                  <ion-input type="text" [(ngModel)]= "user.email" required></ion-input>\n                </ion-item>\n              \n                <ion-item> \n                  <ion-label color="light" floating>Password</ion-label>\n                  <ion-input type="password" [(ngModel)]= "user.password" required></ion-input>\n                </ion-item> \n            \n                <ion-item> \n                    <ion-label color="light" floating>Mobile Number</ion-label>\n                    <ion-input type="Number" [(ngModel)]= "user.phonenumber" required></ion-input>\n                  </ion-item> \n                  -->\n\n\n                <p>\n                  <span class="input1">\n                      \n                    <input type="text"  [(ngModel)]= "user.name" placeholder="First Name">\n                    <span></span>	\n                  </span>\n                </p>\n                <p>\n                  <span class="input1">\n                    <input type="text"  [(ngModel)]= "user.lname" placeholder="Last Name">\n                    <span></span>	\n                  </span>\n                </p>\n                <p>\n                  <span class="input1">\n                    <input type="text" [(ngModel)]= "user.email" placeholder="Email Address">\n                    <span></span>	\n                  </span>\n                </p>\n                <p>\n                  <span class="input1">\n                    <input type="password" [(ngModel)]= "user.password" placeholder="Password">\n                    <span></span>	\n                  </span>\n                </p>\n                <p>\n                  <span class="input1">\n                    <input type="number" [(ngModel)]= "user.phonenumber" placeholder="Mobile Number">\n                    <span></span>	\n                  </span>\n                </p>\n                  <br>\n            \n               <button class="butt" style="background: #488aff;" ion-button (click) = "register(user)">Register</button>\n            </div> \n            \n            \n            <div  *ngSwitchCase="\'fac\'">\n              <!--	<ion-item > \n                    <ion-label color="light" floating >Name</ion-label>\n                    <ion-input type="text" [(ngModel)]= "user.name" required></ion-input>\n                  </ion-item>\n                  <ion-item > \n                      <ion-label color="light" floating >Last name</ion-label>\n                      <ion-input type="text" [(ngModel)]= "user.lname" required></ion-input>\n                    </ion-item>\n              \n                <ion-item > \n                  <ion-label color="light" floating >Email Address</ion-label>\n                  <ion-input type="text" [(ngModel)]= "user.email" required></ion-input>\n                </ion-item>\n              \n                <ion-item> \n                  <ion-label color="light" floating>Password</ion-label>\n                  <ion-input type="password" [(ngModel)]= "user.password" required></ion-input>\n                </ion-item> \n            \n                <ion-item> \n                    <ion-label color="light" floating>Mobile Number</ion-label>\n                    <ion-input type="Number" [(ngModel)]= "user.phonenumber" required></ion-input>\n                  </ion-item> \n            \n                  <ion-item> \n                      <ion-label color="light" floating>Faculty ID</ion-label>\n                      <ion-input type="text" [(ngModel)]= "user.facId" required></ion-input>\n                    </ion-item> \n            \n                    <ion-item> \n                        <ion-label color="light" floating>Room No</ion-label>\n                        <ion-input type="text" [(ngModel)]= "user.roomnumber" required></ion-input>\n                      </ion-item> \n                -->\n\n                <p>\n                  <span class="input1">\n                    <input type="text"  [(ngModel)]= "user.name" placeholder="First Name">\n                    <span></span>	\n                  </span>\n                </p>\n                <p>\n                  <span class="input1">\n                    <input type="text"  [(ngModel)]= "user.lname" placeholder="Last Name">\n                    <span></span>	\n                  </span>\n                </p>\n                <p>\n                  <span class="input1">\n                    <input type="text" [(ngModel)]= "user.email" placeholder="Email Address">\n                    <span></span>	\n                  </span>\n                </p>\n                <p>\n                  <span class="input1">\n                    <input type="password" [(ngModel)]= "user.password" placeholder="Password">\n                    <span></span>	\n                  </span>\n                </p>\n                <p>\n                  <span class="input1">\n                    <input type="number" [(ngModel)]= "user.phonenumber" placeholder="Mobile Number">\n                    <span></span>	\n                  </span>\n                </p>\n                <p>\n                  <span class="input1">\n                    <input type="number" [(ngModel)]= "user.facId" placeholder="Faculty ID">\n                    <span></span>	\n                  </span>\n                </p>\n                <p>\n                  <span class="input1">\n                    <input type="text" [(ngModel)]= "user.roomnumber"  placeholder="Room Number">\n                    <span></span>	\n                  </span>\n                </p>\n                  <br>\n            \n               <button class="butt" style="background: #488aff;" ion-button (click) = "register(user)">Register</button>\n            </div>\n            </div>\n            </div>\n            \n            \n            </ion-content>\n            '/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoFirebasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemoFirebasePage = /** @class */ (function () {
    function DemoFirebasePage(navCtrl, navParams, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.newItem = '';
        this.foodItems = this.firebaseProvider.getFoodItems();
    }
    DemoFirebasePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DemoFirebasePage');
    };
    DemoFirebasePage.prototype.addItem = function () {
        this.firebaseProvider.addItem(this.newItem);
    };
    DemoFirebasePage.prototype.removeItem = function (id) {
        this.firebaseProvider.removeItem(id);
    };
    DemoFirebasePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-demo-firebase',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\demo-firebase\demo-firebase.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Shopping List\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content>\n  <ion-row>\n    <ion-col col-9>\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="newItem" placeholder="New Food item"></ion-input>\n      </ion-item>\n    </ion-col>\n    <ion-col>\n      <button ion-button (click)="addItem()">Add!</button>\n    </ion-col>\n  </ion-row>\n \n  <ion-list>\n    <ion-item-sliding *ngFor="let item of foodItems | async">\n      <ion-item>\n        {{ item.$value }}\n      </ion-item>\n      <ion-item-options side="right">\n        <button ion-button color="danger" icon-only (click)="removeItem(item.$key)"><ion-icon name="trash"></ion-icon></button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\demo-firebase\demo-firebase.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */]])
    ], DemoFirebasePage);
    return DemoFirebasePage;
}());

//# sourceMappingURL=demo-firebase.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_status_status__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_demo_firebase_demo_firebase__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_firebase_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_local_notifications__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_login_login__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_register_register__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_friends_friends__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_split_split__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_splitcart_splitcart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_notification_notification__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_previous_order_previous_order__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_rating_rating__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_blank_blank__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//rohan










var firebaseConfig = {
    apiKey: "AIzaSyDAAPiZM3ar79SWsmd2lXU0Y14po5t3Ho8",
    authDomain: "canteen-b59c6.firebaseapp.com",
    databaseURL: "https://canteen-b59c6.firebaseio.com",
    projectId: "canteen-b59c6",
    storageBucket: "canteen-b59c6.appspot.com",
    messagingSenderId: "210011172914"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_demo_firebase_demo_firebase__["a" /* DemoFirebasePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_split_split__["a" /* SplitPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_splitcart_splitcart__["a" /* SplitcartPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_previous_order_previous_order__["a" /* PreviousOrderPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_blank_blank__["a" /* BlankPage */],
                __WEBPACK_IMPORTED_MODULE_28__components_rating_rating__["a" /* RatingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/blank/blank.module#BlankPageModule', name: 'BlankPage', segment: 'blank', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/demo-firebase/demo-firebase.module#DemoFirebasePageModule', name: 'DemoFirebasePage', segment: 'demo-firebase', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/previous-order/previous-order.module#PreviousOrderPageModule', name: 'PreviousOrderPage', segment: 'previous-order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/friends/friends.module#FriendsPageModule', name: 'FriendsPage', segment: 'friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/split/split.module#SplitPageModule', name: 'SplitPage', segment: 'split', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splitcart/splitcart.module#SplitcartPageModule', name: 'SplitcartPage', segment: 'splitcart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wallet/wallet.module#WalletPageModule', name: 'WalletPage', segment: 'wallet', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_blank_blank__["a" /* BlankPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_notification_notification__["a" /* NotificationPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_previous_order_previous_order__["a" /* PreviousOrderPage */],
                __WEBPACK_IMPORTED_MODULE_28__components_rating_rating__["a" /* RatingComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_splitcart_splitcart__["a" /* SplitcartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_demo_firebase_demo_firebase__["a" /* DemoFirebasePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_friends_friends__["a" /* FriendsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_status_status__["a" /* StatusPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_wallet_wallet__["a" /* WalletPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_split_split__["a" /* SplitPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_18__providers_firebase_firebase__["a" /* FirebaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_blank_blank__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_blank_blank__["a" /* BlankPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FriendsPage = /** @class */ (function () {
    function FriendsPage(navCtrl, aFauth, navParams, firebaseProvider, afd) {
        this.navCtrl = navCtrl;
        this.aFauth = aFauth;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.afd = afd;
        this.foodItems = new Array();
        this.pendingFriends = new Array();
        this.friends = new Array();
        this.messages = new Array();
        this.pendingFriendStatus = new Array();
        this.sentFriends = new Array();
        this.items2 = new Array();
        this.loadedItems = new Array();
        this.searchItems1 = new Array();
        this.subitems = new Array();
        this.subitems1 = new Array();
        this.ordereditems = new Array();
        this.cost = new Array();
        this.aip = new Array();
        this.aip2 = new Array();
        this.pendingLength = 0;
        this.friendLength = 0;
        this.item_qty = 0;
        this.foodItemCount = new Array();
        this.count = 0;
    }
    FriendsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FriendsPage');
        this.aFauth.authState.subscribe(function (data) {
            // console.log('A informacao de data ' + data.email);
            _this.uname = data.email;
            console.log(data);
            _this.setId(_this.uname);
        });
        this.menu = "category";
    };
    FriendsPage.prototype.setUname = function (u, i) {
        // alert(i+u);
        this.id = i;
        this.uname = u;
        // alert(this.id+this.uname);
        //this.initializeItems(this.uname);
    };
    FriendsPage.prototype.setId = function (u) {
        var _this = this;
        // console.log(this.firebaseProvider.getCurrentUserId(u).);
        this.firebaseProvider.getCurrentUserId(u).forEach(function (item) {
            //console.log("###");
            //alert(item[0].$key);
            _this.id = item[0].$key;
            _this.initializeItems(u, _this.id);
        });
    };
    FriendsPage.prototype.initializeItems = function (uname, uid) {
        var _this = this;
        console.log("get current user");
        //console.log(this.firebaseProvider.getCurrentUser(uid));
        this.firebaseProvider.getMyPendingRequest(uid).forEach(function (item) {
            _this.pendingLength = item.length;
        });
        this.firebaseProvider.getMyFriends(uid).forEach(function (item) {
            _this.friendLength = item.length;
        });
        this.firebaseProvider.getCurrentUser(uid).forEach(function (item) {
            console.log(item[0]);
            var keyid = Object.keys(item);
            for (var x in keyid) {
                if (item[x].$key == "Friends") {
                    for (var y in item[x]) {
                        _this.pendingFriendStatus[y] = 3;
                    }
                }
                else if (item[x].$key == "SentRequest") {
                    for (var y in item[x]) {
                        _this.pendingFriendStatus[y] = 2;
                    }
                }
                else if (item[x].$key == "PendingRequest") {
                    for (var y in item[x]) {
                        _this.pendingFriendStatus[y] = 1;
                    }
                }
            }
            _this.firebaseProvider.getUserId().forEach(function (item) {
                _this.items = Object.keys(item);
                console.log(item[0].$key);
                _this.items2 = [];
                _this.pendingFriends = [];
                _this.sentFriends = [];
                _this.friends = [];
                console.log("pending status");
                console.log(_this.pendingFriendStatus);
                for (var x in _this.items) {
                    console.log(x);
                    if (_this.pendingFriendStatus[item[x].$key] != 1 && _this.pendingFriendStatus[item[x].$key] != 2 && _this.pendingFriendStatus[item[x].$key] != 3 && item[x].$key != uid)
                        _this.items2.push({ name: item[x].Name, last: item[x].Last, email: item[x].email, id: item[x].$key });
                    else if (_this.pendingFriendStatus[item[x].$key] == 1) {
                        _this.pendingFriends.push({ name: item[x].Name, last: item[x].Last, email: item[x].email, id: item[x].$key });
                    }
                    else if (_this.pendingFriendStatus[item[x].$key] == 2) {
                        _this.sentFriends.push({ name: item[x].Name, last: item[x].Last, email: item[x].email, id: item[x].$key });
                    }
                    else if (_this.pendingFriendStatus[item[x].$key] == 3) {
                        _this.friends.push({ name: item[x].Name, last: item[x].Last, email: item[x].email, id: item[x].$key });
                    }
                    console.log("Pending");
                    console.log(_this.pendingFriends);
                    console.log("sent");
                    console.log(_this.sentFriends);
                    console.log("friends");
                    console.log(_this.friends);
                }
                console.log(_this.items2);
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
    };
    FriendsPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        // this.initializeItems();
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.subitems1.length = 0;
        for (var x in this.items2) {
            this.subitems.length = 0;
            this.subitems.push(this.items2[x]);
            console.log(this.subitems);
            for (var y in this.subitems) {
                console.log(this.subitems[y]);
                //this.searchItems1 = 
                //console.log(this.items2[x][y]);
                this.items2[x] = this.subitems[y].filter(function (v) {
                    console.log(v, v.name);
                    if (v.name && q) {
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
    };
    //  changes from here
    FriendsPage.prototype.initialize = function (element) {
        //alert(this.foodItemCount[element]);
        if (this.foodItemCount[element] == null)
            this.foodItemCount[element] = 0;
        //alert(element+" count is"+this.foodItemCount[element]);
    };
    FriendsPage.prototype.increment = function (element, price) {
        if (this.foodItemCount[element] == 0) {
            this.ordereditems.push(element);
            this.cost[element] = price;
        }
        this.foodItemCount[element]++;
        //alert(this.foodItemCount[element]);
    };
    FriendsPage.prototype.decrement = function (element) {
        if (this.foodItemCount[element] != 0)
            this.foodItemCount[element]--;
        if (this.foodItemCount[element] == 0) {
            var index = this.ordereditems.indexOf(element, 0);
            if (index > -1) {
                this.ordereditems.splice(index, 1);
            }
        }
    };
    //changes till here	
    /*private addInCart(name,price,quantity){
     this.ordereditems.push(name);
     this.cost.push(price);
     this.qty.push(quantity);
     console.log(this.ordereditems);
      console.log(this.cost);
      console.log(this.qty);
     }*/
    FriendsPage.prototype.addFriend = function (uid, id, uemail, email) {
        console.log(this.items2);
        this.firebaseProvider.sendFriendRequest(uid, id, uemail, email);
    };
    FriendsPage.prototype.acceptRequest = function (friendName, uid, id, uemail, email) {
        this.messages.push("You accepted" + friendName + "'s friend request");
        this.firebaseProvider.acceptFriendRequest(uid, id, uemail, email);
    };
    FriendsPage.prototype.rejectRequest = function (friendName, uid, id, uemail, email) {
        this.messages.push("You rejected" + friendName + "'s friend request");
        this.firebaseProvider.acceptFriendRequest(uid, id, uemail, email);
    };
    //changes
    FriendsPage.prototype.getPrice = function (value, data, x) {
        var _this = this;
        value.forEach(function (dataItem) {
            var i = 0;
            for (var y in Object.keys(dataItem)) {
                _this.aip[dataItem[y].$key] = dataItem[y].$value;
                i++;
            }
            console.log(_this.aip + " ");
            _this.items2[x].push({ name: data, availability: _this.aip["Email"], price: _this.aip["Name"] });
            _this.aip.length = 0;
        });
        //console.log(this.aip);
    };
    FriendsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-friends',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\friends\friends.html"*/'<!--\n  Generated template for the FriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>\n      <h1 style="color: #fff; margin-bottom: 20px;\n      font-size: 30px;\n      \n      margin-top:20px;\n      text-align: center;\n font-family: \'Pacifico\' , cursive;">Friends</h1>\n \n    </ion-title>\n    \n  </ion-navbar> \n\n  <div padding>\n    <ion-segment [(ngModel)]="menu">\n      <ion-segment-button value="category" style="font-family: Lato">\n        Requests\n      </ion-segment-button>\n      <ion-segment-button value="full" style="font-family: Lato">\n        Friends\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n\n<ion-content class="card-background-page">\n  <div class="container2">\n  <div [ngSwitch]="menu" >\n    <ion-list *ngSwitchCase="\'category\'">\n    \n\n\n      <!-- PENDING REQUESTS -->\n      <div class="table1">\n        <div class="table-header1" >\n            <div class="header__item1" >\n              \n              <h2 #menuList>PENDING REQUESTS </h2>\n              \n            </div>\n            \n         <!--	<div class="header__item">Item</div>\n          <div class="header__item">Quantity</div>\n          <div class="header__item">Status</div> -->\n        </div>\n        <p class="display" style="text-align:left"  [class.display]="pendingLength!=0">Sorry you have no requests yet.</p>\n        <div class="table-content1" *ngFor="let y of pendingFriends">\n          <div class="table-row1">	\n              \n              <div class="table-data1 menuImg">\n                <ion-chip>\n                <ion-avatar>\n                <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" > \n                <!-- <img src="https://firebasestorage.googleapis.com/v0/b/canteen-b59c6.appspot.com/o/Category_images%2F{{item.image}}?alt=media&token=edcbbc30-5ecd-4170-8642-220fa4329a8a"> -->\n               </ion-avatar>\n              </ion-chip></div>\n            <div class="table-data1 content menuDet" >\n                <h3>{{y.name}} {{y.last}}</h3>\n                <div style="width: 100%; float: left;"> \n                Email: {{y.email}} \n                </div>\n                <br>\n                {{setUname(uname,id)}}\n              \n                <!--  <ion-icon name="person-add" (click)="addFriend(id,y.id,\'roshni.as@somaiya.edu\',y.email)"></ion-icon>-->\n                <button ion-button (click)="acceptRequest(y.name,id,y.id,uname,y.email)" >Accept</button><button ion-button color="light" (click)="rejectRequest(y.name,id,y.id,uname,y.email)">Reject</button>\n    \n            </div>\n            <div class="table-data1 menuAdd">\n              <!-- {{setUname(uname,id)}}\n              \n              <!--  <ion-icon name="person-add" (click)="addFriend(id,y.id,\'roshni.as@somaiya.edu\',y.email)"></ion-icon>-->\n             <!-- <button ion-button (click)="acceptRequest(y.name,id,y.id,uname,y.email)" >Accept</button><button ion-button color="light" (click)="rejectRequest(y.name,id,y.id,uname,y.email)">Reject</button>\n            -->\n            </div>\n         \n        \n          \n        </div>	\n      </div>\n    </div>\n\n\n\n\n      <!-- other users-->\n  \n<div class="table1">\n  <div class="table-header1" >\n      <div class="header__item1" >\n        \n        <h2 #menuList>PEOPLE YOU MAY KNOW</h2>\n      </div>\n   <!--	<div class="header__item">Item</div>\n    <div class="header__item">Quantity</div>\n    <div class="header__item">Status</div> -->\n  </div>\n  <div class="table-content1" *ngFor="let y of items2">\n    <div class="table-row1">	\n        \n        <div class="table-data1 menuImg">\n          <ion-chip>\n          <ion-avatar>\n          <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" > \n          <!-- <img src="https://firebasestorage.googleapis.com/v0/b/canteen-b59c6.appspot.com/o/Category_images%2F{{item.image}}?alt=media&token=edcbbc30-5ecd-4170-8642-220fa4329a8a"> -->\n         </ion-avatar>\n        </ion-chip></div>\n      <div class="table-data1 content menuDet" >\n          <h3>{{y.name}} {{y.last}} </h3>\n          <div style="width: 100%; float: left;"> \n          Email: {{y.email}} \n          </div>\n         \n\n      </div>\n      <div class="table-data1 menuAdd">\n       \n        {{setUname(uname,id)}}\n                \n                <ion-icon name="person-add" (click)="addFriend(id,y.id,uname,y.email)" class="person-icon"></ion-icon>\n                <ion-icon name="add-circle-outline"></ion-icon>\n      \n      </div>\n   \n  \n    \n  </div>	\n</div>\n</div>\n\n\n  </ion-list>\n  </div>\n\n  <div [ngSwitch] = "menu"> \n    <ion-list *ngSwitchCase="\'full\'">\n         <!--Friends  -->\n\n\n  <div class="table1">\n    <div class="table-header1" >\n        <div class="header__item1" >\n          \n          <h2 #menuList>FRIENDS</h2>\n        </div>\n     <!--	<div class="header__item">Item</div>\n      <div class="header__item">Quantity</div>\n      <div class="header__item">Status</div> -->\n    </div>\n    <p style="text-align:left" class="display" [class.display]="friendLength!=0">Seems like you have no friends right now. Click the Requests Tab and send friend requests to people you know.</p>\n    <div class="table-content1" *ngFor="let y of friends">\n      <div class="table-row1">	\n          \n          <div class="table-data1 menuImg">\n            <ion-chip>\n            <ion-avatar>\n            <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" > \n            <!-- <img src="https://firebasestorage.googleapis.com/v0/b/canteen-b59c6.appspot.com/o/Category_images%2F{{item.image}}?alt=media&token=edcbbc30-5ecd-4170-8642-220fa4329a8a"> -->\n           </ion-avatar>\n          </ion-chip></div>\n        <div class="table-data1 content menuDet" >\n            <h3>{{y.name}} {{y.last}}</h3>\n            <div style="width: 100%; float: left;"> \n            Email: {{y.email}} \n            </div>\n           \n\n        </div>\n        <div class="table-data1 menuAdd">\n         \n          {{setUname(uname,id)}}\n              \n            <!--  <ion-icon name="person-add" (click)="addFriend(id,y.id,\'roshni.as@somaiya.edu\',y.email)"></ion-icon>-->\n            <ion-icon name="checkmark-circle" class="custom-icon"></ion-icon>\n        \n        </div>\n     \n    \n      \n    </div>	\n  </div>\n</div>\n\n\n\n\n\n\n  <!--sent-->\n \n<div class="table1">\n  <div class="table-header1" >\n      <div class="header__item1" >\n        \n        <h2 #menuList>REQUESTS SENT</h2>\n      </div>\n   <!--	<div class="header__item">Item</div>\n    <div class="header__item">Quantity</div>\n    <div class="header__item">Status</div> -->\n  </div>\n  <div class="table-content1" *ngFor="let y of sentFriends">\n    <div class="table-row1">	\n        \n        <div class="table-data1 menuImg">\n          <ion-chip>\n          <ion-avatar>\n          <img src="http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" > \n          <!-- <img src="https://firebasestorage.googleapis.com/v0/b/canteen-b59c6.appspot.com/o/Category_images%2F{{item.image}}?alt=media&token=edcbbc30-5ecd-4170-8642-220fa4329a8a"> -->\n         </ion-avatar>\n        </ion-chip></div>\n      <div class="table-data1 content menuDet" >\n          <h3>{{y.name}} {{y.last}} </h3>\n          <div style="width: 100%; float: left;"> \n          Email: {{y.email}} \n          </div>\n         \n\n      </div>\n      <div class="table-data1 menuAdd">\n       \n        {{setUname(uname,id)}}\n                \n    \n       <div class="tabel-data1 content menuDet">Request <br> Sent </div>\n      \n      </div>\n   \n  \n    \n  </div>	\n</div>\n</div>\n    </ion-list>\n  </div>\n\n \n\n\n\n    </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\friends\friends.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FriendsPage);
    return FriendsPage;
}());

//# sourceMappingURL=friends.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the SplitcartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SplitcartPage = /** @class */ (function () {
    function SplitcartPage(navCtrl, navParams, firebaseProvider, afd) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.afd = afd;
        this.flag = 0;
        this.kitchen2 = new Array();
        this.orderData = new Array();
        this.orderQuantity = new Array();
        this.kitchenAdd = new Array();
        this.kitchenQuantity = new Array();
        this.itemQuantity = new Array();
        this.itemPrice = new Array();
        this.splitStatus = new Array();
        this.flagCancel = 0;
        this.friends = new Array();
        this.splitFriends = new Array();
        this.orders = new Array();
        this.order = {
            Order: '',
            Status: 'Pending',
            Amount: '',
            Quantity: '',
            Username: '',
            Details: '',
            Notification: '0',
            Date: '',
            Time: '',
            Room: ''
        };
        this.kitchenFinal = {
            Order: '',
            Status: 'Pending',
            Quantity: '',
            Username: '',
            Details: '',
            Notification: '0',
            Date: '',
            Time: '',
            Room: ''
        };
    }
    SplitcartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SplitcartPage');
        //this.navCtrl.remove(this.navCtrl.getPrevious().index);
        this.uname = this.navParams.get("username");
        this.id = this.navParams.get("id");
    };
    SplitcartPage.prototype.ionViewDidEnter = function () {
        this.getSplitRequest();
    };
    SplitcartPage.prototype.cancel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.firebaseProvider.getSplitDetails(this.id).forEach(function (item) {
                    if (_this.flag == 0) {
                        _this.flag = 1;
                        for (var x in item) {
                            if (item[x].$key == "RequestSent") {
                                for (var y in item[x]) {
                                    if (item[x][y] == 0) {
                                        console.log("remove request");
                                        console.log(y);
                                        console.log(_this.id);
                                        _this.firebaseProvider.removeSplitRequest(y, _this.id);
                                    }
                                }
                            }
                            if (item[x].$key == "SplitWallet") {
                                for (var y in item[x]) {
                                    console.log("remove wallet");
                                    console.log(y + item[x][y]);
                                    _this.firebaseProvider.addToWallet(y, item[x][y]);
                                }
                            }
                        }
                    }
                });
                this.firebaseProvider.removeSplitPayment(this.id);
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                return [2 /*return*/];
            });
        });
    };
    SplitcartPage.prototype.getSplitRequest = function () {
        var _this = this;
        this.firebaseProvider.getSplitDetails(this.id).forEach(function (item) {
            //console.log(item[0]);
            var keyid = Object.keys(item);
            for (var x in keyid) {
                // this.orders=[];
                // console.log("Data");
                //console.log(item[x].$key);
                if (item[x].$key == "RequestSent") {
                    var total = 1;
                    for (var y in item[x]) {
                        if (item[x][y] > 0)
                            total = total + item[x][y];
                        _this.splitFriends[y] = item[x][y];
                    }
                    _this.totalFriends = total;
                }
                if (item[x].$key == "Amount") {
                    _this.amount = item[x].$value;
                }
                _this.firebaseProvider.getUserId().forEach(function (item) {
                    var keys = Object.keys(item);
                    // console.log(item[0].$key);
                    _this.friends = [];
                    for (var x_1 in keys) {
                        if (_this.splitFriends[item[x_1].$key] == 0 || _this.splitFriends[item[x_1].$key] == 1 || _this.splitFriends[item[x_1].$key] == -1) {
                            _this.friends.push({ name: item[x_1].Name, email: item[x_1].email, id: item[x_1].$key, status: _this.splitFriends[item[x_1].$key] });
                        }
                        else if (item[x_1].$key == _this.id) {
                            _this.walletBalance = Math.floor(Number(item[x_1].Wallet) * 100) / 100;
                        }
                    }
                    //console.log("###");
                    //console.log(this.friends);
                });
                if (item[x].$key == "Order") {
                    _this.orders = item[x].$value.split(",");
                    // console.log(item[x].$value);
                }
                if (item[x].$key == "Quantity") {
                    _this.itemQuantity = item[x].$value.split(",").map(Number);
                }
                if (item[x].$key == "price") {
                    _this.itemPrice = item[x].$value.split(",").map(Number);
                }
                // this.orders.push({order:item[x].Order, quantity:item[x].Quantity, price:item[x].price });
                /* console.log("##$$##");
                 
                 console.log(this.itemPrice);
                 console.log(this.itemQuantity);
                 console.log(this.orders);
                 */
            }
        });
    };
    SplitcartPage.prototype.addInDb = function (deduct) {
        var _this = this;
        this.firebaseProvider.getSplitDetails(this.id).forEach(function (item) {
            // console.log("add in db");
            var keyid = Object.keys(item);
            for (var x in keyid) {
                if (item[x].$key == "Order") {
                    _this.order.Order = item[x].$value;
                    _this.orderData = item[x].$value.split(",");
                }
                if (item[x].$key == "Quantity") {
                    _this.order.Quantity = item[x].$value;
                    _this.orderQuantity = item[x].$value.split(",");
                }
                if (item[x].$key == "Username")
                    _this.order.Username = item[x].$value;
                if (item[x].$key == "Time")
                    _this.order.Time = item[x].$value;
                if (item[x].$key == "Date")
                    _this.order.Date = item[x].$value;
                if (item[x].$key == "Amount")
                    _this.order.Amount = item[x].$value;
                if (item[x].$key == "Details")
                    _this.order.Details = item[x].$value;
                if (item[x].$key == "kitchen")
                    _this.kitchen2 = item[x].$value.split(",");
                if (item[x].$key == "RequestSent")
                    _this.splitFriends = item[x];
            }
            for (var x in _this.orderData) {
                if (_this.kitchenAdd[_this.kitchen2[x]] == null) {
                    _this.kitchenAdd[_this.kitchen2[x]] = _this.orderData[x];
                    _this.kitchenQuantity[_this.kitchen2[x]] = _this.orderQuantity[x];
                }
                else {
                    _this.kitchenAdd[_this.kitchen2[x]] = _this.kitchenAdd[_this.kitchen2[x]] + "," + _this.orderData[x];
                    _this.kitchenQuantity[_this.kitchen2[x]] = _this.kitchenQuantity[_this.kitchen2[x]] + "," + _this.orderQuantity[x];
                }
            }
            /*console.log("%%%##$$");
            console.log(this.splitFriends);
            console.log(this.kitchenAdd);
            console.log(this.kitchenQuantity);
            console.log(deduct);
            console.log(this.id);*/
            if (_this.flag == 0) {
                _this.flag = 1;
                _this.firebaseProvider.addSplitOrder(_this.order, _this.kitchenFinal, _this.kitchenAdd, _this.kitchenQuantity, _this.id, _this.splitFriends, deduct);
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], { id: _this.id,
                    username: _this.uname });
                _this.navCtrl.parent.select(2);
            }
        });
    };
    SplitcartPage.prototype.goback = function () {
        //alert("goback");
        //console.log(this.qty2);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__menu_menu__["a" /* MenuPage */], {
            id: this.navParams.get('id'),
            username: this.navParams.get('username'),
            redirect: "Split",
            segment: "full",
        });
    };
    SplitcartPage.prototype.splitQuan = function (qty, price) {
        //this.itemQuantity.length=0;
        //console.log(qty);
        if (qty.length > 1) {
            this.itemQuantity = qty.split(',');
            this.itemPrice = price.split(',');
            //console.log("array is" + this.itemQuantity);
        }
        else {
            this.itemQuantity = qty;
            this.itemPrice = price;
            // console.log("array is" + this.itemQuantity[0]); 
        }
    };
    SplitcartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-splitcart',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\splitcart\splitcart.html"*/'<!--\n  Generated template for the SplitcartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>\n      <h1 style="color: #fff; margin-bottom: 20px;\n      font-size: 30px;\n      \n      margin-top:20px;\n      text-align: center;\n font-family: \'Pacifico\' , cursive;">Split Cart</h1>\n \n    </ion-title>\n    \n  </ion-navbar> \n\n</ion-header>\n\n\n<ion-content class="card-background-page">\n  <div class="container2">\n      <div class="table-header1">\n          <div class="header__item1" >\n            <div>\n            <h2>SPLIT STATUS</h2>\n          </div></div>\n       <!--	<div class="header__item">Item</div>\n        <div class="header__item">Quantity</div>\n        <div class="header__item">Status</div> -->\n      </div>\n      <div class="container1">\n      \n        <div class="table">\n          <div class="table-header">\n              \n            <div class="header__item">Email</div>\n            <div class="header__item">Status</div>\n            <div class="header__item">Contri</div>\n          </div>\n       \n            <div class="table-row"  *ngFor="let y of friends; let i=index">	\n              \n                \n              <div class="table-data">{{y.email}}</div>\n\n              <div class="table-data"><ion-icon name="stopwatch" class="enableWatch disableCheck" [class.disableCheck]="y.status!=0"></ion-icon><ion-icon name="checkmark-circle" class="enable disableCheck" [class.disableCheck]="y.status!=1"></ion-icon><ion-icon name="close-circle" class="enabled disabledClose" [class.disabledClose]="y.stastus!=-1"></ion-icon></div>\n             \n              <div class="table-data display" [class.display]="y.status!=1">\n                \n                {{amount/totalFriends}}\n              </div>\n              <div class="table-data display" [class.display]="y.status==1">\n                0\n                </div>\n          \n            \n            \n          </div>	\n        </div>\n      </div>\n     \n  \n  \n      <div class="table-header1">\n          <div class="header__item1" >\n            <div>\n            <h2>ORDER SUMMARY</h2>\n          </div></div>\n      </div>\n    <div class="container1">\n    \n      <div class="table">\n        <div class="table-header">\n            \n          <div class="header__item">Item</div>\n          <div class="header__item">Quantity</div>\n          <div class="header__item">Price</div>\n        </div>\n     \n          <div class="table-row"  *ngFor="let y of orders; let i=index">	\n              \n              \n            <div class="table-data">{{orders[i]}}</div>\n            <div class="table-data">{{itemQuantity[i]}}</div>\n            <div class="table-data">{{itemQuantity[i]*itemPrice[i]}}</div>\n        \n          \n          \n        </div>	\n      </div>\n    </div>\n    <div class="container1">\n      <br><br>\n      <ion-row align-items-center>\n        <ion-col size="4">\n            <h3 style="color: #488aff">Wallet Balance</h3> \n            \n        </ion-col>\n        <ion-col size="4">\n            <h3 style="color: #488aff">Total Amount </h3>\n           \n        </ion-col>\n          <ion-col size="4">\n              <h3 style="color: #488aff">Your Share</h3>\n          \n          </ion-col>\n        </ion-row>\n        <ion-row align-items-center>\n            <ion-col size="4">\n                \n                <h3>Rs {{walletBalance}}  </h3>\n            </ion-col>\n            <ion-col size="4">\n                \n               <h3>Rs {{amount}}</h3>\n            </ion-col>\n              <ion-col size="4">\n                  \n                  <h3>Rs {{amount/totalFriends}}</h3>\n              </ion-col>\n            </ion-row>\n        <br> \n   \n        <p style="text-align: left" class="display"  [class.display]="walletBalance>=amount/totalFriends ">Oh no your wallet has insufficient Balance. Please visit the main counter to recharge your wallet or Cancel this order</p>\n       \n       <button ion-button class="buttons1 disabled disabled1" round color="light" (click)="addInDb(amount/totalFriends)" [class.disabled]="walletBalance==0" [class.disabled1]="walletBalance<amount/totalFriends ">Checkout</button> <br>\n            <button ion-button class="buttons1" round color="light" (click)="cancel()" >Cancel</button>\n      </div>\n   \n  </div>\n    \n</ion-content>\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\splitcart\splitcart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SplitcartPage);
    return SplitcartPage;
}());

//# sourceMappingURL=splitcart.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* unused harmony export SegmentPage */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__splitcart_splitcart__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, aFauth, firebaseProvider, navParams, afd) {
        this.navCtrl = navCtrl;
        this.aFauth = aFauth;
        this.firebaseProvider = firebaseProvider;
        this.navParams = navParams;
        this.afd = afd;
        this.cartCount = 0;
        this.cartPage1 = __WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */];
        this.foodItems = new Array();
        this.items2 = new Array();
        this.bs = new Array();
        this.loadedItems = new Array();
        this.searchItems1 = new Array();
        this.subitems = new Array();
        this.subitems1 = new Array();
        this.ordereditems = new Array();
        //avail:boolean[]=new Array();
        this.cost = new Array();
        this.kitchen = new Array();
        this.aip = new Array();
        this.aip2 = new Array();
        this.bestseller = new Array();
        this.item_qty = 0;
        this.foodItemCount = new Array();
        this.count = 0;
        this.menuCategory = this.firebaseProvider.getMenuCategory();
        this.menu = "category";
        this.initializeItems();
        //console.log(this.items2);
        //this.loadedItems=this.items2;
        //console.log(this.loadedItems);
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        //console.log(this.navParams.get('quantity'));
        //console.log("$$$");
        //console.log(this.navParams);
        //this.navCtrl.parent.select(1);
        var _this = this;
        var data = this.aFauth.authState.subscribe(function (data) {
            _this.uname = data.email;
            console.log(data);
            _this.setId(_this.uname);
        });
        this.id = this.navParams.get('id');
        //alert(this.id);
        this.uname = this.navParams.get('uname');
        var total = 0;
        if (this.navParams.get('idData') != null) {
            for (var x in this.navParams.get('ordereditem')) {
                // console.log(this.navParams.get('quantity')["Batata Vada"]+" "+this.navParams.get('ordereditem')[x]);
                //@ts-ignore
                if (!this.ordereditems.includes(this.navParams.get('ordereditem')[x])) {
                    this.menu = this.navParams.get('segment');
                    //this.cartCount=this.navParams.get('quantity')[this.navParams.get('ordereditem')[x]]+this.cartCount;
                    this.foodItemCount[this.navParams.get('ordereditem')[x]] = this.navParams.get('quantity')[this.navParams.get('ordereditem')[x]];
                    this.ordereditems.push(this.navParams.get('ordereditem')[x]);
                    this.kitchen[this.navParams.get('ordereditem')[x]] = this.navParams.get('kitchen')[this.navParams.get('ordereditem')[x]];
                    this.cost[this.navParams.get('ordereditem')[x]] = this.navParams.get('price')[this.navParams.get('ordereditem')[x]];
                }
            }
        }
        for (var x in this.navParams.get('quantity')) {
            total = total + this.navParams.get('quantity')[x];
        }
        this.cartCount = total;
        //console.log(total);
        // console.log('ionViewDidLoad DemoFirebasePage');
    };
    MenuPage.prototype.initializeItems = function () {
        var _this = this;
        this.menuItems = this.firebaseProvider.getMenuItems();
        //try jagged array
        this.firebaseProvider.getMenuItems().forEach(function (item) {
            _this.items = Object.keys(item);
            for (var x in _this.items) {
                _this.items2[x] = [];
                _this.bestseller[x] = 0;
                for (var y in Object.keys(item[x])) {
                    //changed data
                    _this.data = _this.firebaseProvider.getMenuSubItems("" + item[x].$key + "/" + Object.keys(item[x])[y]);
                    //this.bestseller=	this.firebaseProvider.getBestSeller(""+item[x].$key+"/"+Object.keys(item[x])[y]);
                    //console.log("bestseller");
                    //console.log(this.bestseller);
                    _this.getPrice(_this.data, Object.keys(item[x])[y], x, _this.bestseller);
                }
            }
        });
        //this.items2 = this.loadedItems;
        //console.log(this.items2);
        //console.log("inside initialize");
    };
    MenuPage.prototype.setId = function (u) {
        var _this = this;
        this.firebaseProvider.getCurrentUserId(u).forEach(function (item) {
            _this.id = item[0].$key;
        });
    };
    MenuPage.prototype.getItems = function (searchbar) {
        // Reset items back to all of the items
        this.initializeItems();
        this.menu = "full";
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.subitems1.length = 0;
        for (var x in this.items2) {
            this.subitems.length = 0;
            this.subitems.push(this.items2[x]);
            //	console.log(this.subitems);
            for (var y in this.subitems) {
                //	console.log(this.subitems[y]);
                //this.searchItems1 = 
                //console.log(this.items2[x][y]);
                this.items2[x] = this.subitems[y].filter(function (v) {
                    //	console.log(v,v.name);
                    if (v.name && q) {
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
    };
    //  changes from here
    MenuPage.prototype.initialize = function (element) {
        //console.log(this.navParams.get('ordereditem'));
        if (this.foodItemCount[element] == null)
            this.foodItemCount[element] = 0;
    };
    MenuPage.prototype.increment = function (element, price, kitchen) {
        if (this.foodItemCount[element] == 0) {
            this.ordereditems.push(element);
            this.cost[element] = price;
            this.kitchen[element] = kitchen;
        }
        this.foodItemCount[element]++;
        this.cartCount++;
        //alert(this.foodItemCount[element]);
    };
    MenuPage.prototype.initializeNav = function () {
        //console.log("inside initialize nav"+this.navParams.get('orderitems'));
    };
    MenuPage.prototype.decrement = function (element) {
        if (this.foodItemCount[element] > 0) {
            this.foodItemCount[element]--;
            //alert(this.foodItemCount[element]);
        }
        if (this.foodItemCount[element] == 0) {
            var index = this.ordereditems.indexOf(element, 0);
            if (index > -1) {
                this.ordereditems.splice(index, 1);
            }
        }
        if (this.cartCount > 0) {
            this.cartCount--; //for cart badge
        }
    };
    //changes till here	
    /*private addInCart(name,price,quantity){
       this.ordereditems.push(name);
       this.cost.push(price);
       this.qty.push(quantity);
       console.log(this.ordereditems);
       console.log(this.cost);
       console.log(this.qty);
       }*/
    MenuPage.prototype.scrollToTop = function () {
        this.content.scrollTo(0, 0, 0);
    };
    MenuPage.prototype.scrollToBottom = function (category) {
        var _this = this;
        this.menu = "full";
        //let dimensions = this.content.getContentDimensions();
        //let elem:Element = document.getElementById("Snacks");
        //	console.log(this.menuList)
        this.menuList.changes
            .subscribe(function () {
            //@ts-ignore
            // console.log(this.menuList.toArray()[1].nativeElement.getBoundingClientRect().top+" "+this.menuList.toArray()[1].nativeElement.innerHTML+" "+category)
            for (var x in _this.menuList.toArray()) {
                //@ts-ignore
                if (category == _this.menuList.toArray()[x].nativeElement.innerHTML) {
                    //@ts-ignore
                    //		console.log(this.menuList.toArray()[x].nativeElement.offsetTop+" "+this.menuList.toArray()[x].nativeElement.innerHTML+" "+category);
                    //@ts-ignore
                    _this.content.scrollTo(0, _this.menuList.toArray()[x].nativeElement.offsetTop, 0);
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
    };
    MenuPage.prototype.sendData = function (id, uname) {
        var _this = this;
        //console.log(this.ordereditems);
        //console.log(this.cost);
        //console.log(this.foodItemCount);
        this.firebaseProvider.getSplitDetails(id).forEach(function (item) {
            // console.log(item);
            if (item[0] != null) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__splitcart_splitcart__["a" /* SplitcartPage */], {
                    id: id,
                    username: uname
                });
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */], {
                    cost1: _this.cost,
                    ordereditems1: _this.ordereditems,
                    qty1: _this.foodItemCount,
                    kitchen: _this.kitchen
                });
            }
        });
    };
    //changes
    MenuPage.prototype.getPrice = function (value, data, x, bs1) {
        var _this = this;
        value.forEach(function (dataItem) {
            //this.bestseller=bs1;
            var i = 0;
            for (var y in Object.keys(dataItem)) {
                _this.aip[dataItem[y].$key] = dataItem[y].$value;
                i++;
            }
            //console.log(this.aip+" ");
            var star;
            if (_this.aip["Rating"] != 0)
                star = Math.floor(_this.aip["Rating"] * 10) / 10;
            else
                star = "N/A";
            if (_this.aip["OrderCount"] > _this.bestseller[x]) {
                _this.bestseller[x] = _this.aip["OrderCount"];
                _this.bs[x] = data;
            }
            _this.items2[x].push({ name: data, availability: _this.aip["Availability"], rate: star, price: _this.aip["Price"], kitchen: _this.aip["Kitchen"] });
            _this.aip.length = 0;
            //console.log(this.items2);
            //this.bs[x]=this.bestseller;
            console.log(_this.bs);
            //console.log(this.items2);
            console.log(_this.bestseller);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChildren */])('menuList'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* QueryList */])
    ], MenuPage.prototype, "menuList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MenuPage.prototype, "searchbar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], MenuPage.prototype, "content", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\menu\menu.html"*/'<ion-header>\n \n  <ion-navbar color="dark">\n    <ion-title>\n      <h1 style="color: #fff; margin-bottom: 20px;\n      font-size: 30px;\n      \n      margin-top:20px;\n      text-align: center;\n font-family: \'Pacifico\' , cursive;">Menu</h1>\n <ion-fab  fab-size = "10px" right bottom > \n  <button ion-fab color="light" (click)="sendData(id,uname)"><ion-icon name="cart"></ion-icon></button>\n  <div *ngIf="cartCount>0">\n      <ion-badge color="danger" style="position:absolute; font-weight:bold; top: 1px; left:5px; font-size:12px">{{cartCount}}\n        </ion-badge>\n      </div>\n</ion-fab> \n    </ion-title>\n    \n  </ion-navbar> \n  \n  <ion-searchbar (ionInput)="getItems($event)" #searchbar></ion-searchbar>\n  \n  <div padding>\n    <ion-segment [(ngModel)]="menu">\n      <ion-segment-button value="category" (click)="scrollToTop()" style="font-family: Lato">\n        By Category\n      </ion-segment-button>\n      <ion-segment-button value="full" style="font-family: Lato">\n        Full Menu\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n</ion-header>\n\n\n\n\n<ion-content class="card-background-page">\n     \n\n  <div [ngSwitch]="menu" >\n    <ion-list *ngSwitchCase="\'category\'">\n	<!--<ion-list  *ngFor="let item of menuCategory | async">\n\n<ion-card>\n    <img src="https://static01.nyt.com/images/2015/01/28/dining/28KITCHEN1/28KITCHEN1-articleLarge.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; transform: scaleX(-1)"/>\n    <div class="card-title">{{item.$key}}</div>	\n    <div class="card-subtitle">{{item.Count}}</div>\n  </ion-card>\n\n</ion-list>-->\n<ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-card (click)="scrollToBottom(\'Hot Beverages\')">\n          <!-- <img src="https://1.bp.blogspot.com/-xCNmq7e0v5U/V2EoK3UiHjI/AAAAAAAALKc/SdotXpMT4eMFFys1z88q2t-o4q7w0rBeQCLcB/s1600/hot-drink.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/> -->\n            <img src="../../assets/imgs/menu/hb.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Hot Beverages</div>\n          <div class="card-subtitle">5 Items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card (click)="scrollToBottom(\'Snacks\')">\n          <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8aDwd6x-j3pATPZxJVu3sfL2SGszo2MOrDc2tJMo4Kj8QGVobw" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          <img src="../../assets/imgs/menu/snacks.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Snacks</div>\n          <div class="card-subtitle">23 Items</div>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card (click)="scrollToBottom(\'Fast Items\')">\n          <!-- <img src="https://i.ytimg.com/vi/AdxYGRZjbw4/maxresdefault.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; transform: scaleX(-1)"/> -->\n          <img src="../../assets/imgs/menu/fast.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Fast Items</div>\n          <div class="card-subtitle">4 Items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card (click)="scrollToBottom(\'Dosa Items\')"> \n          <!-- <img src="https://static01.nyt.com/images/2015/01/28/dining/28KITCHEN1/28KITCHEN1-articleLarge.jpg" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          <img src="../../assets/imgs/menu/dosa.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Dosas</div>\n          <div class="card-subtitle">12 Items</div>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://media.istockphoto.com/photos/south-indian-dish-uthappams-picture-id474271863?k=6&m=474271863&s=612x612&w=0&h=QKlMmDp6E8NAfmBRAygFMr6_dDkUTr5KP0bSF9T2BH4=" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          <img src="../../assets/imgs/menu/istockphoto-474271863-612x612.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Uthappa</div>\n          <div class="card-subtitle">10 Items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2014/01/veg-grilled-sandwich.jpg" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          <img src="../../assets/imgs/menu/sandwich.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Sandwiches</div>\n          <div class="card-subtitle">19 Items</div>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://i.pinimg.com/236x/5c/31/1b/5c311bbe46ecb69ea8110442223d9785--bombay-starter-recipes.jpg" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          <img src="../../assets/imgs/menu/chaat.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Chaat</div>\n          <div class="card-subtitle">6 Items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card (click)="scrollToBottom(\'Chinese\')">\n          <!-- <img src="https://www.foodmama.run/wp-content/uploads/276441-chinese-food.jpg" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          <img src="../../assets/imgs/menu/chinese.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Chinese</div>\n          <div class="card-subtitle">14 Items</div>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfEYgTqhG8Exxs8BIcPts1E681iAqmgGpKCB0MskN41Z-fb9hoQ" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          <img src="../../assets/imgs/menu/rice.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Rice</div>\n          <div class="card-subtitle">11 Items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="http://1.bp.blogspot.com/-aE_44klQgmw/Vl2gH9sDoUI/AAAAAAAAA-A/gfEpF9oNKoU/s1600/24.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; transform: scaleX(-1)"/> -->\n          <img src="../../assets/imgs/menu/gravy.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Gravy Items</div>\n          <div class="card-subtitle">6 Items</div>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://tastet.ca/wp-content/uploads/2017/11/pushap-indien-montreal-restaurant-3-1024x681.png" style = "max-width: 100%; object-fit: cover; height: 175px; transform: scaleX(-1)"/> -->\n          <img src="../../assets/imgs/menu/lunch.png" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Lunch</div>\n          <div class="card-subtitle">35 Items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://tastet.ca/wp-content/uploads/2017/11/pushap-indien-montreal-restaurant-3-1024x681.png" style = "max-width: 100%; object-fit: cover; height: 175px; transform: scaleX(-1)"/> -->\n          <img src="../../assets/imgs/menu/cold.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Cold Drinks</div>\n          <div class="card-subtitle">14 Items</div>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://static.punjabkesari.in/multimedia/2016_7image_16_51_406130260pav-bhaji--ll.jpg" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          <img src="../../assets/imgs/menu/pavbhaji.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Pav Bhaji</div>\n          <div class="card-subtitle">10 Items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="http://images6.fanpop.com/image/photos/36500000/Kawaii-food-image-kawaii-food-36568606-657-473.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; transform: scaleX(-1)"/> -->\n          <img src="../../assets/imgs/menu/extra.png" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Extra</div>\n          <div class="card-subtitle">6 Items</div>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://i.pinimg.com/originals/bd/9a/d5/bd9ad566f09e0522c6c9b0e4e0a26bc0.jpg" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          \n          <img src="../../assets/imgs/menu/icecream.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Ice Cream</div>\n          <div class="card-subtitle">30 Items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLcpBb8ur_EtclgeGb9f0Lsls2aTBT6Yma9pYFz_uXqgYc6o4xw" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          <img src="../../assets/imgs/menu/misc.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Miscellaneous</div>\n          <div class="card-subtitle">20+ Items</div>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2017/01/paneer-kathi-roll-recipe-1.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; transform: scaleX(-1)"/> -->\n          <img src="../../assets/imgs/menu/frankie.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Frankie</div>\n          <div class="card-subtitle">45 Items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://pbs.twimg.com/profile_images/825855788652568576/2AaoeT5m_400x400.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; transform: scaleX(-1)"/> -->\n          <img src="../../assets/imgs/menu/dabeli.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Dabeli</div>\n          <div class="card-subtitle">15 Items</div>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://i.pinimg.com/originals/bf/c1/1f/bfc11f7e03afbe0beb0da464254ecbb5.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; transform: scaleX(-1)"/> -->\n          <img src="../../assets/imgs/menu/juices.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Juices</div>\n          <div class="card-subtitle">11 Items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://i.pinimg.com/originals/d2/bc/ea/d2bcea6d9b93b11fd7c9cfc6bf423236.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; transform: scaleX(-1)"/> -->\n          <img src="../../assets/imgs/menu/milkshakes.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Milk Shakes</div>\n          <div class="card-subtitle">29 Items</div>\n        </ion-card>\n      </ion-col>\n     \n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="https://images6.alphacoders.com/412/412086.jpg" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          <img src="../../assets/imgs/menu/pizza.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Pizza</div>\n          <div class="card-subtitle">21 Items</div>\n        </ion-card>\n      </ion-col>\n      <ion-col>\n        <ion-card>\n          <!-- <img src="http://www.wallpapermaiden.com/image/2018/08/26/pasta-vegetables-top-view-23535-resized.jpeg" style = "max-width: 100%; object-fit: cover; height: 175px;"/> -->\n          <img src="../../assets/imgs/menu/pasta.jpg" style = "max-width: 100%; object-fit: cover; height: 175px; box-shadow: 0 0 900px rgba(0,0,0,0.9) inset;"/>\n          <div class="card-title">Pasta</div>\n          <div class="card-subtitle">11 Items</div>\n        </ion-card>\n      </ion-col>\n     </ion-row>\n   \n  </ion-grid>\n\n</ion-list>\n</div>\n\n\n<div [ngSwitch]="menu">\n    <!-- <ion-list *ngSwitchCase="\'full\'">\n	\n  <ion-list  *ngFor="let item of menuItems |async ; let i = index"  >\n    <div *ngIf="items2[i].length>0">\n      <h2 #menuList>{{item.$key}}</h2>\n    </div>  \n    \n\n      <ion-list  *ngFor="let y of items2[i]; let j = index">\n      \n        {{initialize(y.name)}}\n        {{initializeNav()}}\n	<ion-item class="disabled" [class.disabled]="y.availability==\'No\'">\n      <ion-avatar item-start>\n         \n         <img src="https://firebasestorage.googleapis.com/v0/b/canteen-b59c6.appspot.com/o/Category_images%2F{{item.image}}?alt=media&token=edcbbc30-5ecd-4170-8642-220fa4329a8a">\n        </ion-avatar>\n\n\n      <ion-label> \n          <ion-row>\n              <ion-col width-90>\n                  <h3>{{y.name}}</h3>\n                  <br> Rs.{{y.price}} <br>\n                   Available: {{y.availability}}\n              </ion-col>\n              <ion-col width-10>\n        \n                      <ion-icon name="remove-circle" (click)="decrement(y.name,y.price)"> </ion-icon>\n                      {{foodItemCount[y.name]}}\n               <ion-icon name="add-circle" (click)="increment(y.name,y.price)"> </ion-icon>\n                  \n              </ion-col>\n          </ion-row>          \n        </ion-label>       \n    </ion-item>\n  </ion-list>\n  </ion-list>\n</ion-list> -->\n\n\n\n\n<div class="container2" *ngSwitchCase="\'full\'">\n\n    <div class="table1"  *ngFor="let item of menuItems |async ; let i = index" >\n      <div class="table-header1" *ngIf="items2[i].length>0">\n          <div class="header__item1" >\n            <div *ngIf="items2[i].length>0">\n            <h2 #menuList>{{item.$key}}</h2>\n          </div></div>\n       <!--	<div class="header__item">Item</div>\n        <div class="header__item">Quantity</div>\n        <div class="header__item">Status</div> -->\n      </div>\n      <div class="table-content1" >\n        <div class="table-row1 disabled" *ngFor="let y of items2[i]" [class.disabled]="y.availability==\'No\'" >	\n            {{initialize(y.name)}}\n        {{initializeNav()}}\n            <div class="table-data1 menuImg">\n              <ion-chip>\n              <ion-avatar>\n              <!-- <img src="https://static01.nyt.com/images/2015/01/28/dining/28KITCHEN1/28KITCHEN1-articleLarge.jpg" >  -->\n              <img src="../../assets/imgs/menu/food.jpg"> \n              <!-- <img src="https://firebasestorage.googleapis.com/v0/b/canteen-b59c6.appspot.com/o/Category_images%2F{{item.image}}?alt=media&token=edcbbc30-5ecd-4170-8642-220fa4329a8a"> -->\n             </ion-avatar>\n            </ion-chip></div>\n          <div class="table-data1 content menuDet" >\n              <h3>{{y.name}}             \n              </h3>\n              \n              \n              <div style="width: 50%; float: left; font-size: 2.2rem;"> \n              Rs.{{y.price}} <br>\n            <!--   Available: {{y.availability}} -->\n              </div>\n              <div style="width: 50%; float: right;">\n                  Rating <br>\n                  {{y.rate}}<!--<ion-icon name="star"></ion-icon>-->\n                  </div>\n  \n          </div>\n          <div class="table-data1 menuAdd">\n            <div *ngIf="bs[i]==y.name">\n            <ion-badge class="badge">BEST SELLER </ion-badge>\n              <br>\n              </div>\n              <ion-icon name="remove-circle"  size="large" (click)="decrement(y.name,y.price)"> </ion-icon>\n              {{foodItemCount[y.name]}}\n       <ion-icon name="add-circle" size="large"  (click)="increment(y.name,y.price,y.kitchen)"> </ion-icon>\n         \n          </div>\n       \n      \n        \n      </div>	\n    </div>\n  </div>\n  </div>\n\n\n\n\n\n</div>\n\n\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\menu\menu.html"*/,
        })
        //@ts-ignore
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MenuPage);
    return MenuPage;
}());

var SegmentPage = /** @class */ (function () {
    function SegmentPage() {
        this.menu = "By Category";
    }
    return SegmentPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blank_blank__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(aFauth, toastCtrl, navCtrl, navParams) {
        this.aFauth = aFauth;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.flag = 0;
        this.toastOptions =
            {
                message: 'Invalid Email id or Password',
                duration: 5000
            };
    }
    LoginPage.prototype.ionViewCanEnter = function () {
        //this.checkUser();
        // console.log("logged in");
        return true;
    };
    LoginPage.prototype.checkUser = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                //console.log(user);
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]); //to the page where user navigates after login
                // User is signed in.
            }
        });
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__blank_blank__["a" /* BlankPage */], {
                    incoming: "login",
                    email: this.user.email,
                    password: this.user.password
                });
                return [2 /*return*/];
            });
        });
    };
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
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content class="card-background-page">\n  <!--<h1 style="color: #fff; margin-bottom: 20px;\n  font-size: 60px;\n  \n  margin-top:40px;\n  text-align: center;\nfont-family: \'Pacifico\' , cursive;">Liv2Eat</h1> -->\n<div class="loginp">\n    <img src="../../assets/imgs/logo_transparent.png" style="display: block; margin-left: auto; margin-right: auto;width: 60%;">\n  \n \n    <p>Bravo! You have come to the right place to fill your stomachs. Login to order food right from where you are and chill with your buddies while we prepare your order.\n\n    </p> \n    <div class="login">\n <!-- <ion-item > \n    <ion-label color="light" floating >Email Address</ion-label>\n    <ion-input type="text" [(ngModel)]= "user.email"></ion-input>\n  </ion-item>\n\n  <ion-item> \n    <ion-label color="light" floating>Password</ion-label>\n    <ion-input type="password" [(ngModel)]= "user.password"></ion-input>\n    <p class="error" *ngIf="error1">{{ error1 }}</p> \n  </ion-item> \n  \n     <p class="error" *ngIf="error1">{{ error1 }}</p> \n    <!-- <ion-label class="error" *ngIf="error">{{ error }}</ion-label> -->\n  \n  <!--TRYING -->\n  <br>\n  <p>\n      <span class="input1">\n        <input type="text" [(ngModel)]= "user.email" placeholder="Email Address">\n        <span></span>	\n      </span>\n    </p>\n    <p>\n        <span class="input1">\n          <input type="password" [(ngModel)]= "user.password" placeholder="Password">\n          <span>\n              <p class="error" *ngIf="error1">{{ error1 }}</p> \n          </span>	\n        </span>\n      </p>\n\n\n      <br>\n <button class="butt"  (click)="login()" >Login</button>\n <br>\n <p (click)="register()" > Not a member? <span style="color: #488cc1;">Register Here!</span></p>\n<!--<button class="butt1" ion-button (click)="register()" color="light">Register</button> -->\n\n</div>\n\n\n\n\n</div>\n\n\n\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\login\login.html"*/,
        })
        //@ts-ignore
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the BlankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BlankPage = /** @class */ (function () {
    function BlankPage(aFauth, navCtrl, toastCtrl, navParams) {
        this.aFauth = aFauth;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.flag = 0;
        this.toastOptions =
            {
                message: 'Invalid Email id or Password',
                duration: 5000
            };
    }
    BlankPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BlankPage');
        if (this.navParams.get("incoming") == "login") {
            this.login(this.navParams.get("email"), this.navParams.get("password"));
        }
        this.checkUser();
    };
    BlankPage.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.aFauth.auth.signInWithEmailAndPassword(email, password)];
                    case 1:
                        result = _a.sent();
                        //console.log("$$$$");
                        //console.log(result);
                        if (this.flag == 0) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                            this.flag = 1;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log("failure");
                        this.toastCtrl.create(this.toastOptions).present();
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    BlankPage.prototype.checkUser = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                //console.log(user);
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]); //to the page where user navigates after login
                // User is signed in.
            }
            else {
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
            }
        });
    };
    BlankPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-blank',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\blank\blank.html"*/'<!--\n  Generated template for the BlankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content class="card-background-page" padding>\n  <div class="blank1">\n    <img src="../../assets/imgs/logo_transparent.png" style="display: block; margin-left: auto; margin-right: auto;width: 70%;"> \n\n\n<img src="../../assets/imgs/load1.gif" style="display: block; margin-left: auto; margin-right: auto;width: 10%;">\n<p>Hold on! You are just few moments away...</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\blank\blank.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BlankPage);
    return BlankPage;
}());

//# sourceMappingURL=blank.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__status_status__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__split_split__ = __webpack_require__(130);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CartPage = /** @class */ (function () {
    function CartPage(events, navCtrl, alertController, aFauth, navParams, firebaseProvider, plt, localNotifications) {
        var _this = this;
        this.events = events;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.aFauth = aFauth;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.plt = plt;
        this.localNotifications = localNotifications;
        this.ordereditems2 = new Array();
        this.cost2 = new Array();
        this.kitchen2 = new Array();
        this.kitchenAdd = new Array();
        this.kitchenQuantity = new Array();
        this.qty2 = new Array();
        this.totalPrice = 0;
        this.walletBalance = 0;
        this.user = {};
        this.order = {
            Order: '',
            Status: 'Pending',
            Amount: '',
            Quantity: '',
            Username: '',
            Details: '',
            Notification: '0',
            Date: '',
            Time: '',
            Room: ''
        };
        this.kitchenFinal = {
            Order: '',
            Status: 'Pending',
            Quantity: '',
            Username: '',
            Details: '',
            Notification: '0',
            Date: '',
            Time: '',
            Room: ''
        };
        this.aFauth.authState.subscribe(function (data) {
            console.log('A informacao de data ' + data.email);
            _this.order.Username = data.email;
            _this.kitchenFinal.Username = data.email;
            _this.username = data.email;
            _this.userData = _this.firebaseProvider.getUser(data.email);
            console.log("userData");
            console.log(_this.userData);
            _this.userData.forEach(function (dataItem) {
                for (var y in Object.keys(dataItem)) {
                    _this.user1 = dataItem[y].user;
                    _this.roomno = dataItem[y].roomno;
                    _this.userId = dataItem[y].$key;
                    _this.walletBalance = Math.floor(dataItem[y].Wallet * 100) / 100;
                    console.log(_this.user1);
                }
            });
        });
        this.plt.ready().then(function (rdy) {
            //@ts-ignore
            _this.localNotifications.on('click', function (notification, state) {
                var json = JSON.parse(notification.data);
                var alert = alertController.create({
                    title: notification.title,
                    subTitle: json.mydata
                });
                alert.present();
            });
        });
        this.ordereditems2 = navParams.get('ordereditems1');
        this.cost2 = navParams.get('cost1');
        this.qty2 = navParams.get('qty1');
        this.kitchen2 = navParams.get('kitchen');
        console.log(this.ordereditems2);
        console.log(this.cost2);
        console.log(this.qty2);
        console.log("-------------");
        console.log(this.kitchen2);
        this.totalPrice = 0;
        this.totalPrice = 0;
        for (var x in this.ordereditems2) {
            console.log(this.cost2[x] + " " + Number(this.cost2[x]) + " " + this.totalPrice);
            this.totalPrice = this.totalPrice + Number(this.qty2[this.ordereditems2[x]]) * Number(this.cost2[this.ordereditems2[x]]);
        }
        this.order.Amount = "" + this.totalPrice;
        // this.sendNotification();
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        var d = date.getDate();
        var mon = date.getMonth();
        var yr = date.getFullYear();
        var day = date.getDay();
        console.log("Current DateTime ", date);
        console.log("Time", h, ":", m, ":", s);
        console.log("Date", d, "/", mon, "/", yr);
        console.log("Day", day);
        this.order.Date = d + "/" + mon + "/" + yr;
        this.order.Time = h + ":" + m + ":" + s;
        this.kitchenFinal.Date = d + "/" + mon + "/" + yr;
        this.kitchenFinal.Time = h + ":" + m + ":" + s;
    }
    CartPage.prototype.increment = function (n) {
        /*if(this.foodItemCount[element]==0)
       {
       this.ordereditems.push(element);
       this.cost[element]=price;
       }*/
        //alert("increment "+this.qty2[n]);  
        this.qty2[n] = Number(this.qty2[n]) + 1;
        //alert(this.foodItemCount[element]);
        this.totalPrice = this.totalPrice + Number(this.cost2[n]);
    };
    CartPage.prototype.decrement = function (n) {
        if (Number(this.qty2[n]) != 0) {
            this.qty2[n] = Number(this.qty2[n]) - 1;
            this.totalPrice = this.totalPrice - Number(this.cost2[n]);
            if (this.qty2[n] == 0) {
                for (var y in this.ordereditems2) {
                    if (this.ordereditems2[y] == n) {
                        console.log(y);
                        this.ordereditems2.splice(Number(y), 1);
                        console.log(this.ordereditems2);
                    }
                }
            }
        }
        //Roshni changes
        //Roshni changes done
    };
    CartPage.prototype.addInDb = function () {
        console.log(this.order);
        this.kitchenAdd = [];
        this.kitchenQuantity = [];
        console.log("######### kitchenAdd");
        console.log(this.kitchenAdd);
        this.walletBalance = this.walletBalance - this.totalPrice;
        this.firebaseProvider.updateWallet(this.walletBalance, this.userId);
        console.log(this.kitchenQuantity);
        this.order.Order = '';
        this.order.Amount = '';
        this.order.Quantity = '';
        for (var x in this.ordereditems2) {
            if (Number(x) != this.ordereditems2.length - 1) {
                this.order.Order = this.order.Order + this.ordereditems2[x] + ",";
                this.order.Quantity = this.order.Quantity + this.qty2[this.ordereditems2[x]] + ",";
                this.order.Amount = "" + this.totalPrice;
                //this.totalPrice= this.totalPrice +  Number(this.qty2[this.ordereditems2[x]])*Number(this.cost2[this.ordereditems2[x]]);
            }
            else {
                this.order.Order = this.order.Order + this.ordereditems2[x];
                this.order.Quantity = this.order.Quantity + this.qty2[this.ordereditems2[x]];
                this.order.Amount = "" + this.totalPrice;
            }
        }
        if (this.checked) {
            this.order.Room = this.rmno;
            this.kitchenFinal.Room = this.rmno;
            console.log(this.order.Room);
        }
        for (var x in this.ordereditems2) {
            console.log("######### orderitems2");
            console.log(this.ordereditems2[x]);
            if (this.kitchenAdd[this.kitchen2[this.ordereditems2[x]]] == null) {
                this.kitchenAdd[this.kitchen2[this.ordereditems2[x]]] = this.ordereditems2[x];
                this.kitchenQuantity[this.kitchen2[this.ordereditems2[x]]] = this.qty2[this.ordereditems2[x]];
            }
            else {
                this.kitchenAdd[this.kitchen2[this.ordereditems2[x]]] = this.kitchenAdd[this.kitchen2[this.ordereditems2[x]]] + "," + this.ordereditems2[x];
                this.kitchenQuantity[this.kitchen2[this.ordereditems2[x]]] = this.kitchenQuantity[this.kitchen2[this.ordereditems2[x]]] + "," + this.qty2[this.ordereditems2[x]];
            }
        }
        this.firebaseProvider.addOrder(this.order, this.kitchenFinal, this.kitchenAdd, this.kitchenQuantity);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__status_status__["a" /* StatusPage */]);
        console.log(this.kitchenAdd);
    };
    CartPage.prototype.goback = function () {
        //alert("goback");
        console.log(this.qty2);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__menu_menu__["a" /* MenuPage */], {
            idData: 2,
            ordereditem: this.ordereditems2,
            segment: "full",
            quantity: this.qty2,
            price: this.cost2,
            kitchen: this.kitchen2
        });
    };
    CartPage.prototype.splitPayment = function (uname, uid) {
        this.order.Order = '';
        this.order.Amount = '';
        this.order.Quantity = '';
        for (var x in this.ordereditems2) {
            if (Number(x) != this.ordereditems2.length - 1) {
                this.order.Order = this.order.Order + this.ordereditems2[x] + ",";
                this.order.Quantity = this.order.Quantity + this.qty2[this.ordereditems2[x]] + ",";
                this.order.Amount = "" + this.totalPrice;
                //this.totalPrice= this.totalPrice +  Number(this.qty2[this.ordereditems2[x]])*Number(this.cost2[this.ordereditems2[x]]);
            }
            else {
                this.order.Order = this.order.Order + this.ordereditems2[x];
                this.order.Quantity = this.order.Quantity + this.qty2[this.ordereditems2[x]];
                this.order.Amount = "" + this.totalPrice;
            }
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__split_split__["a" /* SplitPage */], {
            id: uid,
            order: this.order,
            username: uname,
            price: this.cost2,
            kitchen: this.kitchen2
        });
    };
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.sendNotification = function (orderid, statusid) {
        this.localNotifications.schedule({
            id: 1,
            title: 'Attention',
            text: 'Order ' + orderid + ' is ' + statusid,
            data: { mydata: 'My hidden message this is' },
        });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\cart\cart.html"*/'<ion-header>\n  \n  <ion-navbar color="dark">\n     \n    <ion-title>\n\n\n\n\n      <ion-fab left>\n          <button ion-button clear large (click)="goback()">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-fab>\n        \n      <h1 style="color: #fff; margin-bottom: 20px;\n      font-size: 30px;\n      \n      margin-top:20px;\n      text-align: center;\n font-family: \'Pacifico\' , cursive;">Cart</h1>\n    </ion-title>\n  </ion-navbar> \n  </ion-header>\n\n  <ion-content class="card-background-page">\n  \n \n\n  <img class= "image" src="https://st3.cricketcountry.com/wp-content/uploads/2018/09/ViratKohli4thTest.jpg">\n <br>\n <h3 class="cart" style="text-align: center"> Here is what you have ordered! </h3>\n <p> You can confirm your order by clicking the button below, and also give additional details for your order</p>\n <br><br>\n <!--<table>\n   <thead>\n   <tr>\n  <th> Food Item     </th>\n  <th> Quantity    </th>\n  <th> Price  </th>\n  </tr>\n</thead>\n\n  <tr *ngFor="let n of ordereditems2; let i=index ">\n      <td> {{n}}</td>\n      <td> {{qty2[i]}} </td>\n      <td> Rs. {{cost2[i]}}  </td>\n      </tr>\n     \n      <tr>\n        <td>Total Amount:<td>\n          <td>Rs. {{totalPrice}}</td>\n </table>  -->\n\n <div class="container1">\n\n    <div class="table">\n      <div class="table-header">\n          \n        <div class="header__item">Food Item</div>\n        <div class="header__item">Quantity</div>\n        <div class="header__item">Price</div>\n      </div>\n        \n      <div   *ngFor="let n of ordereditems2; let i=index ">\n\n      \n        <div class="table-row">		\n            \n          <div class="table-data">{{n}}</div>\n          <div class="table-data">\n            <ion-icon name="remove-circle" (click)="decrement(n)"> </ion-icon>{{qty2[n]}}<ion-icon name="add-circle" (click)="increment(n)"> </ion-icon></div>\n          <div class="table-data">Rs. {{cost2[n]*qty2[n]}}</div>\n      \n        </div>\n      </div>\n\n        <div class="table-row">		\n          <div class="table-data"></div>  \n          <div class="table-data">Total Amount</div>\n          <div class="table-data">Rs. {{totalPrice}}</div>\n          \n                  \n        </div>\n        \n        \n    </div>\n    <div *ngIf="user1==\'Faculty\'" class = "info">\n      \n       <!-- <ion-label color="primary">\n          <ion-checkbox color="primary" [(ngModel)]="checked"> </ion-checkbox>\n          <h3>Food Delivery</h3>\n        </ion-label> -->\n <ion-grid no-padding>\n   <ion-row>\n     <ion-col size="4" class="ion-justify-content-center">\n      <div class="ks-cboxtags">\n        <input type="checkbox" id="checkboxOne" value="Rainbow Dash"  [(ngModel)]="checked"><label for="checkboxOne">Food Delivery</label>\n      </div>\n     </ion-col>\n     <ion-col size="8" class="ion-justify-content-center">\n      <ion-item *ngIf="checked" class = "info">\n         \n        <ion-label color="primary" stacked>Room No:</ion-label>\n          <ion-input type="text" class="room" value="{{roomno}}" [(ngModel)]="rmno"></ion-input>\n        \n      </ion-item>\n     </ion-col>\n   </ion-row>\n </ion-grid>\n       \n\n         \n        \n     \n    </div>\n       \n          \n    <ion-item class = "info">\n      <ion-label color="primary" stacked>Additional Details</ion-label>\n      <ion-input type="text" [(ngModel)]="order.Details" placeholder="Eg. No Tomatoes, Jain, etc"></ion-input>\n    </ion-item>\n\n    <div class="info">\n      <ion-label color="primary" stacked>Wallet Balance</ion-label>\n      <p style="text-align: left; margin: 0%; padding: 0%;"> Rs. {{walletBalance}} </p>\n      <p style="text-align: left" class="display"  [class.display]="walletBalance>=totalPrice ">Oh no your wallet has insufficient Balance. Please visit the main counter to recharge your wallet</p>\n      <button ion-button class="butt disabled" [class.disabled]="totalPrice==0" (click)="splitPayment(username,userId)">Split</button>\n    </div>\n\n\n    \n    <button ion-button class="buttons1 disabled disabled1" round color="light" (click)="addInDb()" [class.disabled]="totalPrice==0" [class.disabled1]="walletBalance<totalPrice ">Checkout</button> <br><br>\n      \n  </div>\n\n \n\n  </ion-content>'/*ion-inline-end:"C:\Users\sonal\Documents\roshni\BE project\10-5-19\myApp (2)\myApp\src\pages\cart\cart.html"*/,
        })
        //@ts-ignore
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

},[237]);
//# sourceMappingURL=main.js.map