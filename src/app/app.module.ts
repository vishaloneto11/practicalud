import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { Nebulatest1Component } from './nebulatest1/nebulatest1.component';
import { LoggingService } from './Services/logging.service';
import { DemocanconicaltagComponent } from './democanconicaltag/democanconicaltag.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FeatureComponent } from './feature/feature.component';
import { HeaderComponent } from './header/header.component';
import { DynamicPageComponent } from './dynamic-page/dynamic-page/dynamic-page.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    Nebulatest1Component,
    DemocanconicaltagComponent,
    HomeComponent,
    AboutComponent,
    FeatureComponent,
    HeaderComponent,
    DynamicPageComponent,
    ProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
