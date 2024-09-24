import { Component, OnInit } from '@angular/core';
import { filter, map, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent implements OnInit {

  // Cold Observables
  observable$ = of([1, 2, 3, 4, 5]);
  observablePipe$ = of(1, 2, 3, 4, 5);
  myObservable = new Observable(observer => {
    observer.next("Hello");
    observer.next("World");
    observer.complete();
  });

  // Hot Observables (Multicast) - Can broadcast values to multiple subscribers without creating separate instances of the observable

  tunnedObservable$ = new Subject<string>();

  ngOnInit(): void {
    this.myObservable.subscribe(value => console.log(value));
    this, this.myObservable.subscribe({
      next: value => console.log(value),
      error: error => console.error(error),
      complete: () => console.log('Complete')
    });

    this.observablePipe$.pipe(
      filter(value => value % 2 === 0),
      map(value => value * 10)
    ).subscribe(result => console.log(result));

    this.tunnedObservable$.subscribe(value => console.log(value));
    this.tunnedObservable$.subscribe(value => console.log(value));
  }

  emitValue() {
    this.tunnedObservable$.next(`${(Math.random() * 100).toFixed(2)}`);
  }

}
