import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductDetailsComponent} from './product-details.component';
import { RouterModule, Routes } from '@angular/router';
 
const router: Routes=[
  {
    path: '', component: ProductDetailsComponent
  }
]

@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class ProductDetailsModule { }
