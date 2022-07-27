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
import {ProductDetailComponent} from "./admin/product/product-detail/product-detail.component";
import { ProductUpdateComponent } from './admin/product/product-update/product-update.component';
import {UploadAvatarComponent} from "./admin/upload/upload-avatar/upload-avatar.component";
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../environments/environment.prod";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { MyPageComponent } from './admin/manage-profile/my-page/my-page.component';
import {ChangeAvatarComponent} from "./admin/manage-profile/change-avatar/change-avatar.component";
import {httpInterceptorProvider} from "./security/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent, SignUpComponent, HomeComponent, LogInComponent, ProductCreateComponent, NavbarComponent, CreateCategoryComponent, ListCategoryComponent, ProductListComponent, FooterComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    UploadAvatarComponent,
    MyPageComponent,
    ChangeAvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatNativeDateModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
