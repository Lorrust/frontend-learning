import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
      console.log(params);
      if (params['id']) {
        this.restaurantService.findById(params['id']).subscribe((restaurant: Restaurant) => {
          this.editRestaurant(restaurant);
        });
      }
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
      cnpj: [null, Validators.required],
      estrelas: [null, [Validators.required, this.starValidation]],
      tipoComida: [null, (Validators.required)],

    });
  }

  starValidation(control: FormControl) {
    const value = control.value;
    if (value < 0 || value > 3) {
      return { starValidation: true };
    }
    return null;
  }

  registerRestaurant() {
    const restaurant = this.form.getRawValue();
    console.log(restaurant);
    if (!restaurant.id) {
      this.restaurantService.addRestaurant(restaurant).subscribe(() => {
        this.router.navigate(['/list']);
      });
    } else if (restaurant.id) {
      this.restaurantService.editRestaurant(restaurant);
      this.router.navigate(['/list']);
    }
  }

  editRestaurant(restaurant?: Restaurant) {
    if (restaurant && restaurant.id) {
      this.restaurantService.findById(restaurant.id).subscribe((response: any) => {
        this.form.patchValue(response);
      });
    }
  }
}
