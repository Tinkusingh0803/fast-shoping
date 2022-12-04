import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
  productMessage:any;
  updateItem:any;
  constructor(private route: ActivatedRoute, private _service: ProductService, private router: Router) { }
  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
this._service.getProduct(productId).subscribe(res=>{
  this.updateItem = res;
})
  }
  updateProductItem(updateAllProduct:any){ 
if (this.updateItem) {
  updateAllProduct.id = this.updateItem.id;
}
    this._service.updateProduct(updateAllProduct).subscribe(res=>{
      if (res) {
        this.productMessage = "product is Updated";
        this.router.navigate(['/seller-home'])
      } 
    });
    setTimeout(() => {
      this.productMessage = '';
    }, 3000);
  }
}
