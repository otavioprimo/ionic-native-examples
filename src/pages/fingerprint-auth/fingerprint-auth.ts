import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';

@Component({
  selector: 'page-fingerprint-auth',
  templateUrl: 'fingerprint-auth.html',
})
export class FingerprintAuthPage {

  private authToken: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private faio: FingerprintAIO) {
  }

  ionViewDidLoad() {

  }

  isAvaiable(): void {
    this.faio.isAvailable()
      .then((data: any) => {
        this.auth();
      }).catch(error => {
        alert("Finger Print Not Avaiable in your Device");
      });
  }

  auth(): void {
    this.faio.show({
      clientId: 'mysecret-id',
      clientSecret: 'mysecretpassword', //Only necessary for Android
      disableBackup: false,  //Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
    })
      .then((result: any) => {
        this.authToken = result;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

}
