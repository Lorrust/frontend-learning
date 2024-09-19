import { Injectable } from '@angular/core';
import { Product } from '../../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private id = 0;
  private products: Array<Product> = [];

  addProduct(product: Product) {
    product.id = this.id;
    this.products.push(product);
    this.id++;
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

  get getProducts() {
    return this.products;
  }

  findById(id: number): Product | undefined {
    return this.products.find(product => product.id == id);
  }

  editProduct(product: Product) {
    this.products.forEach(productList => {
      if (productList.id === product.id) {
        productList.name = product.name;
        productList.price = product.price;
        return;
      }
    });
  }
}
