import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: any = { "movie": "Jurassic World"};
  popupData: any;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {
  }

  presentPopover() {
    let popover = this.popoverCtrl.create(PopoverPage, { "movie": "Jurassic World"});
    popover.onDidDismiss(data => {
      console.log(data);
      this.popupData = data;
    });
    popover.present();
  }

}


