import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-inappbrowser',
  templateUrl: 'inappbrowser.html',
})
export class InappbrowserPage {

  private url: string = "";
  private http_type: string;
  private select_values: any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser) {
    this.select_values = [
      { value: 'http', label: "Http" },
      { value: 'https', label: "Https" },
    ];
    this.http_type = 'http';
  }

  openUrl(): void {
    let full_url =  this.http_type + '://' + this.url;
    this.iab.create(full_url, '_self');
  }

}
