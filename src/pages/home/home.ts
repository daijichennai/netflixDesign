import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public isSearchbarOpened: boolean = false;

  constructor(public navCtrl: NavController) {

  }

  onSearch(event) {
    console.log(event.target.value);
  }

  goToMovieDetails(){
    this.navCtrl.push('MoviedetailsPage');
  }

}
