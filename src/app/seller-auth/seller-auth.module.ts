import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SellerAuthComponent} from './seller-auth.component'
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const seller: Routes=[
  {
    path: '', component: SellerAuthComponent
     }
]

@NgModule({
  declarations: [
    SellerAuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
RouterModule.forChild(seller)
  ]
})
export class SellerAuthModule { }
