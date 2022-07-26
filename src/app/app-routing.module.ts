import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignUpComponent} from "./admin/sign-up/sign-up.component";
import {HomeComponent} from "./admin/home/home.component";
import {LogInComponent} from "./admin/log-in/log-in.component";
import {ProductCreateComponent} from "./admin/product/product-create/product-create.component";
import {ListCategoryComponent} from "./admin/category/list-category/list-category.component";
import {ProductListComponent} from "./admin/product/product-list/product-list.component";
import {CreateCategoryComponent} from "./admin/category/create-category/create-category.component";
import {ProductDetailComponent} from "./admin/product/product-detail/product-detail.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'login', component: LogInComponent},
  {path: 'product-create', component: ProductCreateComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'list-category', component: ListCategoryComponent},
  {path: 'create-category', component: CreateCategoryComponent},
  {path: 'detail/:id', component: ProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
