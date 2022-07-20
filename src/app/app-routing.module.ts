import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from "./admin/sign-up/sign-up.component";
import {HomeComponent} from "./admin/home/home.component";
import {LogInComponent} from "./admin/log-in/log-in.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'login', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
