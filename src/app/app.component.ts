import { PinPage } from './../pages/pin/pin';
import { InappbrowserPage } from '../pages/inappbrowser/inappbrowser';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { MediaStreamingPage } from '../pages/media-streaming/media-streaming';
import { DeviceInformationPage } from '../pages/device-information/device-information';
import { FingerprintAuthPage } from '../pages/fingerprint-auth/fingerprint-auth';
import { ImagePickerPage } from '../pages/image-picker/image-picker';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  pages: Array<{ component: any, title: string, icon: string }>;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.pages = [
        { component: HomePage, title: 'Barcode Scanner', icon: 'home' },
        { component: MediaStreamingPage, title: 'Media Streaming', icon: 'videocam' },
        { component: GeolocationPage, title: 'Geolocation', icon: 'navigate' },
        { component: DeviceInformationPage, title: 'Device Informations', icon: 'information-circle' },
        { component: FingerprintAuthPage, title: "FingerPrint Auth", icon: 'finger-print' },
        { component: ImagePickerPage, title: "Image Picker", icon: 'images' },
        { component: InappbrowserPage, title: "In App Browser", icon: 'md-browsers' },
        { component: PinPage, title: "Pin Dialog", icon: 'unlock' }
      ];

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any): void {
    this.rootPage = page.component;
  }
}

