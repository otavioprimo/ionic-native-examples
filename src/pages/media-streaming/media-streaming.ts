import { StreamingMedia, StreamingVideoOptions, StreamingAudioOptions } from '@ionic-native/streaming-media';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StreamingConstant } from '../models/MediaStreamingConstant';

@Component({
  selector: 'page-media-streaming',
  templateUrl: 'media-streaming.html',
})

export class MediaStreamingPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private streamingMedia: StreamingMedia) {

  }

  playVideo() {
    this.play(StreamingConstant.STREAMING_VIDEO, 'http://www.sample-videos.com/video/mp4/480/big_buck_bunny_480p_5mb.mp4');
  }

  playAudio(): void {
    this.play(StreamingConstant.STREAMING_AUDIO, 'http://soundbible.com/grab.php?id=2196&type=mp3');
  }

  /**
   * 
   * @param param @type StreamingConstant
   * @param url @type string
   */
  private play(param: StreamingConstant, url: string): void {
    if (param == StreamingConstant.STREAMING_VIDEO) {
      let options: StreamingVideoOptions = {
        orientation: 'landscape',
        successCallback: () => {
          console.log("Video Played");
        },
        errorCallback: (error) => {
          console.log("Error streaming", error);
        }
      };

      this.streamingMedia.playVideo(url, options);
    }
    if (param == StreamingConstant.STREAMING_AUDIO) {
      let options: StreamingAudioOptions = {
        bgColor: '#000000',
        initFullscreen: false,
        successCallback: () => {
          console.log("Video Played");
        },
        errorCallback: (error) => {
          console.log("Error streaming", error);
        }
      };

      this.streamingMedia.playAudio(url, options);
    }
  }

  stopAudio():void {
    this.streamingMedia.stopAudio();
  }
}
