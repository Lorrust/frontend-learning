import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../../models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent implements OnInit {

  form!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
    this.form.patchValue({ name: 'test', price: 0 });
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private formBuilder: FormBuilder) {
    this.activeRoute.params.subscribe(params => {
      const product: Product | undefined = this.productService.findById(params['id']);
      this.editProduct(product);
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: [null, (Validators.required, this.nameValidation.bind(this))],
      price: [0, (Validators.required, Validators.min(1))]
    });
  }

  nameValidation(formName: FormGroup) {
    if (formName.value === 'test') {
      return { nameValidation: true };
    }
    return null;
  }

  registerProduct() {
    const product = this.form.getRawValue();
  if (product && !product.id) {
      this.productService.addProduct(product);
    } else if (product && product.id) {
      this.productService.editProduct(product);
      this.router.navigate(['/list']);
    }
    // Reset form
    this.form.patchValue({ name: '', price: '' });
  }

  editProduct(product?: Product) {
    if (product) {
      this.form.patchValue(product);
    }
  }
}
