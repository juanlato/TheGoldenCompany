import { Component, OnInit, ViewChild } from "@angular/core";
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";
import { ServicesService } from "src/app/services.service";
import { GlobalService } from "src/app/global.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-find-orders-carrier',
  templateUrl: './find-orders-carrier.component.html',
  styleUrls: ['./find-orders-carrier.component.sass']
})
export class FindOrdersCarrierComponent implements OnInit {

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  zoom = 18;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeId: "hybrid"
  };
  markers = [];
  infoContent = "";
  public direcction;
  constructor(private route: Router, public service: ServicesService, public global: GlobalService) { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(x => {
      this.center = {
        lat: x.coords.latitude,
        lng: x.coords.longitude
      };
      this.markers.push({
        position: {
          lat: x.coords.latitude,
          lng: x.coords.longitude
        },
        label: {
          color: "blue",
          text: "Home"
        },
        title: "Marker Title",
        info: "Home marquer ",
        options: {
          animation: google.maps.Animation.BOUNCE
        }
      });
    });

  }
  findDir() {
    if (this.direcction != '' && this.direcction != null) {
      let dir = (this.direcction.trim()).replace(' ', '+')
      this.service.geoCode(dir).subscribe(data => {
        this.center = {
          lat: data.results[0].geometry.location.lat,
          lng: data.results[0].geometry.location.lng
        };
        this.markers.push({
          position: {
            lat: data.results[0].geometry.location.lat,
            lng: data.results[0].geometry.location.lng,
          },
          label: {
            color: "blue",
            text: data.results[0].formatted_address
          },
          title: data.results[0].formatted_address,
          info: data.results[0].formatted_address,
          options: {
            animation: google.maps.Animation.BOUNCE
          }
        });
      });
    }

  }
  openInfo(marker: MapMarker, info) {
    this.infoContent = info;
    this.info.open(marker);

  }

}
