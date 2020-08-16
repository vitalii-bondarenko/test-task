import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutes } from './landing.routes';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutes
  ]
})
export class LandingModule { }
