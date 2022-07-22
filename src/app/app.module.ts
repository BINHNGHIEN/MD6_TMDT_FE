import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignUpComponent} from "./admin/sign-up/sign-up.component";
import {HomeComponent} from "./admin/home/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LogInComponent} from "./admin/log-in/log-in.component";
import {ProductCreateComponent} from './admin/product-create/product-create.component';
import { NavbarComponent } from './blocks/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent, SignUpComponent, HomeComponent, LogInComponent, ProductCreateComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
