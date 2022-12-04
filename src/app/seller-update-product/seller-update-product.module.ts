import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerUpdateProductComponent } from './seller-update-product.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: SellerUpdateProductComponent,
  },
];
@NgModule({
  declarations: [SellerUpdateProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})
export class SellerUpdateProductModule {}
