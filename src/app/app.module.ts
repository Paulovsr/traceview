import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './maps/map/map.component';
import { AgmDirectionModule } from 'agm-direction'
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDhshvFaKlwMcb4W-3loUsCldP1OQ6UA7k'
    }),
    AgmDirectionModule, 
    BrowserModule,    
    ErrorsModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
