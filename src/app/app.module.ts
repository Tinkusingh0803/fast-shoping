import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MaterialExampleModule} from './material.modules'
import {MatNativeDateModule} from '@angular/material/core';
import { SellerHomeComponent } from './seller-home/seller-home.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, 
    SellerHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    HttpClientModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
