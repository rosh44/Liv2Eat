import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousOrderPage } from './previous-order';

@NgModule({
  declarations: [
    PreviousOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousOrderPage),
  ],
})
export class PreviousOrderPageModule {}
