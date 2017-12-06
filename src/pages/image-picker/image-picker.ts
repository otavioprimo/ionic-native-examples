import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';

@Component({
  selector: 'page-image-picker',
  templateUrl: 'image-picker.html',
})
export class ImagePickerPage {

  private images: any = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private imagePicker: ImagePicker) {
  }

  getImages(): void {
    let options: ImagePickerOptions = {
      quality: 100,
      // width: 720,
      // height: 480
    };

    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        console.log('Image URI: ' + results[i]);
      }
      this.images = results;
    }, (err) => {
      console.log("Error image picker", err);
    });
  }

}
