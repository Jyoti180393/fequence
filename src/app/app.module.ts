import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, WeatherComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
