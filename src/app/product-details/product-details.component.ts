import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productData:any;
  quantity = 1;
  constructor(private activeRoute:ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    let productId = this.activeRoute.snapshot.paramMap.get('productId');
    console.log(productId);
    productId && this.product.getProduct(productId).subscribe((result)=>{
      console.log(result);
      this.productData = result;
    })    
  }
  increment(){ 
    if (this.quantity < 10) {
      this.quantity = this.quantity+1; 
    } 
  }
  decrement(){
    if (this.quantity == 1) {
      this.quantity = 1;
    } else{

      this.quantity = this.quantity-1;
    }

  }

}
