import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { DressesListComponent } from './dresses-list/dresses-list.component';
import { DressItemComponent } from './dress-item/dress-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    DressesListComponent,
    DressItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
