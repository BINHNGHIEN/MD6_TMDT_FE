import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignUpComponent} from "./admin/sign-up/sign-up.component";
import {HomeComponent} from "./admin/home/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {LogInComponent} from "./admin/log-in/log-in.component";
import {ProductCreateComponent} from './admin/product/product-create/product-create.component';
import { NavbarComponent } from './blocks/navbar/navbar.component';
import { CreateCategoryComponent } from './admin/category/create-category/create-category.component';
import { ListCategoryComponent } from './admin/category/list-category/list-category.component';
import { ProductListComponent } from './admin/product/product-list/product-list.component';
import { FooterComponent } from './blocks/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, SignUpComponent, HomeComponent, LogInComponent, ProductCreateComponent, NavbarComponent, CreateCategoryComponent, ListCategoryComponent, ProductListComponent, FooterComponent
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
