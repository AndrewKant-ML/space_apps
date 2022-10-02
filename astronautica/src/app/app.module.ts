import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { EntityComponent } from './slots/entity/entity.component';
import { VehicleComponent } from './slots/vehicle/vehicle.component';
import { DestinationComponent } from './slots/destination/destination.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MapComponent,
    EntityComponent,
    VehicleComponent,
    DestinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
