import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
 

@IonicPage()
@Component({
  selector: 'page-customcards',
  templateUrl: 'customcards.html',
})
export class CustomcardsPage {

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
    public menuCtrl: MenuController,
) {

  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
