import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomcardsPage } from './customcards';

@NgModule({
  declarations: [
    CustomcardsPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomcardsPage),
  ],
})
export class CustomcardsPageModule {}
