import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SellerHomeComponent } from './seller-home.component';
const routes: Routes=[
  {
    path: '', component: SellerHomeComponent
     }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SellerHomeModule { }
