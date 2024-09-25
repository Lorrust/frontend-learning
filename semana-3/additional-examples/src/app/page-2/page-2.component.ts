import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrl: './page-2.component.scss'
})
export class Page2Component {
  today = new Date();
  price = 10.5;
  successRate = 0.55;
  text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

  constructor(private route: ActivatedRoute) {
    console.log(this.route)
    console.log(this.route.snapshot.data['user'])
    this.route.data.subscribe((data) => console.log(data['user']));
  }
}
