import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent},
  { path: 'product/category/:categoryId', component: ProductComponent },
  {path: 'products/add',component:ProductAddComponent},
  {path:"login" , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
