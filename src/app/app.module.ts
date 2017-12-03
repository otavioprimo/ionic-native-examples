import { ZBar } from '@ionic-native/zbar';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MediaStreamingPage } from '../pages/media-streaming/media-streaming';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MediaStreamingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MediaStreamingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ZBar,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
