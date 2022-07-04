import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CountryComponent } from './pages/country/country.component';
import { RegionComponent } from './pages/region/region.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import '@github/details-dialog-element';
import { AboutComponent } from './components/about/about.component';
import { BackButtonDirective } from './directives/back-button.directive'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CountryComponent,
    RegionComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BackButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // WebComponents
  ]
})
export class AppModule { }
