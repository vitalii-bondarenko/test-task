import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersRoutes } from './users.routes';
import { LayoutModule } from '../../components/layout/layout.module';


@NgModule({
  declarations: [ UsersComponent ],
  imports: [
    CommonModule,
    UsersRoutes,
    LayoutModule
  ]
})
export class UsersModule {}
