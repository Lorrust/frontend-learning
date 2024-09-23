import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {

  products: Array<Product> = [];

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.updateList();
  }

  removeProduct(id?: number) {
    if (id || id == 0) {
      this.productService.removeProduct(id);
      this.updateList();
    }
  }

  editProduct(product: Product) {
    this.router.navigate([`/product/create/${product.id}`])
  }

  updateList() {
    this.products = this.productService.getProducts;
    console.log(this.products);
  }

}
