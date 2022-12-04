import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService { 
  constructor(private http: HttpClient) { }
  addProduct(addData:any){ 
    return this.http.post(environment.sellerApi+'/products', addData);
  }
  productList(){ 
    return this.http.get(environment.sellerApi+'/products');
  }
  deleteProductItem(id:any){
    return this.http.delete(`${environment.sellerApi+ '/products/' + id}`);
  }
  getProduct(id:any){
  return this.http.get(`${environment.sellerApi + '/products/' + id}`);
 }
 updateProduct(product:any){
  return this.http.put(`${environment.sellerApi + '/products/'+ product.id}`, product);
 }
 getCarousel(){
  return this.http.get(`${environment.sellerApi + '/products?_limit=4'}`)
 }
}