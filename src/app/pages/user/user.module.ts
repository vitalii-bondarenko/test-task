import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserRoutes } from './user.routes';
import { LayoutModule } from '../../components/layout/layout.module';


@NgModule({
  declarations: [ UserComponent ],
  imports: [
    CommonModule,
    UserRoutes,
    LayoutModule
  ]
})
export class UserModule {}
