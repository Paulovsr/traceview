import { Component } from "@angular/core";
import { MapService } from "./map.service";

@Component({
    selector: 'tv-map',
    templateUrl: 'map.component.html',    
    styleUrls: ['map.component.css'],
})
export class MapComponent {
    title = 'Trace View';    
    lat: number = -23.689963;
    lng: number = -46.686912;
    /*lat: Number = 24.799448;
    lng: Number = 120.979021;    */

    getLocation() {
  
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {          
              console.log(position.coords.latitude);
              console.log(position.coords.longitude);
            });
        }
    }

    public msg : string;
    public mcar = "https://cdn3.iconfinder.com/data/icons/fatcow/32/link_add.png";
    public agmMarkers: agmmarker[] = [
    {
      lat: 12.954517,
      lng: 77.3507335,
      /*icn: this.mcar*/
    }
   ];
  
   constructor(private MapService : MapService) { }
  
  ngOnInit() {
   this.MapService
      .getMessage()
      .subscribe((msg: any) => {        
        console.log("msg: "+JSON.stringify(msg));
        this.updateMarkers(msg);
      });
      this.getDirection()
  }

    public waypoints: any = []
    public renderOptions = {
        draggable: false,        
        suppressMarkers: true,
    }
    public markerOptions = {
        origin: {            
            draggable: false,
            opacity: 0.0,
        },
        destination: {            
            draggable: false,            
            opacity: 0.0,
        },
    }

  public origin: any;
  public destination: any;
  dir = undefined;
  zoom: Number = 14;
  public getDirection() {
    this.dir = {
      origin: { lat: this.lat, lng: this.lng },
      destination: { lat: -23.645765, lng: -46.804175 }
    }
  }

  
  public updateMarkers(msg){
   this.agmMarkers = [];   
   let iterable = [
       {           
            "lat": -23.689963,"lng": -46.686912
       },
       {
            "lat": -24.689963,"lng": -45.686912
       }
   ];

for (let entry of iterable) {  
      this.agmMarkers.push({
        lat: +entry.lat,
        lng: +entry.lng,
        /*icn: this.mcar*/
      });
}
    
    for (let entry of msg) {
      console.log("entry.latlng.lat: "+entry.lat); 
      console.log("entry.latlng.lng: "+entry.lng); 
      this.agmMarkers.push({
        lat: +entry.lat,
        lng: +entry.lng,
        icn: this.mcar
      });
    }
   }
  }
  
  interface agmmarker {
    lat?: number;
    lng?: number;
    icn?: string;
  }