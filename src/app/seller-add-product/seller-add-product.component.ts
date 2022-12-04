import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css'],
})
export class SellerAddProductComponent implements OnInit {
  isErrorMessage: any;

  getSellerData = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    color: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
  });

  constructor(private _service: ProductService) {}

  ngOnInit(): void {}
  addProductItem() {
    let storeItem = this.getSellerData.value;
    this._service.addProduct(storeItem).subscribe((res) => {
      this.isErrorMessage = 'Your data is submited successfully';
      setTimeout(() => {
        this.isErrorMessage = '';
      }, 3000);
    });
    this.getSellerData.reset();
  }
}
