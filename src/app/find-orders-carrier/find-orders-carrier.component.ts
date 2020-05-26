import { Component, OnInit, ViewChild } from "@angular/core";
import { GoogleMap, MapInfoWindow, MapMarker } from "@angular/google-maps";
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

  constructor() { }

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
  openInfo(marker: MapMarker, info) {
    this.infoContent = info;
     this.info.open(marker);
  }

}
