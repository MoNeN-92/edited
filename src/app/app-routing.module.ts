import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { StoreComponent } from './store/store.component';


const routes: Routes = [

  {
    title:'aboutUs',
    path:'aboutUs',
    component:AboutComponent
  },
  {
    title:'services',
    path:'services',
    component:ServicesComponent
  },
  {
    title:'Contact',
    path:'Contact',
    component:ContactComponent
  },
  {
    title:'Products',
    path:'Products/:id',
    component:ProductsComponent
  },
  {
    title:'Store',
    path:'Store/:id',
    component:StoreComponent
  },



  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
