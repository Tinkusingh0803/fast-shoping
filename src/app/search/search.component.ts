import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchResult: any;
  constructor(
    private activaRoute: ActivatedRoute,
    private product: ProductService
  ) {}
  ngOnInit(): void {
    let query: any = this.activaRoute.snapshot.paramMap.get('query');
    query && this.product.searchProducts(query).subscribe((result) => {
        this.searchResult = result;
      });
  }
}
