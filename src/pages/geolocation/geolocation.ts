import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-geolocation',
  templateUrl: 'geolocation.html',
})
export class GeolocationPage {

  private latitude: any;
  private longitude: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController) {
  }

  getCurrentPosition(): void {
    let loading = this.loadingCtrl.create({
      content:'Getting current position'
    });
    loading.present();

    this.geolocation.getCurrentPosition()
      .then((data) => {
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
        loading.dismiss();
      }).catch(error => {
        loading.dismiss();
        console.log("Error getting location", error);
        alert("Error getting location");
      });
  }

  watchPosition(): void {
    this.geolocation.watchPosition()
      .subscribe((data) => {
        this.latitude = data.coords.latitude;
        this.longitude = data.coords.longitude;
      });
  }

}
