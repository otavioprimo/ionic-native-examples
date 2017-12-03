import { MediaStreamingPage } from '../pages/media-streaming/media-streaming';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
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
        { component: MediaStreamingPage,title:'Media Streaming', icon:'videocam'}
      ];

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any): void {
    this.rootPage = page.component;
  }
}

