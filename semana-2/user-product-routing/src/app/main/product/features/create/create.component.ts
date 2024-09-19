import { ProductService } from './../../services/product.service';
import { Component } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  id?: number;
  name?: string;
  price?: number;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.activeRoute.params.subscribe(params => {
      const product: Product | undefined = this.productService.findById(params['id']);
      this.editProduct(product);
    });
  }

  registerProduct() {
  if (this.name && this.price && !this.id) {
      this.productService.addProduct({ name: this.name, price: this.price });
    } else if (this.id && this.name && this.price) {
      this.productService.editProduct({ id: this.id, name: this.name, price: this.price });
      this.router.navigate(['/listpricem']);
    }

    this.name = '';
    this.id = undefined;
    this.price = undefined;
  }

  editProduct(product?: Product) {
    if (product) {
      this.id = product.id;
      this.name = product.name;
      this.price = product.price;
    }
  }
}
