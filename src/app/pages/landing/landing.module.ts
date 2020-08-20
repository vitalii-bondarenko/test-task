import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutes } from './landing.routes';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';



@NgModule({
  declarations: [LandingComponent, WelcomeComponent, BenefitsComponent, LandingFooterComponent],
  imports: [
    CommonModule,
    LandingRoutes,
    FormsModule
  ]
})
export class LandingModule { }
