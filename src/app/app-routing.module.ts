import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignUpComponent} from "../admin/sign-up/sign-up.component";
import {HomeComponent} from "../admin/home/home.component";

const routes: Routes = [

  {path:'signUp' ,component:SignUpComponent},
  {path:'' ,component:HomeComponent},
  // {path:'login',component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
