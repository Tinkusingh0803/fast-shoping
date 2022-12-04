import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SellerAddProductComponent } from './seller-add-product.component';
import {ReactiveFormsModule} from "@angular/forms"
const routes: Routes = [
  {
    path: '', component: SellerAddProductComponent
  }
]

@NgModule({
  declarations: [
    SellerAddProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SellerAddProductModule { }
