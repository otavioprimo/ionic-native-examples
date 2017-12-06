import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PinDialog } from '@ionic-native/pin-dialog';

@Component({
  selector: 'page-pin',
  templateUrl: 'pin.html',
})
export class PinPage {

  private pin: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private pinDialog: PinDialog) {
  }

  showPinDialog(): void {
    this.pinDialog.prompt('Enter your PIN', 'Verify PIN', ['OK', 'Cancel'])
      .then(
      (result: any) => {
        if (result.buttonIndex == 1) this.pin = result.input1;
        else if (result.buttonIndex == 2) console.log('User cancelled');
      }
      );
  }

}
