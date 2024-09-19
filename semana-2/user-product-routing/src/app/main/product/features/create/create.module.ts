import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CreateModule { }
