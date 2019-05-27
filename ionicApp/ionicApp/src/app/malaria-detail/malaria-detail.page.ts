import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MalariaDataService } from '../malaria-data.service';
import { Malaria } from 'src/model/malaria';

declare var google;

@Component({
  selector: 'app-malaria-detail',
  templateUrl: './malaria-detail.page.html',
  styleUrls: ['./malaria-detail.page.scss'],
})
export class MalariaDetailPage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  malaria = {} as Malaria;

  constructor(
    private geolocation: Geolocation,
    private malariaSerivice: MalariaDataService) { }

  ngOnInit() {
    this.malaria = this.malariaSerivice.getMalaria();
    this.displayGoogleMap();
  }

  displayGoogleMap() {
    const latLng = new google.maps.LatLng(this.malaria.latitude, this.malaria.longitude);
    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
    const marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: latLng
    });
    this.addInfoWindow(marker, this.malaria.name + this.malaria.state);
  }

  addInfoWindow(marker, content) {
    const infoWindow = new google.maps.InfoWindow({
      content
    });
    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}