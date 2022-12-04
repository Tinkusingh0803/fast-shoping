import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css'],
})
export class SellerHomeComponent implements OnInit {
  showSellerItem: any;
  displayedColumns: string[] = [
    'id',
    'name',
    'price',
    'category',
    'color',
    'description',
    'image',
    'edit',
    'delete',
  ];
  productMessage: any;
  iconDelete = faTrash;
  constructor(private _service: ProductService) {}
  ngOnInit(): void {
    this.getProductList();
  } 
  getProductList() {
    this._service.productList().subscribe((result: any) => {
      if (result) {
        this.showSellerItem = result;
        console.log(this.showSellerItem);
      }
    });
  }
  deleteProduct(id: any) {
    this._service.deleteProductItem(id).subscribe((res) => {
      if (res) {
        this.productMessage = 'product is deleted';
        this.getProductList();
      }
    });
    setTimeout(() => {
      this.productMessage = '';
    }, 3000);
  }
}
