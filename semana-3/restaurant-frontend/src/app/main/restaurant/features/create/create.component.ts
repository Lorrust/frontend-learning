import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../../../models/restaurant.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  form!: FormGroup;

  ngOnInit(): void {
    this.buildForm();
  }

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService,
    private formBuilder: FormBuilder) {
    this.activeRoute.params.subscribe(params => {
      const restaurant: Restaurant | undefined = this.restaurantService.findById(params['id']);
      this.editRestaurant(restaurant);
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      name: [null, (Validators.required)],
      cnpj: [null, (Validators.required)],
      stars: [null, (Validators.required)],
      cuisine: [null, (Validators.required)],

    });
  }

  nameValidation(formName: FormGroup) {
    if (formName.value === 'test') {
      return { nameValidation: true };
    }
    return null;
  }

  registerRestaurant() {
    const restaurant = this.form.getRawValue();
    if (restaurant && !restaurant.id) {
      this.restaurantService.addRestaurant(restaurant);
    } else if (restaurant && restaurant.id) {
      this.restaurantService.editRestaurant(restaurant);
      this.router.navigate(['/list']);
    }
    // Reset form
    this.form.patchValue({ name: '', price: '' });
  }

  editRestaurant(restaurant?: Restaurant) {
    if (restaurant) {
      this.form.patchValue(restaurant);
    }
  }
}
