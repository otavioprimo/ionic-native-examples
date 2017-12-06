import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//PAGES
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MediaStreamingPage } from '../pages/media-streaming/media-streaming';
import { GeolocationPage } from '../pages/geolocation/geolocation';
import { InappbrowserPage } from '../pages/inappbrowser/inappbrowser';
import { ImagePickerPage } from './../pages/image-picker/image-picker';
import { FingerprintAuthPage } from '../pages/fingerprint-auth/fingerprint-auth';
import { PinPage } from './../pages/pin/pin';
//PLUGINS
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { ZBar } from '@ionic-native/zbar';
import { Geolocation } from '@ionic-native/geolocation';
import { Device } from '@ionic-native/device';
import { DeviceInformationPage } from '../pages/device-information/device-information';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
import { ImagePicker } from '@ionic-native/image-picker';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PinDialog } from '@ionic-native/pin-dialog';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MediaStreamingPage,
    GeolocationPage,
    DeviceInformationPage,
    FingerprintAuthPage,
    ImagePickerPage,
    InappbrowserPage,
    PinPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MediaStreamingPage,
    GeolocationPage,
    DeviceInformationPage,
    FingerprintAuthPage,
    ImagePickerPage,
    InappbrowserPage,
    PinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ZBar,
    StreamingMedia,
    Geolocation,
    Device,
    FingerprintAIO,
    ImagePicker,
    InAppBrowser,
    PinDialog,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
