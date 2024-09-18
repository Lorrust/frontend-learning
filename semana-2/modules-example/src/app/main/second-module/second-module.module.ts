import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondModuleComponent } from './second-module.component';



@NgModule({
  declarations: [
    SecondModuleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SecondModuleComponent
  ]
})
export class SecondModuleModule { }
