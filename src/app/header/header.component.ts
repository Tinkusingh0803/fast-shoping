import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  authError:any= true;


  constructor(private seller: SellerService) {}


  ngOnInit(): void {
this.seller.headerHide.subscribe((res:any)=>{
  if (res) {
    this.authError=false;
  }
})
  }
}
