import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutes } from './landing.routes';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutes,
    FormsModule
  ]
})
export class LandingModule { }
