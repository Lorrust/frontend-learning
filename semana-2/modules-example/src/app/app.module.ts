import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstModuleModule } from './main/first-module/first-module.module';
import { SecondModuleModule } from './main/second-module/second-module.module';
import { FirstModuleRoutingComponent } from './main/first-module-routing/first-module-routing.component';
import { FormComponent } from './main/components/form/form.component';
import { ListComponent } from './main/components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstModuleRoutingComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
