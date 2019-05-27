import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MalariaDataService } from '../malaria-data.service';
declare var google;

@Component({
  selector: 'app-all-malaria',
  templateUrl: './all-malaria.page.html',
  styleUrls: ['./all-malaria.page.scss'],
})
export class AllMalariaPage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  malariaData = [];

  constructor(
    private geolocation: Geolocation,
    private malariaSerivice: MalariaDataService) { }

  ngOnInit() {
    this.malariaData = this.malariaSerivice.getMalarias();
    this.displayGoogleMap();
    this.getMarkers();
  }

  displayGoogleMap() {
    const latLng = new google.maps.LatLng(-4.322447, 15.307045);

    const mapOptions = {
      center: latLng,
      disableDefaultUI: true,
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
  }

  getMarkers() {
    // tslint:disable-next-line:variable-name
    for (let _i = 0; _i < this.malariaData.length; _i++) {
      if (_i > 0) {
        this.addMarkersToMap(this.malariaData[_i]);
      }
    }
  }

  addMarkersToMap(malaria) {
    const position = new google.maps.LatLng(malaria.latitude, malaria.longitude);
    const malariaMarker = new google.maps.Marker({ position, title: malaria.name });
    malariaMarker.setMap(this.map);
  }
}