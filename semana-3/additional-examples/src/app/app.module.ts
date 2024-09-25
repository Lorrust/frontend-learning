import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubcomponentComponent } from './subcomponent/subcomponent.component';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';
import { BlueBackgroundDirective } from './directives/blue-background.directive';
import { MultiplyPipe } from './pipes/multiply.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SubcomponentComponent,
    Page1Component,
    Page2Component,
    BlueBackgroundDirective,
    MultiplyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
