import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';// IMPORT FOR LOCATION // PLUG IN
import { Browser } from '@capacitor/browser'; //IMPORT FOR BROWER //PLUG IN

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

 longitude:number = 0; //VARIABLE FOR LONGITUDE
 latitude: number = 0; //VARIABLE FOR LONGITUDE
 time: number = 0; //VARIABLE FOR TIME

  constructor() { }

  ngOnInit() {
  }

    //FUNCTION WITH ASYNC
    async getLocation(){
      const coordinates = await Geolocation.getCurrentPosition(); //BUILT IN FUNCTION 
      this.longitude = coordinates.coords.longitude; //STORES LONGITUDE COORDINATES TO VARIABLE LONGITUDE
      this.latitude = coordinates.coords.latitude; //STORES LATITUDE COORDINATES TO VARIABLE LATITUDE
      this.time = coordinates.timestamp; //STORES COORDINATES OF TIME TO TIME VARIABLE
      console.log('Current position:', coordinates); //DISPLAYS COORDINATES
    }
    
    //FUNCTION WITH ASYNC
    async getBrowser(){
      await Browser.open({url: 'http://www.google.com'}); //OPENS THE URL WHEN THE BROWERS IS PRESSED IN LOCATION.PAGE.HTML
    }

}
