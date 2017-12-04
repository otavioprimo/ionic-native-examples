import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Device } from '@ionic-native/device';

@Component({
  selector: 'page-device-information',
  templateUrl: 'device-information.html',
})
export class DeviceInformationPage {

  private uuid: any;
  private cordova: any;
  private model: any;
  private platform: any;
  private version: any;
  private manufacturer: any;
  private serial: any;
  private isVirtual: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private device: Device) {
  }

  ionViewDidLoad() {
    this.getInformations();
  }

  refresh() {
    this.getInformations();
  }

  getInformations(): void {
    this.uuid = this.device.uuid;
    this.cordova = this.device.cordova;
    this.model = this.device.model;
    this.platform = this.device.platform;
    this.version = this.device.version;
    this.manufacturer = this.device.manufacturer;
    this.serial = this.device.serial;
    this.isVirtual = this.device.isVirtual;

    // this.memory = this.extendedDeviceInformation.memory;
    // this.cpumhz = this.extendedDeviceInformation.cpumhz;
    // this.memory = this.extendedDeviceInformation.memory;
  }

}
