import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstModuleComponent } from './first-module.component';
import { SecondModuleModule } from '../second-module/second-module.module';



@NgModule({
  declarations: [
    FirstModuleComponent
  ],
  imports: [
    CommonModule,
    SecondModuleModule
  ],
  exports: [
    FirstModuleComponent
  ]
})
export class FirstModuleModule { }
