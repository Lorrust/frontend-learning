import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  title = 'additional-examples';

  @ViewChild('myDiv') myDiv!: ElementRef;
  @ViewChild('subcomponent') subcomponent!: SubcomponentComponent;

  ngAfterViewInit(): void {
    console.log(this.myDiv);
  }

  changeDivColor(): void {
    this.myDiv.nativeElement.style.backgroundColor = 'red';
  }
}
