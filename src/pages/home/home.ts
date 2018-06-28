import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  customField = {
    property: 'domain',
    placeholder: 'Enter your domain'
  };

  constructor(public navCtrl: NavController) {

  }

}
