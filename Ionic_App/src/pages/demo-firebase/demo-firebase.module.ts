import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemoFirebasePage } from './demo-firebase';

@NgModule({
  declarations: [
    DemoFirebasePage,
  ],
  imports: [
    IonicPageModule.forChild(DemoFirebasePage),
  ],
})
export class DemoFirebasePageModule {}
