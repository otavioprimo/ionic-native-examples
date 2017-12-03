import { ZBar, ZBarOptions } from '@ionic-native/zbar';
import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private barcode: any;
  constructor(public navCtrl: NavController,
    private zbar: ZBar,
    private platform: Platform) {

  }

  scan(): void {
    let options: ZBarOptions = {
      camera: 'back',
      drawSight: true,
      flash: 'off',
      text_instructions: 'Scann a barcode',
      text_title: 'Scan'
    };

    if (!this.platform.is("mobileweb")) {
      this.zbar.scan(options)
        .then((result) => {
          this.barcode = result;
        }).catch(error => {
          console.log(error);
          this.barcode = "Something went wrong"
        });
    }
    else
      alert("Não compátivel");
  }
}
