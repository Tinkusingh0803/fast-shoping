import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   images:any;
   productCard:any;
  constructor(private service: ProductService) { }
  ngOnInit(): void {
    this.service.getCarousel().subscribe((res:any)=>{
       this.images = res; 
    })
    this.service.productList().subscribe(res=>{
this.productCard = res;
    })
  }

}
