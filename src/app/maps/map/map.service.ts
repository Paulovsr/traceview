import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({providedIn: 'root'})
export class MapService {

    private Local: any[] = [
        
    ];
    
    getMessage(){
        return of(
            { "lat": -23.689963,"lng": -46.686912 },
            { "lat": -24.689963,"lng": -45.686912 }
        );
    }
}